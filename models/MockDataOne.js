const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mdoneSchema = new Schema({
    full_name:{ type: String, required: true },
    email:{ type: String, required: true },
    number:{ type: Number, required: true },
    city: { type: String, required: true },
    url: { type: String, required: true },
    team_name: {type: String}
    // id: {type: mongoose.Schema.Types.ObjectId,  ref: 'MockDataTwo'}
    
    // link: { type: String, required: true, unique: false },
    // cover: { type: String, default: 'default' },
    
    
    
}, {
    timestamps: true
});

const MOne = mongoose.model('mone', mdoneSchema);

module.exports = MOne;