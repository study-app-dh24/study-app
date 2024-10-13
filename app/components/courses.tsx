import React, {useEffect, useState} from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody } from '@nextui-org/react';
import Link from 'next/link';
import {Typewriter} from 'react-simple-typewriter';
import FolderAnimation from './folderAnimation';
import { fetchUserAttributes, FetchUserAttributesOutput } from 'aws-amplify/auth';

const Courses = () => {
  const [attributes, setAttributes] = useState<FetchUserAttributesOutput>();

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
  }, [attributes?.name]);

  const [isCSEOpen, setIsCSEOpen] = React.useState(false);
  const [isPhysicsOpen, setIsPhysicsOpen] = React.useState(false);
  const [isCalcOpen, setIsCalcOpen] = React.useState(false);

  const onCSEOpen = () => setIsCSEOpen(true);
  const onCSEOpenChange = (open: boolean) => setIsCSEOpen(open);

  const onPhysicsOpen = () => setIsPhysicsOpen(true);
  const onPhysicsOpenChange = (open: boolean) => setIsPhysicsOpen(open);

  const onCalcOpen = () => setIsCalcOpen(true);
  const onCalcOpenChange = (open: boolean) => setIsCalcOpen(open);

  return (
    <div>
      <div className='text-left mt-12'>
        <h1 className='text-4xl font-bold mx-20'>
          <Typewriter
            words={[`Welcome, ${attributes?.name}!`]}
            loop={1}
            cursorStyle='|'
            delaySpeed={99999999999}
            cursorBlinking={false}
          />
        </h1>
      </div>

      <div className="flex flex-row justify-center gap-12 p-20">
        <div className="flex flex-col items-center transition-transform duration-200 hover:scale-110">
            <div onClick={onCalcOpen} className="folder-container hover:cursor-pointer">
              <FolderAnimation isModalOpen={isCalcOpen} />
              <h2 className="-mt-12 text-3xl text-black font-bold text-center">
                <a href="#" onClick={(e) => { e.preventDefault(); onCalcOpen(); }} className="transition-transform duration-200 hover:scale-110 inline-block text-dark_purple">
                  Calculus
                </a>
              </h2>
            </div>
          </div>

        <div className="flex flex-col items-center transition-transform duration-200 hover:scale-110">
          <div onClick={onCSEOpen} className="folder-container hover:cursor-pointer">
            <FolderAnimation isModalOpen={isCSEOpen}/>
            <h2 className="-mt-12 text-3xl text-black font-bold text-center">
              <a href="#" onClick={(e) => { e.preventDefault(); onCSEOpen(); }} className="transition-transform duration-200 hover:scale-110 inline-block text-dark_purple">
                Computer Science
              </a>
            </h2>
          </div>
        </div>

        <div className="flex flex-col items-center transition-transform duration-200 hover:scale-110">
          <div onClick={onPhysicsOpen} className="folder-container hover:cursor-pointer">
            <FolderAnimation isModalOpen={isPhysicsOpen} />
            <h2 className="-mt-12 text-3xl text-black font-bold text-center">
              <a href="#" onClick={(e) => { e.preventDefault(); onPhysicsOpen(); }} className="transition-transform duration-200 hover:scale-110 inline-block text-dark_purple">
                Physics
              </a>
            </h2>
          </div>
        </div>
      </div>

      <Modal isOpen={isCSEOpen} onOpenChange={onCSEOpenChange}>
        <ModalContent className="bg-silk rounded-3xl border-solid border-black border-2 text-black p-3">
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1.5 text-black text-xl font-bold text-dark_purple"> Computer Science Courses </ModalHeader>
              <ModalBody>
                <ul className="list-disc pl-4 text-lg  text-dark_purple">
                  <li>
                    <Link href="/courses/cse121" className="hover:font-bold">CSE 121</Link>
                  </li>
                  <li>
                    <Link href="/courses/cse122" className="hover:font-bold">CSE 122</Link>
                  </li>
                  <li>
                    <Link href="/courses/cse123" className="hover:font-bold">CSE 123</Link>
                  </li>
                </ul>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>

      <Modal isOpen={isPhysicsOpen} onOpenChange={onPhysicsOpenChange}>
        <ModalContent className="bg-silk rounded-3xl border-solid border-black border-2 text-black p-3">
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1.5 text-black text-xl font-bold  text-dark_purple"> Physics Courses </ModalHeader>
              <ModalBody>
                <ul className="list-disc pl-4 text-lg  text-dark_purple">
                  <li>
                    <Link href="/courses/physics1" className="hover:font-bold">Physics I</Link>
                  </li>
                  <li>
                    <Link href="/courses/physics2" className="hover:font-bold">Physics II</Link>
                  </li>
                  <li>
                    <Link href="/courses/physics3" className="hover:font-bold">Physics III</Link>
                  </li>
                </ul>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>

      <Modal isOpen={isCalcOpen} onOpenChange={onCalcOpenChange}>
        <ModalContent className="bg-silk rounded-3xl border-solid border-black border-2 text-black p-3">
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1.5 text-black text-xl font-bold  text-dark_purple"> Calculus Courses </ModalHeader>
              <ModalBody>
                <ul className="list-disc pl-4 text-lg text-dark_purple">
                  <li>
                    <Link href="/courses/calc1" className="hover:font-bold">Calculus I</Link>
                  </li>
                  <li>
                    <Link href="/courses/calc2" className="hover:font-bold">Calculus II</Link>
                  </li>
                  <li>
                    <Link href="/courses/calc3" className="hover:font-bold">Calculus III</Link>
                  </li>
                </ul>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Courses;