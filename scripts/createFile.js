const path = require("path");
const fs = require("fs");
const prettier = require("prettier");
const { getDailyHub } = require("./parse");

const root = path.resolve(__dirname, "../", "docs");

const formatMD = source =>
  prettier.format(source, {
    parser: "markdown"
  });

const create = async no => {
  let targetDir = path.resolve(root, `day${no.toString().padStart(2, 0)}`);
  const isDirExist = fs.existsSync(targetDir);
  if (!isDirExist) {
    fs.mkdirSync(targetDir);
  }
  targetDir = path.resolve(targetDir, "README.md");
  const isFileExist = fs.existsSync(targetDir);
  if (isFileExist) {
    const msg = `File is Existed. create ${targetDir} error, file is existed.`;
    console.error(msg);
    process.exit(0);
  }
  const map = await getDailyHub();
  const list = map[no].children;
  const strs = list.reduce((text, item) => {
    const str = `### ${item.title}\n`;
    text += str;
    if (item.content) {
      text += `\`\`\`
        ${item.content}
        \`\`\`
        \n
        `;
    }
    return text;
  }, "");
  fs.writeFileSync(targetDir, formatMD(strs));
};

const dayNo = process.argv[2];
create(dayNo);
