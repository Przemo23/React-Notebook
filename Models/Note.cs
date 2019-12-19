using System;
using System.Collections.Generic;

namespace Notebook.Models
{
    public class Note
    {
        public static int currentID =1;
        public List<string> Categories { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public DateTime Date { get; set; }
        public string DateFormatted { get; set; }
        public string FileType { get; set; }
        public int Id { get; }

        public Note()
        {
            Title = "untitled";
            Content = "";
            Date = DateTime.Now;
            DateFormatted = Date.ToString("d");
            Categories = new List<string>();
            Id = currentID++;
        }

        public Note(Note note)
        {
            this.update(note);
            Id = currentID++;
        }

        public void update(Note note)
        {
            this.Categories = note.Categories;
            this.Content = note.Content;
            this.Title = note.Title;
            this.Date = note.Date;
        }
    }
}