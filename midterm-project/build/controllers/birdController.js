"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBird = exports.editBird = exports.editBirdPage = exports.addBird = exports.addBirdPage = exports.oneBird = exports.allBirds = exports.defaultBird = void 0;
const birds_1 = require("../models/birds");
const defaultBird = (req, res, next) => {
    res.redirect('/birds');
};
exports.defaultBird = defaultBird;
const allBirds = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let birdList = yield birds_1.Birds.findAll();
    res.render('allBirds', { birdList });
});
exports.allBirds = allBirds;
const oneBird = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let itemId = req.params.birdId;
    let birdItem = yield birds_1.Birds.findByPk(itemId);
    if (birdItem) {
        res.render('birdDetails', { foundBird: birdItem });
    }
    else {
        res.status(404).render('error', { message: 'bird not found' });
    }
});
exports.oneBird = oneBird;
const addBirdPage = (req, res, next) => {
    res.render('addBird');
};
exports.addBirdPage = addBirdPage;
const addBird = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let newBird = req.body;
    yield birds_1.Birds.create(newBird);
    res.redirect('/birds');
});
exports.addBird = addBird;
const editBirdPage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let itemId = req.params.birdId;
    let birdItem = yield birds_1.Birds.findOne({
        where: { birdId: itemId }
    });
    if (birdItem) {
        res.render('editBirds', { foundBird: birdItem });
    }
    else {
        res.status(404).render('error', { message: 'bird not found' });
    }
});
exports.editBirdPage = editBirdPage;
const editBird = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let itemId = req.params.birdId;
    let updatedItem = req.body;
    let [updated] = yield birds_1.Birds.update(updatedItem, {
        where: { birdId: itemId }
    });
    if (updated === 1) {
        res.redirect('/birds/' + itemId);
    }
    else {
        res.render('error', { message: 'Bird could not be updated' });
    }
});
exports.editBird = editBird;
const deleteBird = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let itemId = req.params.birdId;
    let deleted = yield birds_1.Birds.destroy({
        where: { birdId: itemId }
    });
    if (deleted) {
        res.redirect('/birds');
    }
    else {
        res.status(404).render('error', { message: 'Cannot find bird' });
    }
});
exports.deleteBird = deleteBird;
