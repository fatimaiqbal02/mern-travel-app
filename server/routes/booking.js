import express  from "express";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
import { createBooking, getAllBookings, getBooking } from "../Controllers/bookingController.js";

const router = express.Router()              

router.post('/', verifyUser, createBooking)
router.get('/:id', verifyUser, getBooking)
router.get('/', verifyAdmin, getAllBookings)

export default router
