import express from 'express'
import { signup, signin, googleSignIn } from '../controllers/auth.controller.js';

const route = express.Router();

route.post('/signup',signup);
route.post('/signin',signin)
route.post('/google',googleSignIn)

export default route;