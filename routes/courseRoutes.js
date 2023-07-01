import express from 'express';
import { getAllCourses, createCourses, getCourseLectures, addLecture, deleteCourses, deleteLecture } from '../controllers/corseController.js';
import singleUpload from '../middlewares/multer.js';
import { authorizeAdmin, authorizeSubscribers, isAuthenticated } from '../middlewares/auth.js';

const router = express.Router();

router.route('/courses').get(getAllCourses);
router.route('/createcourses').post(isAuthenticated,authorizeAdmin,singleUpload, createCourses);
router.route('/courses/:id').get(isAuthenticated,authorizeSubscribers,getCourseLectures).post(isAuthenticated,authorizeAdmin,singleUpload, addLecture).delete(isAuthenticated, authorizeAdmin, deleteCourses);
router.route('/lecture').delete(isAuthenticated, authorizeAdmin, deleteLecture);

export default router;