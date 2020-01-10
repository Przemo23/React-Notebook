using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace Notebook.Models
{
    public static class Notebook
    {
        public static List<Note> AllNotes { get; set; }
        public static List<string> AllCategories { get; set; }
        public static string DirectoryName { get; set; }

        static Notebook()
        {
            Directory.SetCurrentDirectory(AppDomain.CurrentDomain.BaseDirectory);
            AllNotes = new List<Note>();
            AllCategories = new List<string>();
            DirectoryName = "C:\\Users\\01133297\\RiderProjects\\Notebook\\Notebook\\Notes";
            initializeNotes();
        }

        private static void initializeNotes()
        {
            string[] fileNames = Directory.GetFiles(DirectoryName);
            StreamReader file;
            foreach (string name in fileNames)
            {
                file = new StreamReader(name);
                var note = new Note();
                fillNote(note, name);
                AllNotes.Add(note);
                file.Close();
            }

            void fillNote(Note note, string name)
            {
                string textLine;
                note.Categories = takeCategories(file);
                note.Date = takeDate(file);
                note.DateFormatted = note.Date.ToString("MM/dd/yyyy");
                note.Title = name.Substring(name.LastIndexOf('\\')+1, name.LastIndexOf('.') - name.LastIndexOf('\\')-1);
                note.FileType = name.Substring(name.LastIndexOf('.')+1);
                note.IsMarkdown = note.FileType != "txt";
                
                while ((textLine = file.ReadLine()) != null)
                    note.Content += textLine;
            }
        }
        
        private static DateTime takeDate(StreamReader file)
        {
            string dateHeader = file.ReadLine();
            var year = Int32.Parse(dateHeader.Substring(11));
            var month = Int32.Parse(dateHeader.Substring(5, 2));
            var day = Int32.Parse(dateHeader.Substring(8, 2));
            return new DateTime(year, month, day);
        }

        private static List<string> takeCategories(StreamReader file)
        {
            string categoryHeader = file.ReadLine()?.Substring(9) ?? "";
            List<string> result = categoryHeader.Split(" ").ToList();
            foreach (string category in result)
                if(AllCategories.Find(cat => cat == category) == null)
                    AllCategories.Add(category);
            return result;
        }
    }
}