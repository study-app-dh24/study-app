import Header from "@/app/components/header";
import VideoSearch from "@/app/components/videoSearch";
import NotesGenerator from "@/app/components/notesGenerator";
import { View } from "@aws-amplify/ui-react";
export default function ItemPage() {
  return (
    <View>
        <Header />
        <VideoSearch topics={["One dimensional motion","Momentum","Energy","Motion in two or more dimensions","Rotational motion","Gravity"]} />
      <NotesGenerator />


    </View>

  );
}