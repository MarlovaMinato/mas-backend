import {Router, Request, Response, response} from 'express';
import {UserController} from './controller/UserController';
import {ActivyController} from './controller/ActivyController';
import {CourseUnitController} from './controller/CourseUnitController';
import {AuthenticateController} from './controller/AuthenticateController';

     interface UserRequest {
        name: string;
        email: string;
        password: string;
    }

const routes = Router();

routes.post('/user', () => console.log('User route'));
routes.post('/activy', () => console.log('Activy route'));
routes.post('/courseuunit', () => console.log('Course Unit route'));

export default routes;