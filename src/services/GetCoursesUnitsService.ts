import {getRepository } from "typerom";
import {CourseUnit} from "../model/CourseUnit";

interface UserId {
    id?: string;
}

class GetCoursesUnitsService {

    public async execute({id}: UserId){

        const courseUnitRepository = getRepository(CourseUnit);

        const coursesUnits = courseUnitRepository.find();

        if(!courseUnits){
            return {
                message:'courses units not foud'
            }
        }

        return courseUnits;

    }

}

export {GetCourseUnitsService};