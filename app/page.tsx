'use client'

import { useEffect, useState, } from "react";
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

  const [showJavaModal, setShowJavaModal] = useState(false);
  const [showCalcModal, setShowCalcModal] = useState(false);

  const toggleJavaModal = () => setShowJavaModal(!showJavaModal);
  const toggleCalcModal = () => setShowCalcModal(!showCalcModal);

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
        </main>
      )}
    </Authenticator>

      <FileUploader
        acceptedFileTypes={['image/*']}
        path="public/"
        maxFileCount={1}
        isResumable
      />

    
      {/*Welcome Section*/}
      <div className='text-left mt-8'>
        <h1 className='text-5xl font-bold mx-8'>Welcome, [user]!</h1>
      </div>

      {/* Folder Section */}
      {/* Links to Java and Calculus */}
      <div className='text-left mt-8'>
        {/* Add SVG Image for Java */}
        <div className="flex flex-col items-start mx-8">
          <img className="h-auto max-w-lg mb-2" src="/app/public/folder.svg" alt="Java Image Description" />
          <h2 className='text-3xl'>
            <a href="#" onClick={toggleJavaModal} className="hover:text-light_purple">Java</a>
          </h2>
        </div>

        {/* Add SVG Image for Calculus */}
        <div className="flex flex-col items-start mx-8 mt-4">
          <img className="h-auto max-w-lg mb-2" src="/app/public/folder.svg" alt="Calculus Image Description" />
          <h2 className='text-3xl'>
            <a href="#" onClick={toggleCalcModal} className="hover:text-light_purple">Calculus</a>
          </h2>
        </div>
      </div>


      {/* Java Modal */}
      {showJavaModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-25 flex justify-center items-center">
          <div className="bg-white p-12 w-96 h-64 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold">Java Courses</h2>
            <ul>
              <li>- Java I</li>
              <li>- Java II</li>
            </ul>
            <button
              onClick={toggleJavaModal}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Calculus Modal */}
      {showCalcModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-25 flex justify-center items-center">
          <div className="bg-white p-12 w-96 h-64 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold">Calculus Courses</h2>
            <ul>
              <li>- Calc I</li>
              <li>- Calc II</li>
            </ul>
            <button
              onClick={toggleCalcModal}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
      
    </View>
  
  );
}