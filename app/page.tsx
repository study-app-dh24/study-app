import Profile from "./components/profile";

export default function Home() {
  return (
    // TODO: Change colors if needed
    <div className="bg-dark_purple flex h-12 w-full items-center">
      <div className="mr-auto pl-8">
        [logo] [app_name]
      </div>

      <div className="mr-auto ml-auto px-4 flex flex-row gap-6">
        <a href="#" className="hover:text-light_purple"> Home </a>
        <a href="your_courses" className="hover:text-light_purple"> Your Courses </a>
        <a href="peer_connect" className="hover:text-light_purple"> Peer Connect </a>
      </div>

      <div className="ml-auto pr-8">
        <Profile />
      </div>
    </div>
  );
}
