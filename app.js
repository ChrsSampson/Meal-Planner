// VARIABLES
const main = document.querySelector('main');
const headline = document.querySelector('.headline');
const tagline = document.querySelector('.tagline');
const btnContainer = document.getElementById('btn-container');
const startButton = document.getElementById('startButton');
const newButton = document.getElementById('newUser');
const userList = document.getElementById('userList');
const planDiv = document.querySelector('.plan');
const mealList = document.getElementById('meals');
const name = ""; // Assign your name
const meals = []; // Add in some meals...

// HELPER FUNCTIONS

//Figure out what day it is 
const getDay = () => {
    var d = new Date();
    var day = d.getDay()
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    return weekday[day];
};

// create new users and keep track of user list
function createUser(username){
    let oldUsrs = localStorage.getItem('users');
    
    let newUsr = username;

    oldUsrs.push(newUsr);

   localStorage.setItem('users', oldUsrs);
}

// Compile user list and show users
function showUserList(){
    localStorage.forEach((username, i) => {
        let usr = localStorage.getItem(username[i]);
        let listItem = document.createElement('li');
        listItem.textContent = usr;
        userList.appendChild(listItem);
    });
    userList.classList.remove(hidden);
}

const getRandomWeeklyMeals = () => {};

const displayWeeklyMealPlan = () => {};

const showPlan = () => {};


headline.textContent = getDay();
tagline.textContent = `Hey ${name}, click the button below to see your weekly meal planner.`;

// EVENT LISTENERS
btnContainer.addEventListener('click', (e) => {
    if(e.target.id == "newUser"){
        console.info("new user")
        createUser(prompt('Please Enter your name'));

    }
    else if(e.target.id == "startButton"){
        console.info("Log in")
        showUserList();
    }
});

userList.onclick = (e) => {
    name = e.target.textContent;
    userList.classList.add(hidden);
}





