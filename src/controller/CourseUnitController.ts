import { Request, Response } from "express";
import {CreateActivyService} from '../services/CreateCourseUnitService';

class CourseUnitController {
    async create(request: Request, response:Response){
        const courseUnitData = request.body

        const courseunit = new CreateCourseUnitService()

        const courseunit = createCourseUnit.execute(courseUnitData)

        return response.json(courseUnit);
    }

    async show(request: Request, response:Response){
        const userId = request.body.user;

        const getCoursesUnits = new GetCoursesUnitsService();

        const coursesUnits = await getCoursesUnits.execute(userId);

        return response.json(coursesUnits);
    }
}

export (CourseUnitController)