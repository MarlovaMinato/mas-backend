import {Request, Response} from 'express';
import { CreateUserService } from '../services/CreateUserServices';

class UserController {
    async create(request:Request, response:Response) {
        const userData = request.body

        const createUser = new CreateUserService()

        const user = await createUser.execute(userData);

        return response.json(user);


    }
}

class ActivyController  {
    async create(request:Request, response:Response) {
        const name = request.body

        const activy_date = request.body

        const course_unit_id = request.body


        const createUser = new CreateUserService()

        const activy = await createUser.execute(name);
        const activy = await createUser.execute(activy_date);
        const activy = await createUser.execute(course_unit_id);

        return response.json(activy);


    }
}

class CourseUnitController  {
    async create(request:Request, response:Response) {
        const name = request.body

        const description = request.body


        const createUser = new CreateUserService()

        const courseunit = await createUser.execute(name);
        const courseunit = await createUser.execute(description);

        return response.json(courseunit);

export {UserController};