import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Column from "./Column";
import Link from "next/link";

interface ICardProps {
  label: string;
  href: string;
}

const Card: React.FC<ICardProps> = ({ label, href }) => (
  <Column>
    <div className="px-4 py-4">
      <Link href={href} passHref>
        <p className="font-serif hover:decoration-cyan-300 hover:underline">
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
