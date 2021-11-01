import express from 'express'
import mongoose  from 'mongoose'
import router from './router.js';

const PORT = 5000;
const DB_URL = 'mongodb+srv://user:user@cluster0.jwed3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const app = express()

app.use(express.json())
app.use('/api',router)
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/', (req, res) => {
    res.status(200).json('Server is working')
})

app.get('/allItems', (req, res) => {
    res.json(post)
})



async function startApp(){
    try{
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT' + PORT))
    }catch (e){
        console.log(e)
    }
}

startApp()
