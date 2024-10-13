import Header from "@/app/components/header";
import VideoSearch from "@/app/components/videoSearch";
import NotesGenerator from "@/app/components/notesGenerator";
export default function CalcII() {
  return (
    <div>
                <Header />
          <VideoSearch topics={["Antiderivatives","Areas and Riemann Sums ","Definite Integrals","The Fundamental Theorem of Calculus","Indefinite Integrals","Total vs Net Change","The Technique of Substitution","Applications: Areas between Curves","Volumes By Slicing & the Disks/Washers method","Application: Volumes of Solids of Revolutions via the Cylindrical Shells method","Applications: Work, Average Value of a Function","Techniques of Integration: Integration by Parts","More Techniques of Integration: Products of Trig Functions","Trigonometric Substitution","Partial Fractions","Strategies of Integration","Approximations of Integrals","Approximations of Integrals","Application: Arclength of a Curve","Application: Center of Mass","Intro to Differential Equations","Solving Separable Differentiable Equations","Applications of Diff. Eqs."]} />
        <NotesGenerator topics={["Antiderivatives","Areas and Riemann Sums ","Definite Integrals","The Fundamental Theorem of Calculus","Indefinite Integrals","Total vs Net Change","The Technique of Substitution","Applications: Areas between Curves","Volumes By Slicing & the Disks/Washers method","Application: Volumes of Solids of Revolutions via the Cylindrical Shells method","Applications: Work, Average Value of a Function","Techniques of Integration: Integration by Parts","More Techniques of Integration: Products of Trig Functions","Trigonometric Substitution","Partial Fractions","Strategies of Integration","Approximations of Integrals","Approximations of Integrals","Application: Arclength of a Curve","Application: Center of Mass","Intro to Differential Equations","Solving Separable Differentiable Equations","Applications of Diff. Eqs."]}/> 

    </div>
  );
}