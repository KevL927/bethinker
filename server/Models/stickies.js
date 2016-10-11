var mongoose = require('mongoose');
var user = require('./users');
var Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');

var StickySchema = new Schema({
    name: String,
    date: Date,
    content: String,
    rating: { type: Number, min: 1, max: 3 }
});


StickySchema.methods.validatePassword = function(password, callback) {
	bcrypt.compare(password, user.password, function(err, isValid) {
		if(err) {
			callback(err);
			return
		}
		callback(null, isValid);
	});
}

module.exports = mongoose.model('Sticky', StickySchema);


