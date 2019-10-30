const fs = require("fs");
const prettier = require("prettier");
const { getDailyHub } = require("./parse");
const {
  dailyDirName,
  summaryReadmeDir,
  templatePath,
  dailyDir
} = require("./env");

/**
 * @param {string} source
 * @return {string}
 */
const formatMD = source =>
  prettier.format(source, {
    parser: "markdown"
  });

class DailyInterviewQuestion {
  constructor(interval, date, html, css, js, skill) {
    this.date = date;
    this.interval = interval.toString().padStart(2, 0);
    this.html = html;
    this.css = css;
    this.js = js;
    this.skill = skill;
    this.relativePath = `${dailyDirName}/${this.interval}/README.md`;
  }
  toMD() {
    let str = "";
    str += `- [day${this.interval}](${this.relativePath})\n`;
    str += `  - [${this.html.title}](${this.relativePath})\n`;
    if (this.html.content) {
      str += `  \`\`\` ${this.html.content} \`\`\`\n`;
    }
    str += `  - [${this.css.title}](${this.relativePath})\n`;
    if (this.css.content) {
      str += `  \`\`\` ${this.css.content} \`\`\`\n`;
    }
    str += `  - [${this.js.title}](${this.relativePath})\n`;
    if (this.js.content) {
      str += `  \`\`\`javascript\n ${this.js.content}\n `;
    }
    if (this.skill) {
      str += `  - [${this.skill.title}](${this.relativePath})\n`;
      this.skill.content && (str += `  \`\`\` ${this.skill.content} \`\`\`\n`);
    }
    return str;
  }
}

/**
 * @param {string} filePath
 * @return {string}
 */
const getTmplStr = filePath => fs.readFileSync(filePath).toString();

const summary = async () => {
  const pathList = fs.readdirSync(dailyDir);
  const noList = pathList
    .map(str => +str.match(/\d+/)[0])
    .sort((a, b) => b - a);
  const map = await getDailyHub();
  const interviewList = noList.map(no => {
    if (!map[no]) {
      console.log(no);
    }
    const { dayNo: interval, date, children } = map[no];
    return new DailyInterviewQuestion(interval, date, ...children);
  });

  const templates = getTmplStr(templatePath);
  // generate markdown str
  const summaryStrs = interviewList.reduce(
    (text, interview) => text + interview.toMD(),
    "### 已完成\n"
  );
  const str = templates + summaryStrs;
  fs.writeFileSync(summaryReadmeDir, formatMD(str));
};

summary();
