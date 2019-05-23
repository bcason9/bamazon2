var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: <password>,
    database: "bamazon"
})


function checkTable() {
    connection.query("SELECT * FROM products", function (err,res) {
        if(err) {
            console.log(err);
        };

        console.log("------------\nWelcome to Bamazon!\n------------")
        console.table(res)

        startApp(err, res);
    })
}


function startApp(err, res) {
    
        
        inquirer.prompt ([
            {
                type: "input",
                name: "itemId",
                message: "Welcome to Bamazon! What item would you like to buy? Please enter the ID of the item!"
            },
            {
                type: "input",
                name: "quantity",
                message: "How much will you purchase?"
            },
            
        ]).then(function(ans){
            var itemBought = parseInt(ans.itemId);
            var quantityBought = parseInt(ans.quantity);
            var totalPrice;
            var newQuant;
            

            for (var i=0; i<res.length; i++) {

                

                if (itemBought === res[i].item_id) {
                    if (quantityBought >= res[i].quantity) {
                        console.log("Sorry! We only have " + res[i].quantity + " of that item!")
                        

                    } else {
                        totalPrice = quantityBought * res[i].price;
                        console.log();
                        console.log( quantityBought + " of the " + res[i].product_name +"\nYour total is $" + totalPrice);
                        newQuant = res[i].quantity - quantityBought;

                        //function updateTable() {
                            connection.query("UPDATE products SET ? WHERE ?",
                            [
                                {quantity: newQuant},
                                {item_id: ans.itemId},
                            ],
                            function (err, res) {

                               
                                connection.query("SELECT * FROM products", function(err, res){
                                    console.table(res);
                                    //console.log(newQuant);
                                    connection.end();
                                })
                            });


                        
                    }
                    
                }

                
                
            }
        
    

        
    })
};
checkTable();
