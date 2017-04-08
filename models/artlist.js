var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.set('debug', true);

var schema = new Schema({  
     
    artist_id : Number ,
    artist_name : String , 
    cost : Number ,
    img_url : String

    },
    {
        timestamps : true
    }
); 

module.exports = mongoose.model('artlist', schema);