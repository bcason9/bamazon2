# Bamazon

This app runs in Node JS via CLI and uses mySQL for database support. It is a mock-shopping app which allows users to purchase items from the database. 

# Dependencies

Requires npm inquirer, mySQL, and npm install of package-JSON.

# Visuals 

The below image dislpays the functionality of the app. The app is initiated, which displays a table drawn from mySQL populated with items, quantities, and prices from the database. The user is asked to select a product ID, followed by a quantity. The app then calculates a total price based on how many units of the item have been purchased, while also updating the database to reflect items which have been purchased. Finally, the database table is shown again with updated quantity counts.

![](images/Screenshot%20(30).png)

# Future Development

This app is now up and running, and will likely be given more functionality in the future. Possible ideas include further inventory management options for the database, additional user options, and options for adding items to the database within the CLI.
