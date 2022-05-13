var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/';

MongoClient.connect(url, function(err, dbo) {

    console.log("Connection done");

    con = dbo.db("Blood_record");

    var myobj = {name:"Jenish",blood_group:"o+",email:"jenish@gmail.com"};

    // Insert Document
//    con.collection('users').insertOne(myobj,function(err,res){
//         if(err) throw err;

//         console.log("inserted");
//     });

    
    //Read Documents
   /* con.collection('users').find({}).toArray(function(err, 
        result) {
        
            if (err) throw err;
            console.log(result)
            //callback(result)
        });*/

    //Update Documents

    var myquery = { email: "jenish@gmail.com" };
    var newvalues = { $set: {name: "Jenish Patel", city:"Patan" } };
    con.collection("users").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
        console.log("1 document updated");
        // con.close();
    });

    
    //delete Documents
    // var delquery = { city:'Patan' };
    // con.collection("users").deleteOne(delquery, function(err, obj) {
    //     if (err) throw err;
    //         console.log("1 document deleted");
        
    // });
   
});