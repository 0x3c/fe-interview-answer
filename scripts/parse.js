const fetch = require("node-fetch");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { url } = require("./env");

/**
 *
 * @param {string} url
 * @return {string}
 */
const fetchHtml = url => fetch(url).then(res => res.text());

/**
 * @param {string} html
 * @return {string[]}
 */
const parseHtml2DailyItemText = html => {
  const document = new JSDOM(html).window.document;
  const textContent = document.getElementsByClassName("markdown-body")[0];
  const textList = textContent.getElementsByTagName("ul")[0].textContent;
  const strlist = textList
    .replace(/\n(?!.)/g, "")
    .split(/\n(?=第\s*\d+\s*天)/g)
    .filter(str => !!str);
  return strlist;
};

/**
 * @param {string} itemText
 */
const convert2DailyItem = itemText => {
  const list = itemText.split(/\n(?=\[.+\])/g);
  const time = list[0];
  const dayNo = time.match(/\d+(?=\s*天)/)[0];
  const date = time.match(/\d+\.\d+\.\d+/)[0];
  const itemList = list.slice(1);

  const children = itemList.map(itemText => {
    const itemInfoList = itemText.split("\n");
    const title = itemInfoList[0];
    const content = itemInfoList.slice(1).join("\n");
    return { title, content };
  });
  return {
    dayNo,
    date,
    children
  };
};

const getDailyHub = async () => {
  const htmlText = await fetchHtml(url);
  const textList = parseHtml2DailyItemText(htmlText);
  const hubs = textList.reduce((map, text) => {
    const item = convert2DailyItem(text);
    map[item.dayNo] = item;
    return map;
  }, {});
  return hubs;
};

module.exports = {
  getDailyHub
};
