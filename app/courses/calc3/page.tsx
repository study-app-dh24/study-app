import Header from "@/app/components/header";
import VideoSearch from "@/app/components/videoSearch";
import NotesGenerator from "@/app/components/notesGenerator";
export default function CalcIII() {
  return (
    <div>
          <Header />
          <VideoSearch topics={["3D coordinate system","vectors","dot products","projections","lines in space","planes in space","cylinders and quadric surfaces","vector functions and curves","derivatives and integrals of vector functions","curvature","normal and binormal vectors","normal plane","multi-variable functions","partial derivatives","tangent planes","differentials","optimization","double integrals over rectangles","double integrals over general regions","polar coordinates","double integrals in polar coordinates","mass and center of mass","first-order Taylor polynomials, including error bound","second- and higher-order Taylor polynomials, including error bound","Taylor polynomials and Taylor series"]} />
        <NotesGenerator topics={["3D coordinate system","vectors","dot products","projections","lines in space","planes in space","cylinders and quadric surfaces","vector functions and curves","derivatives and integrals of vector functions","curvature","normal and binormal vectors","normal plane","multi-variable functions","partial derivatives","tangent planes","differentials","optimization","double integrals over rectangles","double integrals over general regions","polar coordinates","double integrals in polar coordinates","mass and center of mass","first-order Taylor polynomials, including error bound","second- and higher-order Taylor polynomials, including error bound","Taylor polynomials and Taylor series"]}/> 


    </div>
  );
}