MongoDB

1. mongod  -> show version
2. mongod --dbpath "E:\Study Resource\UI\src\Data\MongoDB"  -> run server
3. mongo -> run client
4. mongodb:localhost
5. terminal
    a> first step:
        show dbs    -> 显示数据库
        db          -> which database you are in
        use testdb  -> switch database
        db.Collection1.insert({"name":"test"})
        show collections

    b> Insert / Drop data:
        db_demo.dropDatabase()      -> drop database
        db.createCollection('test')
        db.employees.insert({"name":"test"})
        db.test.drop();
        db.employees.insert([{},{}])    -> 插入多行数据

    c> Switch to company database
        use company

    d> clear -> cls

    e> find() 
        db.employees.find().pretty()    -> Show all detail
        db.employees.find({"EmpNo":"2"}).pretty()   -> find information
        db.employees.find({"Age":{$lt:"30}})
        db.employees.find({"Age":{$lt:"30}}).pretty()   -> age less than 30
        db.employees.find({"Age":{$gt:"30}}).pretty()   -> age large than 30
        db.employees.find({"Age":30, "salary":"8000"}).pretty()   -> find multiple condition
        db.employees.find({"Age":30, $or:[{"salary":"8000"},{"Salary":"100000}]}).pretty()   -> find multiple condition
        db.employees.find({},{"FirstName":1}).pretty()
        db.employees.find({},{"FirstName":1, _id:0}).pretty()
        db.employees.find().pretty().sort({"Salary":-1}).collation({locale:"en_US",numericOrdering:true})   -> convert string into number

    f> skip()
        db.employees.find({},{"FirstName":1, _id:0}).pretty().skip(3)
    g> limit()
        db.employees.find({},{"FirstName":1, _id:0}).pretty().skip(3).limit(2)
    h> sort():
        db.employees.find({},{"FirstName":1, _id:0}).pretty().sort({"FirstName":-1})
        db.employees.find().pretty().sort({"Salary":1}).limit(3).skip(2)
    i> update()
        db.employees.update()
        db.employees.update({"_id":ObjectId("5e7c36f318a11aead97827db")},{$set:{"Salary":"90000"}})
        db.employees.update({"Skill":"MongoDB"},{$set:{"Salary":"200000"}},{multi:true})

    j> Remove()
        db.employees.remove({"Skill":"MongoDB"})

    k>  Resolve Mongoose
        npm init --yes
        npm install mongoose --save
        mongoose.connect('mongodb://localhost/testdb')

    l> Node.js Connection Mongoose:
            npm init    -> generate package.json
            npm install -> generate package-lock.json
            npm install mongoose
            node Mar_29_connection.js
            npm install mocha --save

            npm run test    -> Demo test check mocha

    m>

    n>
    
####
