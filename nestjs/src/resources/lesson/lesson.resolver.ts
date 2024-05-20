import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { LessonType } from "./models/lesson.type";
import { CreateLessonDTO } from "./dto/create-lesson.dto";
import { LessonService } from "./lesson.service";
import { LessonEntity } from "../../database/mongodb/entities/lesson.entity";

@Resolver(of => LessonType)
export class LessonResolver {
    constructor(private lessonService: LessonService) { }
    @Query(returns => LessonType)
    lesson(
        @Args('id') id: string
    ): Promise<LessonType> {
        return this.lessonService.getLesson(id)
    }

    @Mutation(returns => LessonType)
    createLesson(
        @Args('createLessonData') createLessonData: CreateLessonDTO
    ): Promise<LessonType> {
        return this.lessonService.create(createLessonData)
    }
}