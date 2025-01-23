import Booking from '../models/Booking.js'

//1) CREATE A BOOKING
export const createBooking = async (req, res)=>{

    const newBooking = new Booking(req.body)

    try{
        const savedBooking = await newBooking.save()
        res.status(200).json({status: "success", success:"true", 
                                 message: "Your Tour is Booked", data: savedBooking})

    }catch(err){
        res.status(500).json({status: "failed", success:"false", 
                                 message: "Failed to Book Tour"})
    }
}

//2) GET BOOKING DETAILS BY ID
export const getBooking = async (req, res)=>{

    const id = req.params.id

    try{
        const singleBooking = await Booking.findById(id)
        res.status(200).json({status: "success", success:"true", 
                                 message: "Succesful", data: singleBooking})

    }catch(err){
        res.status(404).json({status: "failed", success:"false", 
                                 message: "Booking Not Found"})
    }
}

//3) GET All BOOKINGs DETAILS
export const getAllBookings = async (req, res)=>{

    try{
        const AllBookings = await Booking.find()
        res.status(200).json({status: "success", success:"true", 
                                 message: "Succesful", count: AllBookings.length, data: AllBookings})

    }catch(err){
        res.status(500).json({status: "failed", success:"false", 
                                 message: "Internal Server Error"})
    }
}