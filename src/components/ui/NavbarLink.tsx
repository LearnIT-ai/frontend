import { Link } from "react-router-dom";

interface NavbarLinkProps {
  params: {
    content: string;
    link: string;
    onClick: () => void;
  };
}

export default function NavbarLink({ params }: NavbarLinkProps) {
  return (
    <li className="hover:text-[var(--primary-clr)] transition-none text-lg">
      <Link to={params.link} onClick={params.onClick}>
        {params.content}
      </Link>
    </li>
  );
}
