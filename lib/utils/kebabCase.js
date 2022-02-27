import { slug } from "github-slugger";

// https://github.com/Flet/github-slugger  就像 GitHub 为 markdown 标题生成一个唯一的 slug。
// kebabCase短横线隔开式
const kebabCase = (str) => slug(str);

export default kebabCase;
