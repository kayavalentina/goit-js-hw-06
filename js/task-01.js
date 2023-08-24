const categoriesList = document.querySelector('#categories');// ul#categories
const categoryItems = categoriesList.querySelectorAll('.item');

console.log(`Number of categories: ${categoryItems.length}`);
categoryItems.forEach(categoryItem => {const categoryTitle = categoryItem.querySelector('h2').textContent;// <h2>
  
  const categoryElements = categoryItem.querySelectorAll('li');
  
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements.length}`);
});