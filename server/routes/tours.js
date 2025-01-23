import express  from "express";
import { createNewTour, deleteTour, getAllTours, getFeaturedTours, 
         getSingleTour, getToursBySearch, getToursCount, updateTour } from "../Controllers/tourController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router()              

router.post('/', verifyAdmin, createNewTour)
router.put('/:id', verifyAdmin, updateTour)
router.delete('/:id', verifyAdmin, deleteTour)
router.get('/:id', getSingleTour)
router.get('/', getAllTours)
router.get('/search/getTourBySearch', getToursBySearch)
router.get('/search/getFeaturedTours', getFeaturedTours)
router.get('/search/getTourCount', getToursCount)

export default router
