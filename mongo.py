import pymongo
client=pymongo.MongoClient("mongodb://127.0.0.1:27017/")
mydb=client['StudentDetails']
information=mydb.StudentInformation

#insert Query
record=[{
        'firstname':'Jenish',
        'lastname': 'Patel',
        'city':'Patan'
	},{
        'firstname': 'Smit',
        'lastname': 'Patel',
        'city':'Surat'
        },{
        'firstname': 'Het',
        'lastname': 'Rami',
        'city':'Mehsana'
	}]

information.insert_many(record)

#Update Query
myquery = { "firstname": "Het" }
newvalues = { "$set": { "lastname": "Patel" } }

information.update_one(myquery, newvalues)


#delete Query
dlquery = {"firstname": "Smit"}

information.delete_one(dlquery)

#read data
rquery = { "firstname": "Jenish" }

rdoc = information.find(rquery)

for x in rdoc:
  print(x)



