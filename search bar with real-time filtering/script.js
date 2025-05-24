// List of fruits to search through
const fruits = [
  "Apple",
  "Banana",
  "Orange",
  "Mango",
  "Strawberry",
  "Grape",
  "Pineapple",
  "Kiwi",
  "Peach",
  "Pear",
  "Plum",
  "Watermelon",
  "Lemon",
  "Cherry",
  "Blueberry",
];

// Get our HTML elements
const searchInput = document.getElementById("searchInput");
const fruitList = document.getElementById("fruitList");

// Show all fruits when the page loads
showFruits(fruits);

// Listen for changes in the search input
searchInput.addEventListener("input", function () {
  // Get what the user typed
  const searchText = this.value.toLowerCase();

  // Filter the fruits that match the search
  const filteredFruits = fruits.filter((fruit) =>
    fruit.toLowerCase().includes(searchText)
  );

  // Show the matching fruits
  showFruits(filteredFruits);
});

// Function to display fruits in the list
function showFruits(fruitsToShow) {
  // Clear the current list
  fruitList.innerHTML = "";

  // Add each fruit to the list
  fruitsToShow.forEach((fruit) => {
    const li = document.createElement("li");
    li.textContent = fruit;
    fruitList.appendChild(li);
  });

  // Show a message if no fruits match
  if (fruitsToShow.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No fruits found";
    fruitList.appendChild(li);
  }
}
