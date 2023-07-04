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
    <Link href={href} passHref legacyBehavior>
      <div className="px-4 py-4 hover:underline decoration-cyan-300">
        <h3 className="text-2xl">{title}</h3>
        <p className="mx-4 my-2">
          <FontAwesomeIcon icon={faPencil} width={15} className="inline mx-2" />
          {date}
        </p>
        <p className="basis-72 mx-3">
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
