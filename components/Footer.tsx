import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

type ColumnProps = {
  title: String;
  links: Array<string>;
};
const FooterColumn = ({ title, links }: ColumnProps) => (
  <div className="foote_column">
    <h4 className="font-semibold">{title}</h4>
    <ul className="flex flex-col gap-2 font-normal">
      {links.map((link, index) => (
        <Link href="/" key={`${index}${link}`}>
          {link}
        </Link>
      ))}
    </ul>
  </div>
);
const Footer = () => {
  return (
    <footer className="flexStart footer">
      <div className="flex flex-col gap-12 w-full">
        <div
          className="flex item-start
        flex-col"
        >
          <Image
            src="/logo-purple.svg"
            alt="Flexibble"
            width={115}
            height={38}
          />
          <p className="text-start text-sm font-normal mt-5 max-w-xs">
            Flexibble is the world's leading community for creatives to
            share,grow , and get hired
          </p>
        </div>
        <div className="flex flex-wrap gap-12 ">
          {footerLinks.map((link, index) => (
            <FooterColumn
              key={`${link.title}${index}`}
              title={link.title}
              links={link.links}
            />
          ))}
        </div>
      </div>

      <div className="flexBetween footer_copyright">
        <p>@ 2023 Flexibble . All rights reserved</p>
        <p className="text-gray">
          <span className="text-black font-semibold">10,243</span> Projects
          Submitted
        </p>
      </div>
    </footer>
  );
};

export default Footer;
