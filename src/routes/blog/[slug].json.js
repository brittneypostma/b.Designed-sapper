import fs from 'fs'
import path from 'path'
import marked from 'marked'
import grayMatter from 'gray-matter'

export function get(req, res, next) {
  // the `slug` parameter is available because
  // this file is called [slug].json.js
  const { slug } = req.params

  res.writeHead(200, {
    'Content-Type': 'application/json'
  })

  // Reading correct file
  const post = fs.readFileSync(path.resolve('src/posts', `${slug}.md`), 'utf-8')

  // Parse front matter
  const { data, content } = grayMatter(post)

  // Render html from string
	const renderer = new marked.Renderer()
	
	const html = marked(content, { renderer })
	

  res.end(
    JSON.stringify({
      html,
      ...data
    })
  )
}
