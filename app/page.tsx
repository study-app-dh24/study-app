'use client'

import { useEffect, } from "react";
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import outputs from "../amplify_outputs.json";
import Profile from "./components/profile";
import { FileUploader } from '@aws-amplify/ui-react-storage';
import '@aws-amplify/ui-react/styles.css';
import { View } from "@aws-amplify/ui-react";

const configureAmplify = () => {
  Amplify.configure(outputs);
};


export default function Home() {
  useEffect(() => {
    configureAmplify();
  }, []);

  return (
    <View>
          <Authenticator>
      {({ signOut, user }) => (
        <main>
            {/* TODO: Change colors if needed */}
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
          <h1>Hello {user?.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>

      <FileUploader
        acceptedFileTypes={['image/*']}
        path="public/"
        maxFileCount={1}
        isResumable
      />

    </View>
  
  );
}