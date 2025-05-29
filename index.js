// You are building a system that sends email reminders to users 5 seconds after they register. Create an async function sendReminder(email) that waits 5 seconds using setTimeout and then logs "Reminder sent to [email]". Simulate sending a reminder to 3 users.
//  const sendReminder = (email)=>{
//     return new Promise(function(resolve){
//     setTimeout(() =>{
//         resolve(`Reminder sent to ${email}`)
//     }, 5000);
//     })
// };
//   const  sendReminderAsync= async () =>{
//     const users = ['makuto@gmail.com', 'shirley@gmail.com', 'dorothy@gmail.com'];
    
//     for (const email of users) {
//         await sendReminder(email);
//     }
// };

// sendReminderAsync();

// // Define the async function to send reminders
async function sendReminder(email) {
    // Wait for 5 seconds
    await new Promise(resolve => setTimeout(resolve, 5000));
    // Log the reminder message
    console.log(`Reminder sent to ${email}`);
}

// Simulate sending reminders to three users
async function simulateReminders() {
    const users = ['user1@example.com', 'user2@example.com', 'user3@example.com'];
    
    for (const email of users) {
        await sendReminder(email);
    }
}

// Call the simulation function
simulateReminders();

// You want to simulate a login system that tries to log in a user. The first two attempts fail, but the third succeeds. Write a function tryLogin() that uses a counter and Promises. Use setTimeout to simulate a 1-second delay between attempts. Log "Login successful" or "Login failed after 3 attempts" based on whether login succeeds.

// Start by creating a function to simulate a login attempt
//Create a variable to start attempts at 0
//Create another variable to hold maximum attempts at 3
//Create a function to simulate the login process
//Set a 
function tryLogin() {
    let attempts = 0; 
    const maxAttempts = 3; 
    const correctPassword = "password123"; // Simulated correct password

    
    const loginAttempt = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                attempts++;
                if (attempts < maxAttempts) {
                    console.log("Login failed");
                    reject("Login failed");
                } else {
                    console.log("Login successful");
                    resolve("Login successful");
                }
            }, 1000); // 1 second delay
        });
    };

    // Function to handle the login attempts
    const handleLogin = async () => {
        for (let i = 0; i < maxAttempts; i++) {
            try {
                await loginAttempt();
                break; // Exit loop if login is successful
            } catch (error) {
                if (i === maxAttempts - 1) {
                    console.log("Login failed after 3 attempts");
                }
            }
        }
    };

    handleLogin();
}

// Call the tryLogin function to simulate the login process
tryLogin();


//Build a countdown timer that counts down from 5 to 0, displaying one number per second using setInterval. When the countdown reaches 0, stop the interval and log "Time's up!".

// Create a function to start the countdown timer
// Create a variable to start the countdown at 5
// Create another variable to hold the setInterval function
// Show the current countdown number
// Decrease the countdown by 1
// Confirm if the countdown has reached 0 and stop the interval
// Send the message 'Time's up' if the countdown is below zero
// Set the interval to 1 second 
// Call the function to start the countdown
function countdownTimer() {
    let countdown = 5;
    const intervalId = setInterval(() => {
        console.log(countdown); 
        countdown--;

        
        if (countdown < 0) {
            clearInterval(intervalId); 
            console.log("Time's up!"); 
        }
    }, 1000); 
}


countdownTimer();


// You are simulating a page that loads data in stages. Create an async function called loadPage() that: logs "Loading header...", waits 1 second; logs "Loading content...", waits 2 seconds; logs "Loading footer...", waits 1 second; and finally logs "Page fully loaded". Use setTimeout inside Promises and await them in sequence.

// Create an async function to simulate loading a page in stages
// Wait for a second
// Wait for 2 seconds
// Wait for a second
// Call the loadPage function to execute the loading simulation
async function loadPage() {
    console.log("Loading header...");
    await new Promise(resolve => setTimeout(resolve, 1000)); 

    console.log("Loading content...");
    await new Promise(resolve => setTimeout(resolve, 2000)); 

    console.log("Loading footer...");
    await new Promise(resolve => setTimeout(resolve, 1000)); 

    console.log("Page fully loaded");
}


loadPage();

// You are simulating fetching stock prices with delays. Write a function fetchPrice(symbol) that returns a Promise which resolves after 2 seconds with the message "Price for [symbol] retrieved". Use async/await to call it for two different stocks ("AAPL" and "GOOG") and log the messages in order.

// Create a function to simulate fetching stock prices
// Wait for 2 seconds
// Create an async function to fetch prices for two stocks
// Fetch the price for AAPL
// Log a response for AAPL
// Fetch the price for GOOG
// Log a response for GOOG
// Call the function to execute the stock price fetching

function fetchPrice(symbol) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Price for ${symbol} retrieved`);
        }, 2000); 
    });
}


async function getStockPrices() {
    const aaplPrice = await fetchPrice("AAPL"); 
    console.log(aaplPrice);

    const googPrice = await fetchPrice("GOOG");
    console.log(googPrice); 
}


getStockPrices();
