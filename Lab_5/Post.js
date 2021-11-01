import mongoose from 'mongoose'

const Post = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    weight: {type: Number, required: true},
    count: {type: Number, required: true},
})

export default mongoose.model('Post', Post)