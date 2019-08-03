import express, { Router } from 'express';
// Import GetAllMovies function/action from movies module/file
import { GetAllMovies } from './controllers/movies';

// Initialize the router
const router = Router();

// Handle /movies.json route with GetAllMovies function/action from movies controller
router.route('/movies.json')
  .get(GetAllMovies);//here we call the GetAllMovies() function

export default router;