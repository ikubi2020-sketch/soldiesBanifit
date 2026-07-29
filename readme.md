  
to get the program run 

git clone https://github.com/ikubi2020-sketch/soldiesBanifit.git

to run the program run the commend

I chose to use mongo  DB for welfare record because it required a more versatile version of data because it contains lists of objects , so collection seems like the best option  

and for the other to I chose to use relational Db becaus they are a lot of very declared pieces of data so it is the best option,
and it also allow to use foreign key which can short procedures 

npm start

the program manege soldiers welfare by 

file structure 

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

file budgetRoutse deal with all routs dealing with relational DB