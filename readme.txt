mongoose is a javascrript library used to runtime javascrript environment node js and db mongodb connection.
mongodb is collectionstyped scema based relational database used with javascrript runtime environment nodejs.
don't use mongodb compass or
don't run cmd commands mongod 
don't connect and externaal connection mongodb.
if only defined collection name collections don't created but db connected.
if connect db and create collecion during connecting to db create schema also.
mongodb-mongoose D://db/mongodb-mongoose
must servic enable in the services from services.msc
must assign and give mongoose.model to modelName than exports it 
must Name = mongoose.model('Name', schema);
module.exports = Name