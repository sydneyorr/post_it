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

 def edit
  note = Note.find(params[:id])
  render component: "EditNote", props: { note: note }
 end

 def update
  note = Note.find(params[:id])
  if note.update(note_params)
    redirect_to notes_path
  else
    #handle invalid input here
  end
 end

 def destroy
  Note.find(params[:id]).delete
  redirect_to notes_path
 end

 private 
 def note_params
  params.require(:note).permit(:title, :description)
 end
end