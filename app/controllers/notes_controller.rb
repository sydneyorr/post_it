class NotesController < ApplicationController
 def index
  # puts 'index called'
  notes = Note.all
  render component: "Notes", props: { notes: notes }
 end

 def show
  puts "-----"
  note = Note.find(params[:id])
  render component: "Note", props: { note: note }
 end

 def new
  render component: "NewNote"
 end

 def create
  # this creates a user in memory
  note = Note.new(note_params)
  if note.save
    # go back to index 
    redirect_to notes_path
  else # say hey invalid input

  end
 end

 private 
 def note_params
  params.require(:note).permit(:title, :description)
 end
end