import { Router } from 'express';
import { UsersController } from './models/users/users.controller';
import { GamesController } from './models/games/games.controller';


const router = Router();
const usersController = new UsersController();
const gamesController = new GamesController();


//  Users
router.get('/users', usersController.findAll);
router.get('/users/:id', usersController.findOne);
router.post('/users', usersController.create);
router.patch('/users/:id', usersController.update);
router.delete('/users/:id', usersController.remove);

//  Games
router.get('/games', gamesController.findAll);
router.get('/games/:id', gamesController.findOne);
router.get('/games/title/:title', gamesController.findByTitle);
router.post('/games', gamesController.create);
router.patch('/games/:id', gamesController.update);
router.delete('/games/:id', gamesController.remove);


export { router };