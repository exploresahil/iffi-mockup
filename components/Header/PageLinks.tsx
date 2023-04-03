import Link from "next/link";

export const PageLinks = ({ title, pageLink }) => {
  return (
    <li>
      <Link
        href={pageLink}
        className="text-iDark text-base font-medium rounded-full font-helveticaLight"
      >
        {title}
      </Link>
    </li>
  );
};

export default PageLinks;
