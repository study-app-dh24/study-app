'use client'

import { useEffect, useState } from "react";
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import outputs from "../amplify_outputs.json";
import Profile from "./components/profile";
import PeerConnect from "./components/peerConnect";
import Image from "next/image";
import menturaLogo from "@/app/public/mentura_logo_tp.png";
import Courses from "./components/courses";
import { fetchUserAttributes, FetchUserAttributesOutput } from 'aws-amplify/auth';
import { Typewriter } from 'react-simple-typewriter';
import { View } from "@aws-amplify/ui-react";
import { FileUploader } from '@aws-amplify/ui-react-storage';
import '@aws-amplify/ui-react/styles.css';


const configureAmplify = () => {
  Amplify.configure(outputs);
};

const handleUploadSuccess = () => {
  console.log('File uploaded:');
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
    <View>
          <Authenticator formFields={formFields}>
      {() => (
        <main className="min-h-screen">
        {/* TODO: Change colors if needed */}
        <div className="bg-light_purple flex h-16 w-full items-center sticky top-0 z-10 shadow-2xl border-black px-2 transition-all duration-300 border-2 border-black">
          <div className="mr-auto flex flex-row justify-center items-center">
            <a href="#">
              <Image
                className="h-16 w-16 flex rounded-full transition-transform duration-200 hover:cursor-pointer hover:scale-110"
                alt=""
                src={menturaLogo}
              />
            </a>
          </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-row gap-6">
        </div>

        <div className="ml-auto pr-2">
          <Profile />
        </div>
      </div>

      <div className="flex flex-row justify-between gap-12 w-full">
        <div className="flex flex-col w-3/4 bg-silk overflow-hidden rounded-xl py-1 border-2 border-black ml-12 mt-12">
          <div className='text-left mt-12'>
            <h1 className='text-3xl font-bold mx-20'>
              <Typewriter
                words={[`Welcome, ${attributes?.name}!`]}
                loop={1}
                cursorStyle='|'
                delaySpeed={99999999999}
                cursorBlinking={false}
              /></h1>
            </div>
          <Courses />
        </div>

        <div className="flex flex-col w-1/4 bg-silk rounded-xl py-1 border-2 border-black mr-12 mt-12 h-[calc(100vh-10rem)] overflow-y-auto">
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