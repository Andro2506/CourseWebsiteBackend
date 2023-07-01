import express from 'express';
import { addToPlaylist, changePassword, deletMyProfile, forgetPassword, getAllUsers, getMyProfile, login, logout, register, removeFromPlaylist, resetPassword, updateProfile, updateProfilepic, updateUserRole } from '../controllers/userController.js';
import {authorizeAdmin, isAuthenticated} from '../middlewares/auth.js';
import singleUpload from '../middlewares/multer.js';

const router = express.Router();

router.route('/register').post(singleUpload, register);

router.route('/login').post(login);

router.route('/logout').get(logout);

router.route('/me').get(isAuthenticated, getMyProfile).delete(isAuthenticated, deletMyProfile);

router.route('/changepassword').put(isAuthenticated, changePassword);

router.route('/update-me').put(isAuthenticated, updateProfile);

router.route('/change-me-pic').put(isAuthenticated,singleUpload, updateProfilepic);

router.route('/forgetpassword').post(forgetPassword);

router.route('/resetpassword/:token').post(resetPassword);

router.route('/addtoplaylist').post(isAuthenticated, addToPlaylist);

router.route('/removefromplaylist').delete(isAuthenticated, removeFromPlaylist);

// Admin only
router.route('/admin/users').get(isAuthenticated, authorizeAdmin, getAllUsers);
router.route('/admin/user/:id').put(isAuthenticated, authorizeAdmin, updateUserRole).delete(isAuthenticated, authorizeAdmin, );

export default router;