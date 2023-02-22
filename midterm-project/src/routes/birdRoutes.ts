import { Router } from 'express';
import { allBirds, oneBird, addBirdPage,
    addBird, editBirdPage, editBird, deleteBird } from '../controllers/birdController';

const router = Router();

// GET /birds - renders a list of bird items
router.get('/', allBirds);

// GET /birds/add - render the add bird item page
router.get('/add', addBirdPage);

// POST /birds/add - add bird item to array
router.post('/add', addBird);

// GET /birds/edit/:birdId - render the edit bird page
router.get('/edit/:birdId', editBirdPage);

// POST /birds/edit/:birdId - render the edit bird page
router.post('/edit/:birdId', editBird);

// POST /birds/delete/:birdId - delete bird
router.post('/delete/:birdId', deleteBird);

// GET /birds/:birdId - render the bird requested
router.get('/:birdId', oneBird);

export default router;