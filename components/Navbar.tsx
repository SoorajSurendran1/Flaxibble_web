import Link from "next/link";
import Image from "next/image";
import { NavLinks } from "@/constants/index";
import AuthProvide from "./AuthProvide";

const Navbar = () => {
  const session = {};
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src="/logo.svg" alt="Flexibble" width={115} height={43} />
        </Link>
        <ul className="xl:flex hidden gap-7 text-small">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flexCenter gap-4">
        {session ? (
          <>
            user Photo
            <Link href="create-project">Share work</Link>
          </>
        ) : (
          <AuthProvide />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
