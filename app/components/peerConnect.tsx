import Image from "next/image";
import addUserImg from '@/app/public/add-user.svg';

export default function peerConnect() {
  return (
    <div className="w-full flex flex-col gap-4">
      <p> John Doe </p>
      <a href="https://www.linkedin.com/in/william-ong1" target="_blank" rel="noreferrer noopener">
        <Image
          className="hover:scale-125"
          priority
          src={addUserImg}
          height={32}
          width={32}
          alt="linkedin"
        />
      </a>
    </div>
  )
};