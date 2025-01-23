import Tour from '../models/Tour.js'

//1) TO CREATE A NEW TOUR
export const createNewTour = async (req, res)=>{

    const newTour = Tour(req.body)

    try{
        const savedTour = await newTour.save()
        res.status(201).json({status: "success", success:"true", 
                             message: "Tour Sucessfully Created", data: savedTour})

    }catch(err){
        res.status(500).json({status: "failed", success:"false",
                             message: "Tour Cannot be Created. Try again"})
    }
}

//2) TO UPDATE A TOUR
export const updateTour = async (req, res) =>{

    const id = req.params.id

    try{
        const updateTour = await Tour.findByIdAndUpdate(id, {$set: req.body}, {new: true})
        res.status(200).json({status: "success", success:"true", 
                             message: "Tour Sucessfully Updated", data: updateTour})

    }catch(err){
         res.status(500).json({status: "failed", success:"false",
                             message: "Tour Cannot be Updated. Try again"})
    }
}

//3) TO DELETE A TOUR
export const deleteTour = async (req, res) =>{

    const id = req.params.id

    try{
        await Tour.findByIdAndDelete(id)
        res.status(200).json({status: "success", success:"true", 
                             message: "Tour Sucessfully Deleted"})

    }catch(err){
         res.status(500).json({status: "failed", success:"false",
                             message: "Tour Cannot be Deleted. Try again"})
    }
}

//4) TO GET A SINGLE TOUR
export const getSingleTour = async (req, res) =>{

    const id = req.params.id

    try{
        const singleTour = await Tour.findById(id).populate('reviews')
        res.status(200).json({status: "success", success:"true", 
                             message: "Sucessful", data: singleTour})

    }catch(err){
         res.status(404).json({status: "failed", success:"false",
                             message: "Error: Tour Data Not Found."})
    }
}

//5) TO GET ALL TOURS
export const getAllTours = async (req, res) =>{

    //for pagination
    const page = parseInt(req.query.page)
    //console.log(page)

    try{
        const allTours = await Tour.find({}).skip(page * 8).limit(8).populate('reviews')
        res.status(200).json({status: "success", success:"true", count: allTours.length,
                             message: "Sucessful", data: allTours})

    }catch(err){
         res.status(404).json({status: "failed", success:"false",
                             message: "Error: Data Not Found."})
    }
}

//6) TO GET TOURS BY SEARCH
export const getToursBySearch = async(req, res)=>{

    const city = new RegExp(req.query.city, 'i')
    const distance = parseInt(req.query.distance)
    const maxGroupSize = parseInt(req.query.maxGroupSize)

    try{
        const tours = await Tour.find({city, distance:{$gte: distance}, 
                                         maxGroupSize:{$gte: maxGroupSize}}).populate('reviews')
        res.status(200).json({status: "success", success:"true",
                             message: "Sucessful", data: tours})

    }catch(err){
        res.status(404).json({status: "failed", success:"false",
                            message: "Error: Data Not Found."})
    }
}

//7) TO GET ONLY FEATURED TOURS
export const getFeaturedTours = async (req, res) =>{

    try{
        const FeaturedTours = await Tour.find({featured: true}).populate('reviews').limit(8)
        res.status(200).json({status: "success", success:"true", count: FeaturedTours.length,
                             message: "Sucessful", data: FeaturedTours})

    }catch(err){
         res.status(404).json({status: "failed", success:"false",
                             message: "Error: Data Not Found."})
    }
}

//8) TO GET TOURS COUNT
export const getToursCount = async (req, res)=>{

    try{
        const tourCount = await Tour.estimatedDocumentCount()
        res.status(200).json({status: "success", success:"true",
                             message: "Sucessful",data: tourCount})

    }catch(err){
        res.status(500).json({status: "failed", success:"false",
                             message: "Error: Failed to Fetch."})
    }
}

