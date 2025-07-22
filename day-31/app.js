// Login function - user ko login karwana
function letUserLogin() {
    return new Promise((resolve, reject) => {
        console.log("----- Login to your Account -----");
        setTimeout(() => {
            console.log("Login Successfully!");
            resolve();
        }, 3000);
    });
}

// Post images function - user apne images post karega
function letPostImages() {
    return new Promise((resolve, reject) => {
        console.log("----- Posting Images on Account ------");
        setTimeout(() => {
            let pictures = ["Img1", "Img2", "Img3"];
            for (let picture of pictures) {
                console.log(picture);
            }
            console.log("Images posted.");
            resolve();
        }, 3000);
    });
}

// Reactions function - log apke post pe react karte hain
function getReactionsOnPost() {
    return new Promise((resolve, reject) => {
        console.log("----- Reactions on post -----");
        setTimeout(() => {
            let usersWhoReactedOnPost = ["User1", "User2", "User3"];
            for (let i = 0; i < usersWhoReactedOnPost.length; i++) {
                console.log(usersWhoReactedOnPost[i], "Reacted on your post.");
            }
            resolve();
        }, 3000);
    });
}

// Friend requests accept hone wale users
function seeAcceptedFollowRequest() {
    return new Promise((resolve, reject) => {
        console.log("----- People who Accepted your request -----");
        setTimeout(() => {
            let usersWhoAcceptedFriendRequest = ["User1", "User2", "And many more..."];
            for (let i = 0; i < usersWhoAcceptedFriendRequest.length; i++) {
                console.log(usersWhoAcceptedFriendRequest[i], "Accepted your friend's request.");
            }
            resolve();
        }, 3000);
    });
}

// Logout function - user ko logout karna
function loggingOut() {
    console.log("----- Logging Out... -----");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Logged Out");
            resolve();
        }, 3000);
    });
}

// -------------------------------
//  VERSION 1: Using .then() chaining (async ka alternative)
// -------------------------------
letUserLogin()
    .then(letPostImages)
    .then(getReactionsOnPost)
    .then(seeAcceptedFollowRequest)
    .then(loggingOut)
    .catch((err) => console.log("Error:", err));

/*
// -------------------------------
//  VERSION 2: Using async/await (recommended modern way)
// -------------------------------
async function runApp() {
    try {
        await letUserLogin();                // Login karna
        await letPostImages();               // Images post karna
        await getReactionsOnPost();          // Reactions lena
        await seeAcceptedFollowRequest();    // Friend requests accept hone ka check
        await loggingOut();                  // Logout karna
    } catch (error) {
        console.log("Kuch ghalat hogaya:", error);
    }
}

// runApp(); // Uncomment this to test async/await version
*/

