import Link from "next/link";
import Image from "next/image";
import { column } from "./triple-column.module.css";
import {
    modifiedColumnHeight, postLink, date as postDate, text,
} from "./personalinfo.module.css";

type PostPreviewProps = {
    title: string,
    date: string,
    headline: string,
    link: string,
    image: string,
}

export default function PostPreview({
    title, date, headline, link, image,
}: PostPreviewProps) {
    return (
        <div className={`${column} ${modifiedColumnHeight}`}>
            <h3>{title}</h3>
            <p className={postDate}>{date}</p>
            <p className={text}>{headline}</p>
            {image ? <Image src={image} alt="" /> : ""}
            <div className={postLink}>
            <Link href={link}>Full Post</Link>
            </div>
        </div>
    );
}