import React from "react";
import * as styles from "./banner.module.css";

import homeTopImage from "../../images/home-top.jpg";
import Image from "next/image";

export default function Banner() {
    return (
        <div className={styles.container}>
            <Image src={homeTopImage} className={styles.image} alt="Mountain Scenery"></Image>
            <p className={styles.text}>
                &quot;a quote&quot;
                <br />
                -from some guy
            </p>
        </div>
    );
}
