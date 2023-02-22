import { RequestHandler } from "express";
import { Birds } from "../models/birds";


export const defaultBird: RequestHandler = (req, res, next) => {
    res.redirect('/birds');
}

export const allBirds: RequestHandler = async (req, res, next) => {
    let birdList: Birds[] = await Birds.findAll();
    res.render('allBirds', { birdList });
}

export const oneBird: RequestHandler = async (req, res, next) => {
    let itemId = req.params.birdId;
    let birdItem: Birds | null = await Birds.findByPk(itemId);

    if (birdItem) {
        res.render('birdDetails', { foundBird: birdItem });
    }
    else {
        res.status(404).render('error', { message: 'bird not found' });
    }
}

export const addBirdPage: RequestHandler = (req, res, next) => {
    res.render('addBird');
}

export const addBird: RequestHandler = async (req, res, next) => {
    let newBird: Birds = req.body;
    await Birds.create(newBird);
    res.redirect('/birds');
}

export const editBirdPage: RequestHandler = async (req, res, next) => {
    let itemId = req.params.birdId;
    let birdItem: Birds | null = await Birds.findOne({
        where: { birdId: itemId }
    });

    if (birdItem) {
        res.render('editBirds', { foundBird: birdItem });
    }
    else {
        res.status(404).render('error', { message: 'bird not found' });
    }
}

export const editBird: RequestHandler = async (req, res, next) => {
    let itemId = req.params.birdId;
    let updatedItem: Birds = req.body;

    let [updated] = await Birds.update(updatedItem, {
        where: { birdId: itemId }
    });

    if (updated === 1) {
        res.redirect('/birds/' + itemId);
    }
    else {
        res.render('error', { message: 'Bird could not be updated' });
    }
}

export const deleteBird: RequestHandler = async (req, res, next) => {
    let itemId = req.params.birdId;

    let deleted = await Birds.destroy({
        where: { birdId: itemId }
    });

    if (deleted) {
        res.redirect('/birds')
    }
    else {
        res.status(404).render('error', { message: 'Cannot find bird' });
    }
}