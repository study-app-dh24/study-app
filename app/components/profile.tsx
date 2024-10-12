'use client'

import Image from "next/image";
import React, { useEffect, useState } from "react";
import placeholderImg from '@/app/public/placeholder-pfp.svg';
import editImg from '@/app/public/edit-pfp.svg';
import { Modal, ModalContent, ModalHeader, ModalBody, Button, ModalFooter, useDisclosure } from "@nextui-org/react";
import { TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Avatar} from "@mui/material";

interface UserInfo {
  name: string;
  picture: string;
  bio: string;
  linkedin: string;
  privacy: string;
}

export default function Profile() {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [user, setUser] = useState<UserInfo>({ name: "", picture: "", bio: "", linkedin: "", privacy: "" });

  const [name, setName] = useState(user.name);
  const [bio, setBio] = useState(user.bio);
  const [linkedin, setLinkedin] = useState(user.linkedin);
  const [privacy, setPrivacy] = useState(user.privacy);

  const getUserData = async () => {
    // TODO: retrieve user data
    const fetchedUserData: UserInfo = {
      name: "Temp Name",
      picture: "Temp Pic",
      bio: "Temp Bio",
      linkedin: "Temp LinkedIn",
      privacy: "Private",
    };
    setUser(fetchedUserData);
  };

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    setName(user.name);
    setBio(user.bio);
    setLinkedin(user.linkedin);
    setPrivacy(user.privacy);
  }, [user]);

  const nameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const pictureChange = () => {
    // TODO: Picture change
  };

  const bioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBio(event.target.value);
  };

  const linkedinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLinkedin(event.target.value);
  };

  const privacyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrivacy(event.target.value);
  };

  const handleSave = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (name.length !== 0 && linkedin.length !== 0) {
      // TODO: update the profile
      onClose();
    }
  }

  return (
    <>
    <div className="flex flex-row items-center gap-2">
      <div> {user.name} </div>
        <Avatar
          className="w-8 h-8 text-lg hover:cursor-pointer hover:scale-110"
          onClick={onOpen}
          alt=''
        />
    </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="bg-silk rounded-3xl border-solid border-black border-2 text-black">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-black text-lg font-bold"> Edit Profile </ModalHeader>

              <ModalBody className="text-black flex relative items-center">
                <div className="flex-shrink-0 mb-4 relative">
                  <Avatar
                    className="w-32 h-32 mr-4 hover:cursor-pointer"
                    alt=""
                    onClick={pictureChange}
                  />
                </div>
                <div className="flex flex-col gap-4 w-full">
                  <TextField label="Name" value={name} variant="outlined" onChange={nameChange}/>
                  <TextField label="Bio" value={bio} variant="outlined" onChange={bioChange}/>
                  <TextField label="LinkedIn" value={linkedin} variant="outlined" onChange={linkedinChange} />
                  <FormControl>
                    <FormLabel> Privacy </FormLabel>
                    <RadioGroup
                      value={privacy}
                      onChange={privacyChange}
                    >
                      <FormControlLabel value="Private" control={<Radio />} label="Private" />
                      <FormControlLabel value="Public" control={<Radio />} label="Public" />
                    </RadioGroup>
                  </FormControl>
                </div>
              </ModalBody>

              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" onClick={handleSave}>
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