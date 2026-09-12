- create respository
-initalized the repository
-node_modules,package.json,package-lock.json
-install express
-create a server
-listen  to port 7777
-write request handlers for /test ,/hello
-install nodemon and update scripts inside pakage.json
-what are dependencies
-what is the use of "-g" while npm install.
-difference between caret and tilde(^ vs ~)



-initialize git
-.gitignore
-create remote repo on github
-push all code to remote repo
-play with routes and routes  extensions ex /hello,hello/2,/xyz
-order of routes matter a lot
-install postman app and create workplace/collection>test Api call
- write logic to handle get,post,put,patch,lete api clls and test them on postman
-explore routing and use of ?,+,(),* in the routes
-use regx in routes /a/,/.*fly$/
- reading query params in routes
-reading the dynamic routes

-multiple route handler play with code
-next()
-next function and errors along with res.send()
-app.use("/route",rH,[rH2,rH3],rH4,rH5);
-what is the middleware ? why do we need it
- how express js basically handles requstes behind the scenes
-diff app.use and app.all
-write a dummy auth middleware for admin
-write a dummy auth middleware for all user routes,expect /user/login
-Error handling using app.use("/".(err,req,res,next)={});


-create a free cluster in mongodb
-install mongoose library
-connect your application with database "connection-url/devTinder"
-call the connectDB function and connect to databse before stsrting application on 7777
-create a userschema & user model
-create post signup api for add data to data base
-push some documnets using api callsmfrom postman
-useing error handling in api try catch


-diff in js object and json
-ad the express.json middle ware to your app
-make your signup api dynamic to recive data from  the end user
-user.findone with duplicate emails ids ,ehich object returned
-api get user by email
-api feed api - get /feed - get all the users from the database
-api -get user by id
- create delete user api
-diff patch and put
-api - create update the user
-explore modle methods
-what are option in a model.findoneandupdate methos explore more about it
-update the user with email id

-eplore schematype options from the documentation
-add reuired,unique,lowercase,min,minlength,trim
-add default
-create custome vaidation for gender
- improve the db schema and put all appropriate schema in each feild
-add time stamp in user schema
-data sanitization api validation for each feild
- add api validation patch request and sinup post api