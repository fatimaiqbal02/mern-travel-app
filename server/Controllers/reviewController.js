import Review from '../models/Review.js'
import Tour from '../models/Tour.js'

//1) CREATE A REVIEW
export const createReview = async (req, res)=>{
     
    const tourId = req.params.tourId
    const newReview = new Review({...req.body})

    try{
        const savedReview = await newReview.save()
        await Tour.findByIdAndUpdate(tourId, {$push: {reviews: savedReview._id} })       //adding id
        res.status(200).json({status: "success", success:"true", 
                             message: "Review Submitted", data: savedReview})

    }catch(err){
        res.status(500).json({status: "failed", success:"false", 
                             message: "Failed to submit Review"})
    }
}