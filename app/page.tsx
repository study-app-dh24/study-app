export default function Home() {
  return (
    // TODO: Change color of nav bar
    <div className="bg-black flex h-12 w-full items-center">

      <div className="mr-auto pl-8">
        [logo] [app_name]
      </div>

      <div className="mr-auto ml-auto px-4 flex flex-row gap-6">
        <a href="#"> Home </a>
        <a href="your_courses"> Your Courses </a>
        <a href="peer_connect"> Peer Connect </a>
      </div>

      <div className="ml-auto pr-8">
        [name] [pfp]
      </div>
    </div>
  );
}
