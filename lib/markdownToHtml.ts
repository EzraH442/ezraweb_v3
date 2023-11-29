import { remark } from "remark";
import html from "remark-html";
import { VFileCompatible } from "vfile";
import prism from "remark-prism";

export default async function markdownToHtml(markdown: VFileCompatible) {
  const result = await remark()
    .use(html, { sanitize: false })
    .use(prism, { transformInlineCode: true })
    .process(markdown);
  return result.toString();
}
