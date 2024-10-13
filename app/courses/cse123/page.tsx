import Header from "@/app/components/header";
import VideoSearch from "@/app/components/videoSearch";
import NotesGenerator from "@/app/components/notesGenerator";

export default function CSE123() {
  return (
    <div>
          <Header />
          <VideoSearch topics={["Inheritance","Polymorphism","Abstract Classes","ArrayIntList","Implementing Data Structures","References","Linked Nodes","Linked Nodes w/ Loops","Modifying Links","LinkedIntList","Linked Nodes w/ Loops","Runtime","Recursive Tracing","Recursive Programming","Exhaustive Search","Recursive Backtracking","Linked Lists w/ Recursion","Binary Trees: Traversal","Binary Search Trees","Machine Learning; SpamClassifier","Hashing",]} />
        <NotesGenerator topics={["Inheritance","Polymorphism","Abstract Classes","ArrayIntList","Implementing Data Structures","References","Linked Nodes","Linked Nodes w/ Loops","Modifying Links","LinkedIntList","Linked Nodes w/ Loops","Runtime","Recursive Tracing","Recursive Programming","Exhaustive Search","Recursive Backtracking","Linked Lists w/ Recursion","Binary Trees: Traversal","Binary Search Trees","Machine Learning; SpamClassifier","Hashing",]}/> 


    </div>
  );
}