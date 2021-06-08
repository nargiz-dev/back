const Nightmare = require("nightmare");
const { convertArrayToCSV } = require("convert-array-to-csv");
const fs = require("fs");
const nightmare = Nightmare({ show: true, waitTimeout: 60000 });
let arr = [];
const convertToCsv = (data) => {
  let id = 0;
  let finalData = data.map((url) => {
    id += 1;
    return [id, url];
  });
  const header = ["id", "url"];
  const csvFromArrayOfArrays = convertArrayToCSV(finalData, {
    header,
    separator: ";",
  });
  console.log(csvFromArrayOfArrays);
  fs.writeFile("./images.csv", csvFromArrayOfArrays, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
};
nightmare
  .goto("https://bina.az/baki/alqi-satqi/menziller/yeni-tikili/1-otaqli")
  .evaluate(() => {
    const elems = [
      ...document.querySelectorAll(
        ".items-i .preview .item_slider .slider_images .slider_image:first-child img"
      ),
    ];
    console.log("111")
    console.log(elems.map((elem) => elem.getAttribute("data-src")));
    return elems.map((elem) => elem.getAttribute("data-src"));
  })
  .click(".pagination-inner .page:nth-child(2) a")
  .wait(5000)
  .evaluate(() => {
    const elems = [
      ...document.querySelectorAll(
        ".items-i .preview .item_slider .slider_images .slider_image:first-child img"
      ),
    ];
    console.log("222")

    console.log(elems.map((elem) => elem.getAttribute("data-src")));
    return elems.map((elem) => elem.getAttribute("data-src"));
  })
  .click(".pagination-inner .page:nth-child(3) a")
  .wait(5000)
  .evaluate(() => {
    const elems = [
      ...document.querySelectorAll(
        ".items-i .preview .item_slider .slider_images .slider_image:first-child img"
      ),
    ];
    console.log("333")

    console.log(elems.map((elem) => elem.getAttribute("data-src")));
    return elems.map((elem) => elem.getAttribute("data-src"));
  })
  .click(".pagination-inner .page:nth-child(4) a")
  .wait(5000)
  .evaluate(() => {
    const elems = [
      ...document.querySelectorAll(
        ".items-i .preview .item_slider .slider_images .slider_image:first-child img"
      ),
    ];
    console.log("444")

    console.log(elems.map((elem) => elem.getAttribute("data-src")));
    return elems.map((elem) => elem.getAttribute("data-src"));
  })
  .click(".pagination-inner .page:nth-child(5) a")
  .wait(5000)
  .evaluate(() => {
    const elems = [
      ...document.querySelectorAll(
        ".items-i .preview .item_slider .slider_images .slider_image:first-child img"
      ),
    ];
    console.log("555")

    console.log(elems.map((elem) => elem.getAttribute("data-src")));
    return elems.map((elem) => elem.getAttribute("data-src"));
  })

  .end()
  .then((elems) => {
    convertToCsv(elems);
  })
  .catch((error) => {
    console.error("Search failed:", error);
  });
