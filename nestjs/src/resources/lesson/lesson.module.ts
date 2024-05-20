import { Module } from "@nestjs/common";
import { LessonResolver } from "./lesson.resolver";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LessonEntity } from "../../database/mongodb/entities/lesson.entity";
import { LessonService } from "./lesson.service";

@Module({
    imports: [TypeOrmModule.forFeature([LessonEntity])],
    providers: [LessonResolver, LessonService]
})
export class LessonModule { }