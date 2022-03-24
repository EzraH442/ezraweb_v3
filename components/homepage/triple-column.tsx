import Image from "next/image";

import * as styles from "./triple-column.module.css";

function buildTextCol(title: string, text: string) {
    return (
        <div className={`${styles.column} ${styles.text}`}>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    );
}
interface StaticRequire {
    default: StaticImageData;
}
declare type StaticImport = StaticRequire | StaticImageData;
function buildImageCol(src: string | StaticImport, alt: string) {
    return (
        <div className={styles.column}>
            <Image src={src} alt={alt}></Image>
        </div>
    );
}


type ThreeColumnsProps = {
    pos: 1|2|3,
    title: string,
    text: string,
    images: {
        image1: {
            src: StaticImageData,
            alt: string,
        }
        image2: {
            src: StaticImageData,
            alt: string
        }
    }
}

export default function ThreeColumns({
    pos, title, text, images,
}: ThreeColumnsProps) {
    if (pos === 1) {
        return (
            <div className={styles.columns}>
                {buildTextCol(title, text)}
                {buildImageCol(images.image1.src, images.image1.alt)}
                {buildImageCol(images.image2.src, images.image2.alt)}
            </div>
        );
    } if (pos === 2) {
        return (
            <div className={styles.columns}>
                {buildImageCol(images.image1.src, images.image1.alt)}
                {buildTextCol(title, text)}
                {buildImageCol(images.image2.src, images.image2.alt)}
            </div>
        );
    } if (pos === 3) {
        return (
            <div className={styles.columns}>
                {buildImageCol(images.image1.src, images.image1.alt)}
                {buildImageCol(images.image2.src, images.image2.alt)}
                {buildTextCol(title, text)}
            </div>
        );
    }
    return (
        <div className={styles.columns}>
            <div className={`${styles.column} ${styles.text}`}>
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
            <div className={styles.column}>
                <Image src={images.image1.src} alt={images.image1.alt}></Image>
            </div>
            <div className={styles.column}>
                <Image src={images.image2.src} alt={images.image2.alt}></Image>
            </div>
        </div>
    );
}
