 var mongo = require('mongodb').MongoClient
    var size = process.argv[2]
    
    var url = 'mongodb://localhost:27017/learnyoumongo'
    
    mongo.connect(url, function(err, db) {
      if (err) throw err
      var prices = db.collection('prices')
     	prices.aggregate([
	{$match:{size:size}},
	{$group:{
		_id:'total'
	,total:{
		$avg:'$price'
		}
	}}
	]).toArray(function(err,results){
		console.log(Number(results[0].total).toFixed(2));	
 db.close()

	})
    }) 



