'use client'

import { useEffect, useState } from "react";
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import outputs from "../amplify_outputs.json";
import PeerConnect from "./components/peerConnect";
import Courses from "./components/courses";
import { fetchUserAttributes, FetchUserAttributesOutput } from 'aws-amplify/auth';
// import { FileUploader } from '@aws-amplify/ui-react-storage';
import '@aws-amplify/ui-react/styles.css';
import Header from "./components/header";
import './custom-styles.css';
import Image from "next/image";
import backgroundImg from '@/app/public/background-purple.jpg';

const configureAmplify = () => {
  Amplify.configure(outputs);
};

// const handleUploadSuccess = () => {
//   console.log('File uploaded:');
// };

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
    }
  },
};

export default function Home() {
  const [attributes, setAttributes] = useState<FetchUserAttributesOutput>();

  useEffect(() => {
    configureAmplify();
    async function getUserAttributes() {
      try {
        const userAttributes = await fetchUserAttributes();
        setAttributes(userAttributes);
      } catch (error) {
        console.error('Error fetching user attributes:', error);
      }
    }
    getUserAttributes();
  }, [attributes?.name]);

  return (
    <div className="auth-class">
    <Authenticator formFields={formFields}>
      {() => (
        <main className="min-h-screen">
        {/* TODO: Change colors if needed */}

        <Header />
      <div className="flex flex-row justify-between gap-12 w-full">
        <div className="relative flex flex-col w-3/4 bg-silk overflow-hidden rounded-xl py-1 border-2 border-black ml-12 mt-12">
          <Image
            src={backgroundImg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-15 z-0"
          />
          <div className="relative z-10">
            <Courses />
          </div>
        </div>

        <div className="flex flex-col w-1/4 bg-silk rounded-xl py-1 border-2 border-black mr-12 mt-12 h-[calc(100vh-10rem)] overflow-y-auto peer-connect">
          <PeerConnect />
        </div>
      </div>
      {/* <FileUploader
      acceptedFileTypes={['image/*']}
      path="public/"
      maxFileCount={1}
      isResumable
      onUploadSuccess={handleUploadSuccess}
    /> */}

      {/* <VideoSearch /> */}
      {/* <NotesGenerator /> */}
    </main>
    )}


    </Authenticator>

    </div>
  );
}