import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import Column from "./Column";

interface IBlogCardProps {
  title: string;
  date: string;
  headline: string;
  href: string;
}

const BlogCard: React.FC<IBlogCardProps> = ({
  title,
  date,
  headline,
  href,
}) => (
  <Column>
    <Link href={href}>
      <div className="px-4 py-4 hover:underline decoration-secondary">
        <div className="flex items-center mb-2">
          <h3 className="text-2xl text-accent font-thin">{title}</h3>
          <div className="flex items-center text-secondary ml-auto pl-4 shrink-0">
            <FontAwesomeIcon
              icon={faPencil}
              width={15}
              className="inline mx-2 shrink-0"
            />
            <p>{date}</p>
          </div>
        </div>
        <p className="basis-72">
          {headline}
          <FontAwesomeIcon
            icon={faChevronCircleRight}
            width={10}
            className="inline mx-2"
          />
        </p>
      </div>
    </Link>
  </Column>
);

export default BlogCard;
