var mongoose = require('mongoose');
var url = 'mongodb://127.0.0.1:27017/problem';
mongoose.Promise = global.Promise;

mongoose.connect(url);
var db = mongoose.connection;
 db.once('open',function(){
   console.log('db connect ok.');
 })

 var Schema = mongoose.Schema;
 var userSchema = new Schema({
   title:String,
   name:String,
   password:String,
   birthday:Date,
   job:String,
 });

 var Cent = mongoose.model('Cent',userSchema);

 module.exports = Cent;
