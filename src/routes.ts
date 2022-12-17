import { Router } from 'express';
import { UsersController } from './models/users/users.controller';


const router = Router();
const usersController = new UsersController();

//  Users
router.get('/users', usersController.findAll);
router.get('/users/:id', usersController.findOne);
router.post('/users', usersController.create);
router.patch('/users/:id', usersController.update);
router.delete('/users/:id', usersController.remove);


export { router };