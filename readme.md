  
to get the program run 

git clone https://github.com/ikubi2020-sketch/soldiesBanifit.git

to run the program run the commend ======npm start=========

I chose to use mongo  DB for welfare record because it required a more versatile version of data because it contains lists of objects , so collection seems like the best option  

and for the other to I chose to use relational Db becaus they are a lot of very declared pieces of data so it is the best option,
and it also allow to use foreign key which can short procedures 

npm start

the program manege soldiers welfare by 

===========file structure =================

.vscode = en extension to miss spelled words

directory ctrl  = contain all controllers 

file ctrlBudgetCtrl contain ctrl dealing with the budget allocation and spend transactions

file ctrlSoldiers contain ctrl dealing with the welfare record

directory dal = contain files dealing with both DB

file budgetDal contain interactions dealing with the budget allocation and spend transactions

file soldiersDal contain interactions dealing with the welfare record

directory DBconnection = connecting to both DB

file mongoDB contains connection to mongo DB

file supaBaseDB contains connection to supaBase DB


directory routes contain all routes

file budgetRoutse deal with all routs dealing with relational DB of welfare record 

file soldiersRoutse deal with all routs dealing with not relational DB of benifits

directory service contain all logical operations of the program

file budgetService contain all logical engagement about the welfare record 

file soldierService contain all logical engagement about the benifits

file index  contain the server and all  connection to it 

file middleware contain most validations mostly by zod library 


======the program flow=============

every request is going throw the server in file index to the route it requested 
and then going throw middleware if needed and then it going to the controller lair 
and then it going to the service lair where all logical action are being done 
an then to the dal lair where the engagement with the DB is being done


