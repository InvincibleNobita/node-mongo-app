
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const finalSchema = new Schema({
    full_name:{ type: String, required: true },
    email:{ type: String, required: true },
    number:{ type: Number, required: true },
    city: { type: String, required: true },
    url: { type: String, required: true },
    team_name: {type: String, required: true }
    
    
    
}, {
    timestamps: true
});

const Final = mongoose.model('Final', finalSchema);

module.exports = Final;