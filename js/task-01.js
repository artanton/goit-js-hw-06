const elements = document.querySelector("#categories");
const categoryList = elements.querySelectorAll(".item");

console.log(`Number of categories:${categoryList.length}`);

categoryList.forEach((categoryItem) => {
  const itemHeader = categoryItem.querySelector("h2");
  console.log(`Category: ${itemHeader.textContent}`);

  const categoryElQuant = categoryItem.lastElementChild.childElementCount;
  console.log(`Elements; ${categoryElQuant}`);
});
