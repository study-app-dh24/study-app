'use client'

import React, { useEffect, useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, Button, ModalFooter, useDisclosure, Dropdown, DropdownItem, DropdownTrigger, DropdownMenu } from "@nextui-org/react";
// import { TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Avatar} from "@mui/material";
import { TextField } from "@mui/material";
import { signOut } from 'aws-amplify/auth';
import { fetchUserAttributes, updateUserAttributes } from 'aws-amplify/auth';
import placeholderImg from '@/app/public/placeholder-pfp.svg';
import Image from "next/image";

interface AuthUser {
  userId?: string;
  username?: string;
  attributes?: {
    name?: string;
    website?: string;
  };
}

interface ProfileProps {
  user?: AuthUser;
}

function Profile({ user }: ProfileProps) {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [attributes, setAttributes] = useState<Record<string, any> | null>(null);

  const [name, setName] = useState('');
  const [linkedin, setLinkedin] = useState('');
  // const [privacy, setPrivacy] = useState('');

  useEffect(() => {
    async function getUserAttributes() {
      try {
        const userAttributes = await fetchUserAttributes();
        setAttributes(userAttributes);
      } catch (error) {
        console.error('Error fetching user attributes:', error);
      }
    }
    getUserAttributes();
  }, []);

  useEffect(() => {
    if (attributes) {
      setName(attributes?.name || 'Default Name'); // Set a default value if name is undefined or null
      setLinkedin(attributes?.website || 'https://linkedin.com'); // Set a default value if LinkedIn is undefined or null
    }
  }, [attributes]);

  const nameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const pictureChange = () => {
    // TODO: Picture change
  };

  const linkedinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLinkedin(event.target.value);
  };

  // const privacyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setPrivacy(event.target.value);
  // };

  const handleSave = async () => {
    if (name.length !== 0 && linkedin.length !== 0) {
      try {
        const result = await updateUserAttributes({
          userAttributes: {
            name: name,
            website: linkedin,
          },
        });
        console.log('Attributes updated successfully:', result);
        const updatedAttributes = await fetchUserAttributes();
        setAttributes(updatedAttributes);
        onClose();
      } catch (error) {
        console.error('Error updating user attributes:', error);
      }
    }
  };

  async function handleSignOut() {
    await signOut();
  };

  if (!attributes) {
    return <p> ...</p>;
  }

  return (
    <>
    <div className="flex flex-row items-center gap-2">
      <div> {attributes.name} </div>
        <Dropdown className="bg-carbon rounded-xl">
        <DropdownTrigger>
          <Image
            className="w-8 h-8 text-lg hover:cursor-pointer hover:scale-110"
            alt=''
            src={placeholderImg}
          />
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem onClick={onOpen}> Edit Profile </DropdownItem>
          <DropdownItem className="text-danger" color="danger" onClick={handleSignOut}> Sign Out </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="bg-silk rounded-3xl border-solid border-black border-2 text-black">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-black text-lg font-bold"> Edit Profile </ModalHeader>

              <ModalBody className="text-black flex relative items-center">
                <div className="flex-shrink-0 mb-4 relative">
                <Image
                  className="w-24 h-24 text-lg hover:cursor-pointer hover:cursor-pointer"
                  alt=''
                  src={placeholderImg}
                />
                </div>
                <div className="flex flex-col gap-4 w-full">
                  <TextField label="Name" value={name} variant="outlined" onChange={nameChange}/>
                  <TextField label="LinkedIn" value={linkedin} variant="outlined" onChange={linkedinChange} />
                  {/* <FormControl>
                    <FormLabel> Privacy </FormLabel>
                    <RadioGroup
                      value={privacy}
                      onChange={privacyChange}
                    >
                      <FormControlLabel value="Private" control={<Radio />} label="Private" />
                      <FormControlLabel value="Public" control={<Radio />} label="Public" />
                    </RadioGroup>
                  </FormControl> */}
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

export default Profile;