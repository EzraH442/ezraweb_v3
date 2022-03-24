import { body } from "./body.module.css";

type BodyProps = {
    backgroundColor: string,
    children: any,
}

export default function Body({ backgroundColor = "#FFFFFF", children }: BodyProps) {
    return (
        <div style={{ backgroundColor }} className={body}>
            { children }
        </div>
    );
}