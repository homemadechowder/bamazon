var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  readProducts();
  
  
});


function customerPrompt(productArr){

    inquirer
    .prompt([
        {
            type: "list", 
            message: "What would you like to purchase today",
            choices: productArr,
            name: "purchase"
        },
        {
            type: "input",
            message: "How many units of this item would you like to purchase",
            name: "quantity"
        }
    ])
    .then(function(res){
        
        connection.query(
            "UPDATE products SET stock = stock - "+res.quantity+" WHERE ?",
            [
                {
                    product_name: res.purchase
                }
            ],
            function(err,res){
                console.log(res.affectedRows + " products updated!\n");
                
                
        });
        
        console.log("Your Order of " + res.quantity + " " + res.purchase + " is complete");
        continuePrompt();
    })
}

function readProducts() {
    console.log("Showing all products...\n");
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      var productArr = [];
      // Log all results of the SELECT statement
      console.log("------------------------------------------------------------------");
      console.log("ID | Product Name | Product Department | Price | Stock");
      for (i = 0; i < res.length; i++){
          console.log("------------------------------------------------------------------");
          console.log(res[i].id + " | " +res[i].product_name+ " | " + res[i].department_name + " | $" + res[i].price + " | " + res[i].stock + " |");
          productArr.push(res[i].product_name);
        //connection.end();
          if (res[i].stock <= 0){
              console.log ("The item " + res[i].product_name + " is out of stock");
          }
      }
      customerPrompt(productArr);
    });
    
}

function continuePrompt(){

    inquirer
    .prompt([
        {
            type: "input",
            message: "Would you like to continue shopping? (yes/no)",
            name: "choices"
        }
    ])
    .then(function(res){
        
        if (res.choices == "yes"){
            readProducts();
        }
        else if (res.choices == "no"){
            connection.end();
        }
        else{
            console.log("Input yes or no");
        }
    })
}
