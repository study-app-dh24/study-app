import Header from "@/app/components/header";
import VideoSearch from "@/app/components/videoSearch";
import NotesGenerator from "@/app/components/notesGenerator";

export default function PhysicsIII() {
  return (
    <div>
    <Header />
    <VideoSearch topics={["Simple harmonic rotation","Wave propagation","Wave interference and diffraction","Optics","Heat transfer","Converting heat to work"]} />
  <NotesGenerator topics={["Simple harmonic rotation","Wave propagation","Wave interference and diffraction","Optics","Heat transfer","Converting heat to work"]}/> 


</div>

  );
}