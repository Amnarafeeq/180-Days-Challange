// -------------------------------
//  JavaScript Promises – Day 32 Task
// Topic: Creating, Resolving & Chaining Promises
// -------------------------------

//  Function: letUserLogin
//  Promisified function jo user ko login karne ka process handle karta hai
function letUserLogin() {
    return new Promise((resolve, reject) => {
        console.log("----- Login to your Account -----");
        setTimeout(() => {
            console.log("Login Successfully!");
            resolve(); // Operation successful
        }, 3000);
    });
}

//  Function: letPostImages
//  Promisified function jo user ke images post karta hai
function letPostImages() {
    return new Promise((resolve, reject) => {
        console.log("----- Posting Images on Account ------");
        setTimeout(() => {
            let pictures = ["Img1", "Img2", "Img3"];
            for (let picture of pictures) {
                console.log(picture);
            }
            console.log("Images posted.");
            resolve(); // Post done
        }, 3000);
    });
}

//  Function: getReactionsOnPost
//  Promisified function jo post par aane wale reactions show karta hai
function getReactionsOnPost() {
    return new Promise((resolve, reject) => {
        console.log("----- Reactions on post -----");
        setTimeout(() => {
            let usersWhoReactedOnPost = ["User1", "User2", "User3"];
            for (let i = 0; i < usersWhoReactedOnPost.length; i++) {
                console.log(usersWhoReactedOnPost[i], "Reacted on your post.");
            }
            resolve(); // Reactions complete
        }, 3000);
    });
}

//  Function: seeAcceptedFollowRequest
//  Promisified function jo batata hai kis ne friend request accept ki
function seeAcceptedFollowRequest() {
    return new Promise((resolve, reject) => {
        console.log("----- People who Accepted your request -----");
        setTimeout(() => {
            let usersWhoAcceptedFriendRequest = ["User1", "User2", "And many more..."];
            for (let i = 0; i < usersWhoAcceptedFriendRequest.length; i++) {
                console.log(usersWhoAcceptedFriendRequest[i], "Accepted your friend's request.");
            }
            resolve(); // Accepted list done
        }, 3000);
    });
}

//  Function: loggingOut
//  Promisified function jo user ko logout karta hai
function loggingOut() {
    console.log("----- Logging Out... -----");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Logged Out");
            resolve(); // Logout complete
        }, 3000);
    });
}

// -------------------------------
//  VERSION 1: Refactored using Promises with .then() and .catch()
//  Day 32 ka main task
// -------------------------------

letUserLogin()
    .then(() => {
        return letPostImages(); // Step 1: Post images
    })
    .then(() => {
        return getReactionsOnPost(); // Step 2: Get reactions
    })
    .then(() => {
        return seeAcceptedFollowRequest(); // Step 3: See accepted requests
    })
    .then(() => {
        return loggingOut(); // Step 4: Logout
    })
    .catch((err) => {
        // Agar kahin bhi error aaye to yahan catch hoga
        console.log("Something went wrong!", err);
    });

// -------------------------------
//  VERSION 2: async/await (modern readable alternative)
//  Compare both versions: which is easier to read/debug?
// -------------------------------

/*
async function runApp() {
    try {
        await letUserLogin();                // Step 1: Login
        await letPostImages();               // Step 2: Post images
        await getReactionsOnPost();          // Step 3: Reactions
        await seeAcceptedFollowRequest();    // Step 4: Friend requests
        await loggingOut();                  // Step 5: Logout
    } catch (error) {
        console.log("Kuch ghalat hogaya:", error);
    }
}

// runApp(); // Uncomment to test async/await version
*/
