import { Link } from "react-router-dom";

interface DocumentLinkTypes {
  params: {
    content: string;
  };
}

export default function DocumentLink({ params }: DocumentLinkTypes) {
  return (
    <Link to={`${location.pathname}/basics-of-ai`}>
      <li
        className="document-link flex flex-row gap-4 items-center 
      p-4 pl-0 border-b-[1px] hover:border-b-[var(--primary-clr)]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="w-6 h-6 bi bi-arrow-down-right-circle-fill"
          viewBox="0 0 16 16"
        >
          <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m5.904-2.803a.5.5 0 1 0-.707.707L9.293 10H6.525a.5.5 0 0 0 0 1H10.5a.5.5 0 0 0 .5-.5V6.525a.5.5 0 0 0-1 0v2.768z" />
        </svg>
        <p>{params.content}</p>
      </li>
    </Link>
  );
}
