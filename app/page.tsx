'use client'

import { useEffect, } from "react";
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import outputs from "../amplify_outputs.json";
import Profile from "./components/profile";
import '@aws-amplify/ui-react/styles.css';

const configureAmplify = () => {
  Amplify.configure(outputs);
};

export default function Home() {
  useEffect(() => {
    configureAmplify();
  }, []);

  return (
    <Authenticator>
      {() => (
        <main>
            {/* TODO: Change colors if needed */}
          <div className="bg-dark_purple flex h-12 w-full items-center">
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

      <div className="flex flex-col w-7/12 bg-silk overflow-hidden gap-64">
        {/* TODO: courses */}
      </div>

      <div className="flex flex-col w-5/12 bg-light_purple overflow-y-auto gap-64 ">
        {/* TODO: peer connect */}
      </div>
    </main>
    )}
    </Authenticator>
  );
}