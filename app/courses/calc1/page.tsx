import Header from "@/app/components/header";
import VideoSearch from "@/app/components/videoSearch";
import NotesGenerator from "@/app/components/notesGenerator";
export default function CalcI() {
  return (
    <div>
    <Header />
    <VideoSearch topics={["Tangents to circles","Tangents and velocity","Limits","Calculating Limits","Continuity","Asymptotes","Derivatives","Derivative function","Derivative rules","Trig derivatives","Chain rule","Implicit differentiation","parametric equations","Derivatives and parametrized curves","Logarithmic differentiation","Related rates","Linear approximation","Basics on min and max values","Derivatives and shape of a curve","L'Hôpital's rule and indeterminate forms","Optimization"]} />
  <NotesGenerator topics={["Tangents to circles","Tangents and velocity","Limits","Calculating Limits","Continuity","Asymptotes","Derivatives","Derivative function","Derivative rules","Trig derivatives","Chain rule","Implicit differentiation","parametric equations","Derivatives and parametrized curves","Logarithmic differentiation","Related rates","Linear approximation","Basics on min and max values","Derivatives and shape of a curve","L'Hôpital's rule and indeterminate forms","Optimization"]}/> 


</div>

  );
}