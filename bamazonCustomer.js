var mysql = require("mysql");
//var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: PASSWORD,
    database: "bamazon"
})

function startApp() {
    connection.connect(function(err){
        if (err) throw err;
    connection.query("SELECT * FROM products", function (err,res) {
        if(err) {
            console.log(err);
        };

        console.log("------------\nWelcome to Bamazon!\n------------")
        console.log(res)
        for (i=0; i<res.length; i++) {
            console.log("ID: " + res[i].item_id + "\nProduct: " + res[i].product_name 
            + "\nDepartment: " + res[i].department_name + "\nPrice: " + res[i].price + "\nQuantity: " + res[i].quantity);
        } 

        //inquirer framework here (will complete when issues with mysql solved)
        /*
        inquirer.prompt ([
            {
                type: "input",
                name: "itemId",
                message: "What item would you like to buy? Please enter the ID of the item!"
            },
            {
                type: "input",
                name: "quantity",
                message: "How much will you purchase?"
            },
            
        ]).then(function(ans){
            var itemBought = (ans.itemId);
            var quantityBought = parseInt(ans.quantity);
            //get total price
            var totalPrice 

            console.log("Your total is $" + totalPrice)
        })

        //code to check quantity
        //connect to db
        //if statement--make sure item selected has high enough quantity, throw error for insufficient quantity
        
        //update db
        //connect to db
        //change quantity of item to reflect items purchased

        //add prompt for going buying something else
        //if yes, run inquirer again
        //if no, end prompt
        
        */

        })
    })
}

startApp();