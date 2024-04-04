// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
  Starters: ["Garlic Bread", "Bruschetta"],
  MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
  Desserts: ["Tiramisu", "Cheesecake"],
};

// QUESTION: What should you do first? How can you display menu items by category?

// Function to display menu items by category
function displayMenuItems(menu) {
  // Get the menu container element from the HTML
  const menuElement = document.getElementById("menu");
  // Loop through each category and its items in the menu object
  for (const [category, items] of Object.entries(menu)) {
    // Create an element to represent the category
    const courseElement = document.createElement("div");
    // Set the text content of the category element to the category name
    courseElement.textContent = category;
    // Append the category element to the menu container
    menuElement.appendChild(courseElement);
    // Create an element to represent a list of items
    const listElement = document.createElement("ul");
    // Append a list of items element to the menu container
    menuElement.appendChild(listElement);
    // Loop through the items in the category and create list items
    items.forEach((item) => {
      // Create a list item element
      const listItem = document.createElement("li");
      // Set the text content of the list item element to the item name
      listItem.textContent = item;
      // Attach a click event listener to the list item to add it to the order

      listItem.addEventListener("click", () => addToOrder(item));
      // Append the list item to the list of items
      listElement.appendChild(listItem);
    });
  }
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
  // Get the order items list and the order total element from the HTML
  const orderListElement = document.getElementById("order-items");
  const orderTotalElement = document.getElementById("order-total");
  // Create a list item for the order
  const listItem = document.createElement("li");
  // Set the text content of the list item to the item name
  listItem.textContent = itemName;
  // Append the list item to the order items list
  orderListElement.appendChild(listItem);
  // Calculate and update the total price
  let total = parseFloat(orderTotalElement.textContent);
  total += 60;
  // Update the text content of the order total element with the new total
  orderTotalElement.textContent = total.toFixed(2);
}

// Function to initialize the menu system
function initMenuSystem(menu) {
  displayMenuItems(menu);
}

// QUESTION: How can you start the menu system? What function should you call here?

// Call the init function to start the menu system
initMenuSystem(menu);
