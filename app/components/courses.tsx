import folderImg from '@/app/public/folder.svg';
import Image from "next/image";
import Link from 'next/link';
import { Modal, ModalContent, ModalHeader, ModalBody, useDisclosure } from "@nextui-org/react";

export default function Courses() {

  const { isOpen: isCalcOpen, onOpen: onCalcOpen, onOpenChange: onCalcOpenChange } = useDisclosure();
  const { isOpen: isCSEOpen, onOpen: onCSEOpen, onOpenChange: onCSEOpenChange } = useDisclosure();
  const { isOpen: isPhysicsOpen, onOpen: onPhysicsOpen, onOpenChange: onPhysicsOpenChange } = useDisclosure();

  return (
    // Welcome Section
    <div>
      <div className="flex flex-row pt-16 pl-12 gap-20">
        <div className="flex flex-col items-center relative">
          <div onClick={onCalcOpen} className="relative group hover:cursor-pointer">
            <div className="overflow-hidden rounded-lg transition-transform duration-200 group-hover:scale-110 hover:cursor-pointer">
              <Image
                className="h-64 w-64 hover:cursor-pointer"
                src={folderImg}
                alt=""
              />
            </div>
            <h2 className="-mt-10 flex items-center justify-center text-3xl text-black font-bold">
              <a href="#" onClick={onCalcOpen} className="relative transition-transform duration-200 group-hover:scale-110">
                Calculus
              </a>
            </h2>
          </div>
        </div>

        <div className="flex flex-col items-center relative">
          <div onClick={onCSEOpen} className="relative group hover:cursor-pointer">
            <div className="overflow-hidden rounded-lg transition-transform duration-200 group-hover:scale-110 hover:cursor-pointer">
              <Image
                className="h-64 w-64 hover:cursor-pointer"
                src={folderImg}
                alt=""
              />
            </div>
            <h2 className="-mt-10 flex items-center justify-center text-center text-3xl text-black font-bold">
              <a href="#" onClick={onCSEOpen} className="relative transition-transform duration-200 group-hover:scale-110">
                Computer Science
              </a>
            </h2>
          </div>
        </div>

        <div className="flex flex-col items-center relative">
          <div onClick={onPhysicsOpen} className="relative group hover:cursor-pointer">
            <div className="overflow-hidden rounded-lg transition-transform duration-200 group-hover:scale-110 hover:cursor-pointer">
              <Image
                className="h-64 w-64 hover:cursor-pointer"
                src={folderImg}
                alt=""
              />
            </div>
            <h2 className="-mt-10 flex items-center justify-center text-3xl text-black font-bold">
              <a href="#" onClick={onPhysicsOpen} className="relative transition-transform duration-200 group-hover:scale-110">
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
              <ModalHeader className="flex flex-col gap-1.5 text-black text-xl font-bold"> Computer Science Courses </ModalHeader>
              <ModalBody>
                <ul className="list-disc pl-4 text-lg">
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

      <Modal isOpen={isCalcOpen} onOpenChange={onCalcOpenChange}>
        <ModalContent className="bg-silk rounded-3xl border-solid border-black border-2 text-black p-3">
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1.5 text-black text-xl font-bold"> Calculus Courses </ModalHeader>
              <ModalBody>
                <ul className="list-disc pl-4 text-lg">
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

      <Modal isOpen={isPhysicsOpen} onOpenChange={onPhysicsOpenChange}>
        <ModalContent className="bg-silk rounded-3xl border-solid border-black border-2 text-black p-3">
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1.5 text-black text-xl font-bold"> Physics Courses </ModalHeader>
              <ModalBody>
                <ul className="list-disc pl-4 text-lg">
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

  </div>
  );
}