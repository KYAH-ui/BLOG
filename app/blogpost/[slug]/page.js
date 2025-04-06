import fs from "fs"
import matter from "gray-matter"
import { notFound } from "next/navigation"
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypePrettyCode from "rehype-pretty-code";
import {unified} from 'unified'
import { transformerCopyButton } from '@rehype-pretty/transformers'

export default async function Page ({params}){


const filepath = `content/${params.slug}.md`
if(!fs.existsSync(filepath)){
  notFound()
  return
}
const fileContent = fs.readFileSync(filepath , "utf-8")
const {content , data} = matter(fileContent)

const processor =  unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeDocument, {title: '👋🌍'})
  .use(rehypeFormat)
  .use(rehypeStringify)
  .use(rehypePrettyCode, {
   theme: "github-dark-default",
   transformers: [
    transformerCopyButton({
      visibility: 'always',
      feedbackDuration: 3_000,
    }),
  ],
  })


const htmlContent = (await processor.process(content)).toString()

  // const blog = {
  //   title: "Learn JavaScript with me",
  //   author: "Khushi Agarwal",
  //   description: "This is a sample of a blog description",
  //   date: "2024-09-02",
  //   content: "<p>This is the content of the blog post. It can include <strong>HTML</strong> tags and other elements.</p>"
  // };

  return (
    <div className="max-w-5xl mx-auto p-4">
  <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
<p className="text-base mb-2 border-1-4 border-gray-500 pl-4 italic">&quot;{data.description}&quot;</p>
<div className="flex gap-2">
<p className="text-sm text-gray-400 mb-3">{data.author}</p>
<p className="text-sm text-gray-400 mb-3">{data.date}</p>
</div>
<div dangerouslySetInnerHTML={{__html: htmlContent}} className="prose"></div>
    </div>
  )
}

