using System;
using System.Collections.Generic;

namespace NTR4_backend.Models
{
    public class Note
    {
        public static int currentID = 0;
        public List<string> Categories { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public DateTime Date { get; set; }
        public string DateFormatted { get; set; }
        public string FileType { get; set; }
        public int ID { get; }

        public Note()
        {
            Title = "untitled";
            Content = "";
            Date = DateTime.Now;
            DateFormatted = Date.ToString("d");
            Categories = new List<string>();
            ID = currentID++;
        }

        public Note(Note note)
        {
            this.update(note);
            ID = currentID++;
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