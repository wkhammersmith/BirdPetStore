"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const birdController_1 = require("../controllers/birdController");
const router = (0, express_1.Router)();
// GET /birds - renders a list of bird items
router.get('/', birdController_1.allBirds);
// GET /birds/add - render the add bird item page
router.get('/add', birdController_1.addBirdPage);
// POST /birds/add - add bird item to array
router.post('/add', birdController_1.addBird);
// GET /birds/edit/:birdId - render the edit bird page
router.get('/edit/:birdId', birdController_1.editBirdPage);
// POST /birds/edit/:birdId - render the edit bird page
router.post('/edit/:birdId', birdController_1.editBird);
// POST /birds/delete/:birdId - delete bird
router.post('/delete/:birdId', birdController_1.deleteBird);
// GET /birds/:birdId - render the bird requested
router.get('/:birdId', birdController_1.oneBird);
exports.default = router;
