import React, { useState, useEffect } from 'react';
import './FolderAnimation.css';

interface FolderAnimationProps {
  isModalOpen: boolean;
}

const FolderAnimation: React.FC<FolderAnimationProps> = ({ isModalOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(isModalOpen);
  }, [isModalOpen]);

  return (
    <div
      className="folder-container"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => !isModalOpen && setIsOpen(false)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`icon icon-tabler ${isOpen ? 'open' : 'closed'}`}
        width="100"
        height="100"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#2c3e50"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path
          className="folder-closed"
          d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2"
        />
        <path
          className="folder-open"
          d="M5 19l2.757 -7.351a1 1 0 0 1 .936 -.649h12.307a1 1 0 0 1 .986 1.164l-.996 5.211a2 2 0 0 1 -1.964 1.625h-14.026a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v2"
        />
      </svg>
    </div>
  );
};

export default FolderAnimation;