import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Link from "next/link";
import Column from "./Column";

interface ICardProps {
  label: string;
  href: string;
}

const Card: React.FC<ICardProps> = ({ label, href }) => (
  <Column>
    <div className="px-4 py-4 hover:shadow-md hover:shadow-lime-300 bg-inherit">
      <Link href={href}>
        <p className="decoration-secondary hover:underline font-serif">
          {label}
          <FontAwesomeIcon
            icon={faChevronCircleRight}
            width={15}
            className="inline mx-2"
          />
        </p>
      </Link>
    </div>
  </Column>
);

export default Card;
