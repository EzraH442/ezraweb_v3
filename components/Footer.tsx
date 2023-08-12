import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer: React.FC<{}> = () => (
  <footer className="text-white h-24 flex flex-col justify-center items-center">
    <span className="inline-flex justify-center space-x-2">
      <a href="mailto:ezrahuang155@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} size="1x" width={10} />
      </a>
      <a href="https://www.linkedin.com/in/ezrahuang">
        <FontAwesomeIcon icon={faLinkedin} size="1x" width={10} />
      </a>
      <a href="https://github.com/EzraH442">
        <FontAwesomeIcon icon={faGithub} size="1x" width={10} />
      </a>
    </span>
  </footer>
);
export default Footer;
