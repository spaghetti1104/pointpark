var registeredUsers =[];
function loginScreen() {
    console.log("\nLOGIN SCREEN");
    console.log("============");
    let username = prompt("Enter username: ");
    let password = prompt("Enter password: ");
    
    // Check if user is registered
    let userExists = false;
    for (let i = 0; i < registeredUsers.length; i++) {
      if (registeredUsers[i].username === username && registeredUsers[i].password === password) {
        userExists = true;
        console.log(`Welcome back, ${username}!`);
        // Call function to display store options
        displayStoreOptions();
        break;
      }
    }
    
    if (!userExists) {
      console.log("Invalid username or password. Please try again.");
      // Call function to display login or register screen again
      logInOrResgisterScreen();
    }
  }  
function registerScreen(){
    console.log("Register Screen");
    var username = prompt("Enter Username:");
    var password = prompt("Enter password:");
    var firstname = prompt("What is your first name?");
    var lastname = prompt("What is your last name?");
    var address = prompt("What is your address?");
    var city = prompt("What city do you live in?");
    var state = prompt("What state do you live in? ");
    var zipcode = prompt("What is your zipcode?");
    var usernameExist = false;
    for (var i = 0; i < registeredUsers.length; i++) {
        if (registeredUsers[i].username === username) {
        alert("Username already existed");
        usernameExist = true;
        break;
        }
    }
    if (!usernameExist){
        registeredUsers.push({username,password, firstname, lastname,address,city,state,zipcode});
        console.log("Register Successfully");
        loginScreen();
    }
}
function logInOrResgisterScreen(){
    var choice = prompt("Enter 1 to log in or 2 to register");
    if (choice === "1"){
        loginScreen();
    } else if (choice === "2") {
        registerScreen();
    } else {
        alert("invalid choice");
        logInOrResgisterScreen();
    }
}
var items =[
    {name: "spaghetti noodles", price: 0.98},
    {name: "yellow onion", price: 3.68},
    {name: "ground beef", price : 3.27},
    {name: "olive oil", price: 2.88},
    {name: "garlic", price: 0.67},
    {name: "salt", price: 0.57},
    {name: "black peper", price: 3.77},
    {name: "red peper flakes", price: 3.97},
    {name: "tomato sauce", price: 0.88},
    {name: "oregano leaves", price: 1.12},
    {name: "balsamic vinegar", price: 2.98},
    {name: "parmesan cheese", price: 2.22},
];
var cart = [];
function displayStoreOptions(){
    console.log("The Spaghetti Market");
    console.log("====================");
    console.log("Choose your option");
    console.log("1. View items");
    console.log("2. Add item to cart");
    console.log("3. View cart");
    console.log("4. Checkout");
    var choice = prompt ("Choose your option");
    switch(choice){
        case "1":
            console.log("Items in store");
            console.log("==============");
            for(var i = 0; i < items.length; i++){
                console.log(i+1 + ". " + items[i].name + "--" + items[i].price);
            }
            console.log("yellow onion, ground beef, garlic, tomato sauce is not vailable for delivery");
            displayStoreOptions();
            break;
            case "2":
            console.log("Add items to cart");
            console.log("=================");
            for(var i = 0; i < items.length; i++){
                console.log(i+1 + ". " + items[i].name + "--" + items[i].price);
            }
            var itemChoice = parseInt(prompt("Enter item number"));
            if(itemChoice >= 1 && itemChoice <= items.length){
                var selectedItem = items[itemChoice -1];
                cart.push(selectedItem);
                console.log("Item added to the cart");
            } else {
                console.log("Invalid item number");
            }
            displayStoreOptions();
            break;
        case "3":
            console.log("Cart");
            console.log("====");
            if (cart.length > 0){
                var total = 0;
                for (var i =0; i<cart.length;i++){
                    console.log(i+1 + " " + cart[i].name + "--" + cart[i].price);
                    total += cart[i].price;
                    total = total*1.07;
                }
                console.log("the total is: "+ total.toFixed(2));
                displayStoreOptions();
            } else{
                alert("Cart is empty");
                displayStoreOptions();
            }
            break;
        case "4":
            if (cart.length > 0){
                console.log("Check out");
                console.log("=========");
                var total=0;
                for (var i =0; i<cart.length;i++){
                    console.log(i+1 + " " + cart[i].name + "--" + cart[i].price);
                    total += cart[i].price;
                    total = total*1.07;
                }
                console.log("The total is: "+total.toFixed(2));
                console.log("Delivery method");
                console.log("===============");
                console.log("1. Delivery");
                console.log("2. Pick up");
                var method = prompt("Pick your delivery method");
                switch(method){
                    case "1":
                        for (var i = 0; i < cart.length; i++){
                            if(cart[i].name==="ground beef"){
                                alert("Ground beef is not available for delivery");
                                displayStoreOptions();
                            } else if(cart[i].name==="garlic"){
                                alert("Garlic is not available for deilivery");
                                displayStoreOptions();
                            } else if(cart[i].name==="tomato sauce"){
                                alert("Tomato sauce is not available for delivery");
                                displayStoreOptions();
                            } else if(cart[i].name==="yellow onion"){
                                alert("yellow onion is not available for delivery");
                                displayStoreOptions();
                            }                        
                        }
                        total = total +9.99;
                        console.log("Your total is (+9.99 delivery fee): "+total);
                        break;
                    case "2":
                        console.log("Your total is: "+ total);
                        break;
                    default:
                        alert("Invalid input");
                        displayStoreOptions();
                        break;
                }
                console.log("Payment method");
                console.log("==============");
                console.log("1. Apple Pay");
                console.log("2. Google Pay");
                console.log("3. Venmo");
                console.log("4. Credit card");
                var pay = prompt("Pick your payment method:");
                switch(pay){
                    case "1":
                        alert("Thank you for using our service");
                        break;
                        ProcessingInstruction.exit;
                    case "2":
                        alert("Thank you for using our service");
                        break;
                    case "3":
                        alert("Thank you for using our service");
                        break;
                    case "4":
                        alert("Thank you for using our service");
                        break;
                    default:
                        alert("Invalid input");
                        displayStoreOptions();
                        break;
                }

            }else {
                console.log("cart is empty");
                displayStoreOptions();
            }
        default:
            alert("Invaid option. Choose again");
            displayStoreOptions();
            break;
    }
}
