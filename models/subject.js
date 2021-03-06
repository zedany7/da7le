/**
 * Created by Joe on 06/06/2015.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var subjectModel = new Schema({
    "user":{type:Schema.Types.ObjectId,ref: 'User'},
    "category": {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        "description": "Array of categories"
    },
    "locationCoords": {
        type: [Number],
        index: '2d'
    },
    "title": {
        type: String
    },
    "status": {
        type: Boolean,
        default:true
    },
    "description":{
        type: String
    },
    gender : {type:String},
    create_date: { type: Date, default: Date.now, required: true },
    unix_date: { type: Number, required: true }
,
    "interested": [{
        type: Schema.Types.ObjectId,
        ref: 'interested',
        "description": "Array of interested"
    }]
    //"ts":{
    //	type: Date,
    //    default: Date.now,
    //    description: "Timestamp of the track date/time"
    //},
});

module.exports= mongoose.model('Subject', subjectModel);