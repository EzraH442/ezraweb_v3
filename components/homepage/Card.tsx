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
    <div className="px-4 py-4">
      <Link href={href} passHref legacyBehavior>
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
