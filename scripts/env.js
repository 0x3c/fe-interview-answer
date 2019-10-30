const path = require("path");

const url = `https://github.com/haizlin/fe-interview/blob/master/category/history.md`;
const rootDir = path.resolve(__dirname, "../");
const dailyDirName = "docs";
const dailyDir = path.resolve(rootDir, dailyDirName);
const summaryReadmeDir = path.resolve(rootDir, "README.md");
const templatePath = path.resolve(rootDir, "template.md");

module.exports = {
  url,
  rootDir,
  dailyDirName,
  dailyDir,
  summaryReadmeDir,
  templatePath
};
