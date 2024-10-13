import {User, Link} from "@nextui-org/react";

let names = ["Jane Doe", "Jack Smith", "Jill Johnson", "Jim Brown", "Joan White", "Jake Davis", "Julie Miller", "Joe Wilson", "Jessica Taylor"];

export default function PeerConnect() {
  return (
    <div className="flex flex-row gap-12">
      <div className="flex flex-col gap-4 p-6 pb-8 gap-16">
        {names.map((name, index) => (
          <User
            key={index}
            name={name}
            description={
              <Link href="https://twitter.com/jrgarciadev" size="sm" isExternal>
                @jrgarciadev
              </Link>
            }
            avatarProps={{
              src: "https://avatars.githubusercontent.com/u/30373425?v=4"
            }}
          />
        ))}
      </div>
    </div>
  );
}