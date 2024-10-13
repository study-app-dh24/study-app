import Header from "@/app/components/header";
import VideoSearch from "@/app/components/videoSearch";
import NotesGenerator from "@/app/components/notesGenerator";

export default function CSE122() {
  return (
    <div>
          <Header />
          <VideoSearch topics={["Functional Decomposition","ArrayLists","Stacks & Queues","Sets","for-each loop","Maps","Nested Collections","Introduction to Objects","LES 11 Encapsulation and Instance Methods","Interfaces","JUnit","Third Party Libraries"]} />
        <NotesGenerator topics={["Functional Decomposition","ArrayLists","Stacks & Queues","Sets","for-each loop","Maps","Nested Collections","Introduction to Objects","LES 11 Encapsulation and Instance Methods","Interfaces","JUnit","Third Party Libraries"]}/> 


    </div>
  );
}