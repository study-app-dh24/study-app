import Header from "@/app/components/header";
import VideoSearch from "@/app/components/videoSearch";
import NotesGenerator from "@/app/components/notesGenerator";
export default function CSE121() {
  return (
    <div>
          <Header />
          <VideoSearch topics={["Printing; Turtle Basics","Datatypes; Expressions","Variables; Strings; Debugging","for Loops","Nested for Loops","Random class","Math class","Methods; Parameters; Scope","Return Values","Conditionals","While loops","LES 11 User Input (Scanner)","Arrays","Reference Semantics","2D Arrays","Array Patterns","SEC 17 2D Arrays & Array Patterns"]} />
        <NotesGenerator topics={["Printing; Turtle Basics","Datatypes; Expressions","Variables; Strings; Debugging","for Loops","Nested for Loops","Random class","Math class","Methods; Parameters; Scope","Return Values","Conditionals","While loops","LES 11 User Input (Scanner)","Arrays","Reference Semantics","2D Arrays","Array Patterns","SEC 17 2D Arrays & Array Patterns"]}/> 


    </div>
  );
}