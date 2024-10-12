'use client'

import Image from "next/image";
import React, { useEffect, useState } from "react";
import placeholderImg from '@/app/public/placeholder-pfp.svg';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

interface UserInfo {
  name: string,
  picture: string,
  bio: string,
  private: boolean
}

export default function Profile() {
  const [user, setUser] = useState<UserInfo>({ name: "", picture: "", bio: "", private: true });
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const getUserData = async () => {
    const fetchedUserData: UserInfo = {
      name: "Temp Name",
      picture: "Temp Pic",
      bio: "Temp Bio",
      private: false,
    };
    setUser(fetchedUserData);
  };

  useEffect(() => {
    getUserData();
  }, []);

  // return (
  //   <div className="flex flex-row items-center gap-2">
  //     <div> {user.name} </div>
  //     <Image
  //       className="w-8 h-8 text-lg hover:cursor-pointer"
  //       alt=''
  //       src={placeholderImg}
  //     />
  //   </div>
  // );

  return (
    <>
    <div className="flex flex-row items-center gap-2">
      <div> {user.name} </div>
        <Image
        className="w-8 h-8 text-lg hover:cursor-pointer"
        onClick={onOpen}
        alt=''
        src={placeholderImg}
        />
    </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="bg-black rounded-3xl">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                  dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. 
                  Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. 
                  Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur 
                  proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}