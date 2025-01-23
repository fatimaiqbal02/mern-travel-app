import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import tourRoute from './routes/tours.js'
import userRoute from './routes/users.js'
import authRoute from './routes/auth.js'
import reviewRoute from './routes/review.js'
import bookingRoute from './routes/booking.js'

dotenv.config()

const app = express()
const portNo = process.env.PORTNO || 8000

//setting cors middleware
const corsOptions = {
    origin:true,
    credentials:true
}

//database connection
const connect = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Mongodb Database Connected Succesfully")
    }catch(error){
        console.log("Mongodb Database Connection Failed")
    }
}

//middlewares
app.use(express.json())
app.use(cors(corsOptions))
app.use(cookieParser())

app.get('/', (req,res)=>{
    res.send("Api is working Successfully")
})

//setting route for Authentication
app.use('/api/v1/auth', authRoute)

//setting route for Tour
app.use('/api/v1/tours', tourRoute)

//setting route for User
app.use('/api/v1/users', userRoute)

//setting route for Review
app.use('/api/v1/review', reviewRoute)

//setting route for Booking
app.use('/api/v1/booking', bookingRoute)


//starting the server
app.listen(portNo, (err)=>{
    connect()
    console.log('Server listening on port No '+portNo)
})
