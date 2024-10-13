import Header from "@/app/components/header";
import VideoSearch from "@/app/components/videoSearch";
import NotesGenerator from "@/app/components/notesGenerator";
export default function P() {
  return (
    // <View>
    //     <Header />
    // </View>
    <div>
          <Header />
          <VideoSearch topics={["One dimensional motion","Momentum","Energy","Motion in two or more dimensions","Rotational motion","Gravity"]} />
        <NotesGenerator topics={["One dimensional motion","Momentum","Energy","Motion in two or more dimensions","Rotational motion","Gravity"]}/> 


    </div>


  );
}