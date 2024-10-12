import Profile from "./components/profile";
import {Modal, ModalContent, ModalHeader, ModalBody, Button, ModalFooter, useDisclosure, Input} from "@nextui-org/react";

export default function Home() {
  return (
    // TODO: Change colors if needed
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
    <Input type="email" label="Email" />
    <Input type="email" label="Email" placeholder="Enter your email" />
  </div>

  
      /* <div className="mr-auto pl-8">
        [logo] [app_name]
      </div>

      <div className="mr-auto ml-auto px-4 flex flex-row gap-6">
        <a href="#" className="hover:text-light_purple"> Home </a>
        <a href="your_courses" className="hover:text-light_purple"> Your Courses </a>
        <a href="peer_connect" className="hover:text-light_purple"> Peer Connect </a>
      </div>

      <div className="ml-auto pr-8">
        <Profile />
      </div> */
    // </div>
  );
}
