'use client'

import Image from "next/image";
import React, { useEffect, useState } from "react";
import placeholderImg from '@/app/public/placeholder-pfp.svg';
import {Modal, ModalContent, ModalHeader, ModalBody, Button, ModalFooter, useDisclosure, Input} from "@nextui-org/react";

interface UserInfo {
  name: string,
  picture: string,
  bio: string,
  private: boolean
}

export default function Profile() {
  const [user, setUser] = useState<UserInfo>({ name: "", picture: "", bio: "", private: true });
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [isPrivate, setIsPrivate] = useState(false);

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
        <ModalContent className="bg-silk rounded-3xl border-solid border-black border-2 text-black">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-black text-lg font-bold"> Edit Profile </ModalHeader>
              <ModalBody className="text-black flex relative">
              </ModalBody>

              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" onPress={onClose}>
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}