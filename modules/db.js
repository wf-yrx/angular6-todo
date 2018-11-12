var MongoCient = require('mongodb').MongoClient;
// var dbUrl = 'mongodb://wf_runner:zff1314520hh@wf.e2e38.com:27138/wfdb'; //远程mongodb数据库
//  'mongo 127.0.0.1:27138/wfdb -u wf_runner -p zff1314520hh';  指令远程连接服务器数据库
var dbUrl = 'mongodb://wf_runner:zff1314520hh@localhost:27138/wfdb';//远程mongodb数据库
// var dbUrl = 'mongodb://localhost:27017/wfdb';//本地数据库


function connectDb(callback){
    MongoCient.connect(dbUrl,{
        useNewUrlParser:true,
    },function(err,db){
        if(err){
            console.log(err);
            return;
        } else {
            console.log('数据库连接成功');
        }
        if(callback){
            callback(db);
        }
        db.close();
    })
}

module.exports = connectDb;