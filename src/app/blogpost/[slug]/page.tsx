import fs from 'fs';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import {unified} from 'unified'
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'

interface Params {
  slug: string;
}


export default async function Page({
  params
}:any){

  console.log(params)
  const filePath = `content/${params.slug}.md`
 if(!fs.existsSync(filePath)){
  notFound()
  return 
 }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const {content, data} = matter(fileContent);

  const processor = unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeDocument, {title: '👋🌍'})
  .use(rehypeFormat)
  .use(rehypeStringify)

  const htmlContent = (await processor.process(content)).toString()

  return (
    <div  className=" m-auto border-x-2 px-8 py-4 mt-2 max-w-4xl rounded-sm shadow-lg">
      <h1 className="text-3xl font-semibold ">{data.title}</h1>
      <p className=" text-lg mt-2">{data.description}</p>
      <p className=" text-sm mt-2">{data.date.toLocaleString()}</p>
      <div
        className="prose-lg"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      ></div>
    </div>
  );
}
