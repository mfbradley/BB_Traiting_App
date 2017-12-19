# BB_Traiting_App

Blackbeard Traiting
"Clear your ship"

Get rid of stuff around the house booty in return 

TRADER object(like author){
    trader_id:
    contact_email:
}

ITEM/SERVICE object{
    name:
    photos:(not for MVP)
    estimatedValue:
    category:
    trader_id:(taken from TRADER who POSTed ITEM)
    Trade_requested: [interested people array] on click pushed to traderequested array 
                        if(traderequested){
                            true
                        }
                        else {false}
                        
}

<!-------------- Pages ----------------------------->
ITEMs VIEWS page:
Get All ITEMs
Sort by estimatedValue: (like library app long book short book all book)
Sort by Trader: (just like author)
                -this displays all ITEMs for particular Trader
                
Click takes fellow TRADER to this.ITEMs page


LOG IN page:
-Populates TRADER 
-ITEMs POST section:
    set up form
    -name:
    -photos?
    -price
    -User Id


<!--APP NEEDS-->
-Node/Express Web Server
-MySQL  with Sequelize ORM
-GET and POST routes
-Deploy to heroku/deploy to jaws DB
-new library/technoloy (Vue.js)
-Polished UI/Front End
-Folder structure MVC
-quoting standards

<!--Strongly Recommended-->
-authentication
-use handlebars
-using a public dataset
-migration strategy? (sharing data across team members/ database)
                    -using sequelize migrations(check out)
