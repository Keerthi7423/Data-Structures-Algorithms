// Step 1: Main function
function processUser(name, callback) {
  console.log("Processing user:", name);

  // Simulate delay (like API call)
  setTimeout(() => {
    console.log("User data ready");

    // Step 2: Call the callback function
    callback(name);
  }, 2000);
}

// Step 3: Callback function
function showUser(name) {
  console.log("Welcome " + name);
}

// Step 4: Call main function and pass callback
processUser("Keerthi", showUser);