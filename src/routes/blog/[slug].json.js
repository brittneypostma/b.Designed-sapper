import path from "path";
import fs from "fs";
import grayMatter from "gray-matter";
import marked from "marked";
const formatDate = require("date-fns/format");

const getPost = (fileName) =>
  fs.readFileSync(path.resolve("src/routes/blog/posts", `${fileName}.md`), "utf-8");

export function get(req, res, next) {
  const { slug } = req.params;

  // get the markdown text
  const post = getPost(slug);

  // function that expose helpful callbacks
  // to manipulate the data before convert it into html
  const renderer = new marked.Renderer();

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
  // parse the md to get front matter
  // and the content without escaping characters
  const { data, content } = grayMatter(post);

  const html = marked(content, { renderer });

  if (html) {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });

    res.end(JSON.stringify({ html, ...data }));
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json",
    });

    res.end(
      JSON.stringify({
        message: `Not found`,
      })
    );
  }
}
// import posts from "./_posts.js";

// const lookup = new Map();
// posts.forEach((post) => {
//   lookup.set(post.slug, JSON.stringify(post));
// });

// export function get(req, res, next) {
//   // the `slug` parameter is available because
//   // this file is called [slug].json.js
//   const { slug } = req.params;

//   if (lookup.has(slug)) {
//     res.writeHead(200, {
//       "Content-Type": "application/json",
//     });

//     res.end(lookup.get(slug));
//   } else {
//     res.writeHead(404, {
//       "Content-Type": "application/json",
//     });

//     res.end(
//       JSON.stringify({
//         message: `Not found`,
//       })
//     );
//   }
// }
