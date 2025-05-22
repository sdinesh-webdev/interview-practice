// Get the button and the container where we'll show the users
const fetchButton = document.getElementById("fetchButton");
const userContainer = document.getElementById("userContainer");

// When someone clicks the button, we'll fetch the data
fetchButton.addEventListener("click", fetchUsers);

// This function will fetch and show the users
async function fetchUsers() {
  // First, show a loading message
  userContainer.innerHTML = "Loading users...";

  try {
    // Fetch data from a free API that gives us sample users
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    // Convert the response to JSON format
    const users = await response.json();

    // Clear the old content
    userContainer.innerHTML = "";

    // For each user we got, create a nice card to show their info
    users.forEach((user) => {
      // Create a new div for the user
      const userCard = document.createElement("div");
      userCard.className = "user-card";

      // Put the user's information inside the card
      userCard.innerHTML = `
                <h3>${user.name}</h3>
                <p>📧 Email: ${user.email}</p>
                <p>📱 Phone: ${user.phone}</p>
                <p>🌐 Website: ${user.website}</p>
            `;

      // Add the card to our container
      userContainer.appendChild(userCard);
    });
  } catch (error) {
    // If something goes wrong, show an error message
    userContainer.innerHTML = "Oops! Something went wrong. Please try again.";
    // Also log the error to console so developers can see what happened
    console.error("Error:", error);
  }
}
