const nav = document.querySelector('#categories');
const liItem = document.querySelectorAll('li.item');
const navCategories = `Number of categories: ${liItem.length}`
console.log(navCategories);


const message = liItem.forEach((item) => {
    console.log(
`Category: ${item.querySelector('h2').textContent}
Elements: ${item.querySelectorAll('li').length}`
        );
    
})

