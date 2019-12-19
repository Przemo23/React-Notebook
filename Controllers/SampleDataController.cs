using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NTR4_backend.Models;

namespace NTR4_backend.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {

        [HttpGet("[action]")]
        public IEnumerable<Note> AllNotes()
        {
            return Notebook.AllNotes;
        }

        [HttpPost("[action]")]
        public void CreateNote([Bind("Categories, Title, Content, Date, FileType")]  Note note)
        {
            Note newNote = new Note(note);
            for (int i = 1; !isTitleUnique(newNote); i++)
                newNote.Title = note.Title + "(" + i + ")";
            newNote.DateFormatted = newNote.Date.ToString("mm/dd/yyyy");
            Notebook.AllNotes.Add(newNote);
            createFile(newNote);
        }


        [HttpPut("[action]")]
        public void EditNote([Bind("Categories, Title, Content, Date, FileType, ID")] Note note)
        {
            Note updatedNote = Notebook.AllNotes.Find(n => n.ID == note.ID);
            deleteFile(updatedNote);
            updatedNote.update(note);
            updatedNote.DateFormatted = updatedNote.Date.ToString("mm/dd/yyyy");
            for (int i = 1; !isTitleUnique(updatedNote); i++)
                updatedNote.Title = note.Title + "(" + i + ")";
            createFile(updatedNote);
        }
        
        [HttpDelete("[action]")]
        public void DeleteNote(int id)
        {
            Note deletedNote = Notebook.AllNotes.Find(note => note.ID == id);
            deleteFile(deletedNote);
            Notebook.AllNotes.Remove(deletedNote);
        }

        private void createFile(Note note)
        {
            string path = Path.Combine(Notebook.DirectoryName, note.Title + "." + note.FileType);
            string data = "category:";
            foreach (string category in note.Categories)
                data += category + ' ';
            data += '\n' + "date:" + note.Date.ToString("mm/dd/yyyy") + '\n' + note.Content;
            System.IO.File.WriteAllText(path, data);
        }
        private void deleteFile(Note note)
        {
            string path = Path.Combine(Notebook.DirectoryName, note.Title + "." + note.FileType);
            System.IO.File.Delete(path);
        }
        private bool isTitleUnique(Note note) => Notebook.AllNotes.Find(n => n.Title == note.Title && n.ID != note.ID) == null;

    }
}