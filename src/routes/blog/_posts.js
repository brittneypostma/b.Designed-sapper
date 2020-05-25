import fs from "fs";
import path from "path";
import grayMatter from "gray-matter";
import marked from "marked";

const getPost = (filesPath, fileName) =>
  fs.readFileSync(path.resolve(filesPath, fileName), "utf-8");

export function getAllMDIn(res, filesPath) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });
  const data = fs.readdirSync(filesPath).map((fileName) => {
    const post = getPost(filesPath, fileName);
    const { data, content } = grayMatter(post);
    const newSlug = fileName.substring(0, fileName.length - 3);
    data.slug = newSlug;
    const renderer = new marked.Renderer();
    const html = marked(content, { renderer });
    return { html, ...data };
  });
  res.end(JSON.stringify(data));
}

// const fs = require("fs");
// const path = require("path");
// const marked = require("marked");
// const matter = require("gray-matter");
// const formatDate = require("date-fns/format");

// const cwd = process.cwd();
// const POSTS_DIR = path.join(cwd, "src/routes/blog/posts/");
// // const EXCERPT_SEPARATOR = '<!-- more -->';
// const renderer = new marked.Renderer();
// const linkRenderer = renderer.link;

// renderer.link = (href, title, text) => {
//   const html = linkRenderer.call(renderer, href, title, text);

//   if (href.indexOf("/") === 0) {
//     // Do not open internal links on new tab
//     return html;
//   } else if (href.indexOf("#") === 0) {
//     // Handle hash links to internal elements
//     const html = linkRenderer.call(renderer, "javascript:;", title, text);
//     return html.replace(
//       /^<a /,
//       `<a onclick="document.location.hash='${href.substr(1)}';" `
//     );
//   }

//   return html.replace(/^<a /, '<a target="_blank" rel="nofollow" ');
// };

// marked.setOptions({
//   renderer,
// });

// const posts = fs
//   .readdirSync(POSTS_DIR)
//   .filter((fileName) => /\.md$/.test(fileName))
//   .map((fileName) => {
//     const fileMd = fs.readFileSync(path.join(POSTS_DIR, fileName), "utf8");
//     const { data, content: rawContent } = matter(fileMd);
//     const { title, date, image, alt } = data;
//     const slug = fileName.split(".")[0];
//     let content = rawContent;

//     const html = marked(content);
//     const printDate = formatDate(new Date(date), "MMMM d, yyyy");
//     return {
//       title: title || slug,
//       slug,
//       html,
//       date,
//       printDate,
//       image,
//       alt,
//     };
//   });

// posts.sort((a, b) => {
//   const dateA = new Date(a.date);
//   const dateB = new Date(b.date);

//   if (dateA > dateB) return -1;
//   if (dateA < dateB) return 1;
//   return 0;
// });

// posts.forEach((post) => {
//   post.html = post.html.replace(/^\t{3}/gm, "");
// });

// export default posts;
