using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Notebook.Models;


namespace Notebook.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {

        [HttpGet("[action]")]
        public IEnumerable<Note> AllNotes()
        {
            return Models.Notebook.AllNotes;
        }
        [HttpGet("[action]")]
        public IEnumerable<String> AllCategories()
        {
            return Models.Notebook.AllCategories;
        }

        [HttpPost("[action]")]
        public void CreateNote([FromBody]Note note)
        {
            Note newNote = new Note(note);
            for (int i = 1; !isTitleUnique(newNote); i++)
                newNote.Title = note.Title + "(" + i + ")";
            newNote.DateFormatted = newNote.Date.ToString("mm/dd/yyyy");
            Models.Notebook.AllNotes.Add(newNote);
            createFile(newNote);
        }


        [HttpPut("[action]")]
        public void EditNote([Bind("Categories, Title, Content, Date, IsMarkdown, ID")][FromBody]Note note)
        {
            Note updatedNote = Models.Notebook.AllNotes.Find(n => n.Id == note.Id);
            deleteFile(updatedNote);
            updatedNote.update(note);
            updatedNote.DateFormatted = updatedNote.Date.ToString("mm/dd/yyyy");
            for (int i = 1; !isTitleUnique(updatedNote); i++)
                updatedNote.Title = note.Title + "(" + i + ")";
            createFile(updatedNote);
        }
        
        [HttpDelete("[action]")]
        public void DeleteNote([FromBody]Delete model)
        {
            int noteId = Int32.Parse(model.IdString);
            Note deletedNote = Models.Notebook.AllNotes.Find(note => note.Id == noteId);
            deleteFile(deletedNote);
            Models.Notebook.AllNotes.Remove(deletedNote);
        }

      

        private void createFile(Note note)
        {
            string path = Path.Combine(Models.Notebook.DirectoryName, note.Title + "." + note.FileType);
            string data = "category:";
            foreach (string category in note.Categories)
                data += category + ' ';
            data += '\n' + "date:" + note.Date.ToString("mm/dd/yyyy") + '\n' + note.Content;
            System.IO.File.WriteAllText(path, data);
        }
        private void deleteFile(Note note)
        {
            string path = Path.Combine(Models.Notebook.DirectoryName, note.Title + "." + note.FileType);
            System.IO.File.Delete(path);
        }
        private bool isTitleUnique(Note note) => Models.Notebook.AllNotes.Find(n => n.Title == note.Title && n.Id != note.Id) == null;

    }
}