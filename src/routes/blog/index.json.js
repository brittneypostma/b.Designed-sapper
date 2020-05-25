import { getAllMDIn } from "./_posts";

export function get(_, res) {
  getAllMDIn(res, "src/routes/blog/posts");
}