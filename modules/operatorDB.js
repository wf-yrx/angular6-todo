let connectDb = require('./db');

//查询所有数据
// function find(dbname,collectionName,json,callback){
//     connectDb((db)=>{
//         let DB = db.db(dbname);
//         let collection = DB.collection(collectionName);
//         let result  = collection.find(json).toArray(callback);
//     })
// }
let find = (dbname,collectionName,json,callback)=>{
    connectDb((db)=>{
        let DB = db.db(dbname);
    let collection = DB.collection(collectionName);
    collection.find(json).toArray(callback);
})
};

//添加某一条数据
let insertOne = (dbname,collectionName,json,callback)=>{
    connectDb((db)=>{
        let DB = db.db(dbname);
    let collection = DB.collection(collectionName);
    collection.insertOne(json,'',callback);
})
};

//查询某一条数据
let findOne =(dbname,collectionName,json,callback)=>{
    connectDb((db)=>{
        let DB = db.db(dbname);
    let collection = DB.collection(collectionName);
    collection.findOne(json,"",callback);
})
};

//修改某一条数据
let updateOne = (dbname,collectionName,filter,json,callback)=>{
    connectDb((db)=>{
        let DB = db.db(dbname);
    let collection = DB.collection(collectionName);
    collection.updateOne(filter,json,'',callback);
})
};

//删除某一条数据
let deleteOne = (dbname,collectionName,filter,callback)=>{
    connectDb((db)=>{
        let DB = db.db(dbname);
    let collection = DB.collection(collectionName);
    collection.deleteOne(filter,'',callback);
})
};

//删除所有数据
let remove = (dbname,collectionName,filter,callback)=>{
    connectDb((db)=>{
        let DB = db.db(dbname);
    let collection = DB.collection(collectionName);
    collection.deleteMany(filter,'',callback);
})
};


module.exports = {
    find,
    findOne,
    insertOne,
    updateOne,
    deleteOne,
    remove,
};