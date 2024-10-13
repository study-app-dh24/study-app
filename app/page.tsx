'use client'

import { useEffect } from "react";
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import outputs from "../amplify_outputs.json";
import Profile from "./components/profile";
import PeerConnect from "./components/peerConnect";
import { View } from "@aws-amplify/ui-react";
import { FileUploader } from '@aws-amplify/ui-react-storage';
import '@aws-amplify/ui-react/styles.css';


const configureAmplify = () => {
  Amplify.configure(outputs);
};

const handleUploadSuccess = (result: any) => {
  console.log('File uploaded:', result);
};



const formFields = {
  signUp: {
    name: {
      label: 'Full Name',
      placeholder: 'Enter your full name',
      order: 1,
      isRequired: true,
    },
    website: {
      label: 'LinkedIn Profile',
      placeholder: 'Enter your LinkedIn profile URL',
      order: 2,
      isRequired: true,
    },
    email: {
      order: 3,
    },
    password: {
      order: 4,
    },
    confirm_password: {
      order: 5,
    },
  },
};

export default function Home() {
  useEffect(() => {
    configureAmplify();
  }, []);

  return (
    <View>
          <Authenticator formFields={formFields}>
      {() => (
        <main className="min-h-screen">
        {/* TODO: Change colors if needed */}
        <div className="bg-dark_purple flex h-12 w-full items-center sticky top-0 z-10">
          <div className="mr-auto pl-8">
            [logo] [app_name]
            </div>

        <div className="mr-auto ml-auto px-4 flex flex-row gap-6">
          <a href="#" className="hover:text-light_purple"> Home </a>
          <div> | </div>
          <a href="your_courses" className="hover:text-light_purple"> Your Courses </a>
        </div>

        <div className="ml-auto pr-8">
          <Profile />
        </div>
      </div>

      <div className="flex flex-row w-full">
        <div className="flex flex-col w-3/4 bg-silk overflow-hidden gap-64">
        </div>

        <div className="flex flex-col w-1/4 bg-light_purple overflow-y-auto gap-64 ">
          <PeerConnect />
        </div>
      </div>
      <FileUploader
      acceptedFileTypes={['image/*']}
      path="public/"
      maxFileCount={1}
      isResumable
      onUploadSuccess={handleUploadSuccess}
    />

      {/* <VideoSearch /> */}
      {/* <NotesGenerator /> */}
    </main>
    )}


    </Authenticator>

    </View>

  );
}