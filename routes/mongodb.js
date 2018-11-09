let express = require('express');
let router = express.Router();

let ObjectId = require('mongodb').ObjectID;

let operatorDB = require('../modules/operatorDB');

let db = 'wfdb';
let collection = 'angularTodo';

// let db = 'xrr';
// let collection = 'xrrCollection';

router.get('/find',function(req,res,next){
    operatorDB.find(db,collection,'',(err,content)=>{
        if(!err){
            console.log("444"+JSON.stringify(content));
            res.json(content);
        }
    })
});

router.get('/findAccess',function(req,res,next){
    // console.log('获取前端的请求参数',req.query);
    operatorDB.find(db,collection,{'adress':req.query.adress},(err,content)=>{
        if(!err){
            res.json(content);
        }
    })
});

router.get('/findOne',function(req,res,next){
    // console.log('获取前端的请求参数',req.query);
    operatorDB.findOne(db,collection,{'adress':req.query.adress},(err,content)=>{
        if(!err){
            res.json(content);
        }
    })
});

router.get('/insertOne',function(req,res,next){
    // console.log('获取前端的请求参数',req.query);
    operatorDB.insertOne(db,collection,{'adress':req.query.adress,'story':req.query.story,'person':req.query.person},(err,content)=>{
        if(!err){
            res.json(content);
        }
    })
});

router.get('/updateOne',function(req,res,next){
    // console.log('获取前端的请求参数',req.query);
    operatorDB.updateOne(db,collection,{'_id':ObjectId(req.query.id)},{$set:{'adress':req.query.adress,'story':req.query.story,'person':req.query.person}},(err,content)=>{
        if(!err){
            res.json(content);
        }
    })
});

router.get('/deleteOne',function(req,res,next){
    // console.log('获取前端的请求参数',req.query);
    operatorDB.deleteOne(db,collection,{'_id':ObjectId(req.query.id)},(err,content)=>{
        if(!err){
            res.json(content);
        }
    })
});

router.get('/remove',function(req,res,next){
    // console.log('获取前端的请求参数',req.query);
    operatorDB.remove(db,collection,{},(err,content)=>{
        if(!err){
            res.json(content);
        }
    })
});
module.exports = router;