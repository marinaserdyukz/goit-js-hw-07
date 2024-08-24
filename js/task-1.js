const categoriesListElem = document.querySelectorAll("#categories")
const categoriesListItem = document.querySelectorAll("li.item");

console.log(`Number of categories: ${categoriesListItem.length}`);


categoriesListItem.forEach((category) => {
const categoryName = category.querySelector("h2").textContent;
const categoryItem = category.querySelectorAll("ul li").length;

console.log(`Category: ${categoryName}`)
console.log(`Elements: ${categoryItem}`);
});







