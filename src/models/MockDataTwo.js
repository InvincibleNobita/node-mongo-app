const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mdtwoSchema = new Schema({
    full_name:{ type: String, required: true },
    email:{ type: String, required: true },
    team_name:{type: String, required: true},
    id: {type: mongoose.Schema.Types.ObjectId,  ref: 'MockDataOne', required: true}
    
    // link: { type: String, required: true, unique: false },
    // cover: { type: String, default: 'default' },
    
    
    
}, {
    timestamps: true
});

const MTwo = mongoose.model('mtwo', mdtwoSchema);

module.exports = MTwo;