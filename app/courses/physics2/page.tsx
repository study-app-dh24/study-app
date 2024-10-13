import Header from "@/app/components/header";
import VideoSearch from "@/app/components/videoSearch";
import NotesGenerator from "@/app/components/notesGenerator";
export default function PhysicsII() {
  return (
    <div>
          <Header />
          <VideoSearch topics={["Electric and magnetic interactions","Electric circuits","Electromagnetic waves"]} />
        <NotesGenerator topics={["Electric and magnetic interactions","Electric circuits","Electromagnetic waves"]}/> 


    </div>
  );
}