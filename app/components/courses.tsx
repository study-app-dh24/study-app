import { useState } from "react";
import folderImg from '@/app/public/folder.svg';
import Image from "next/image";

export default function Courses() {
  const [showJavaModal, setShowJavaModal] = useState(false);
  const [showCalcModal, setShowCalcModal] = useState(false);
  const [showPhysicsModal, setShowPhysicsModal] = useState(false);

  const toggleJavaModal = () => setShowJavaModal(!showJavaModal);
  const toggleCalcModal = () => setShowCalcModal(!showCalcModal);
  const togglePhysicsModal = () => setShowPhysicsModal(!showPhysicsModal);

  return (
    // Welcome Section
    <div>
      <div className="flex flex-row pt-16 pl-12 gap-20">
        <div className="flex flex-col items-center relative">
          <div onClick={toggleCalcModal} className="relative group hover:cursor-pointer">
            <div className="overflow-hidden rounded-lg transition-transform duration-200 group-hover:scale-110 hover:cursor-pointer">
              <Image
                className="h-64 w-64 hover:cursor-pointer"
                src={folderImg}
                alt=""
              />
            </div>
            <h2 className="-mt-10 flex items-center justify-center text-3xl text-black font-bold">
              <a href="#" onClick={toggleCalcModal} className="relative transition-transform duration-200 group-hover:scale-110">
                Calc
              </a>
            </h2>
          </div>
        </div>

        <div className="flex flex-col items-center relative">
          <div onClick={toggleJavaModal} className="relative group hover:cursor-pointer">
            <div className="overflow-hidden rounded-lg transition-transform duration-200 group-hover:scale-110 hover:cursor-pointer">
              <Image
                className="h-64 w-64 hover:cursor-pointer"
                src={folderImg}
                alt=""
              />
            </div>
            <h2 className="-mt-10 flex items-center justify-center text-3xl text-black font-bold">
              <a href="#" onClick={toggleJavaModal} className="relative transition-transform duration-200 group-hover:scale-110">
                Java
              </a>
            </h2>
          </div>
        </div>

        <div className="flex flex-col items-center relative">
          <div onClick={togglePhysicsModal} className="relative group hover:cursor-pointer">
            <div className="overflow-hidden rounded-lg transition-transform duration-200 group-hover:scale-110 hover:cursor-pointer">
              <Image
                className="h-64 w-64 hover:cursor-pointer"
                src={folderImg}
                alt=""
              />
            </div>
            <h2 className="-mt-10 flex items-center justify-center text-3xl text-black font-bold">
              <a href="#" onClick={togglePhysicsModal} className="relative transition-transform duration-200 group-hover:scale-110">
                Physics
              </a>
            </h2>
          </div>
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


    {/* Physics Modal */}
    {showPhysicsModal && (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-25 flex justify-center items-center">
        <div className="bg-white p-12 w-96 h-64 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">Physics Courses</h2>
          <ul>
            <li>- Physics I</li>
            <li>- Physics II</li>
          </ul>
          <button
            onClick={togglePhysicsModal}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
      </div>
    )}
  </div>
  );
}