const mongoose = require('mongoose');
const studentSchema = mongoose.Schema({
	_id : Number;
	username : String;
	password : String;
	firstName : String;
	lastName : String ;
	gradYear : Number;
	scholarship: Number;
},{
	collesctio : 'Students'
});
module.exports = studentSchema;