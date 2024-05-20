import { HttpException, HttpStatus, Injectable, Logger } from "@nestjs/common";
import { LessonEntity } from "../../database/mongodb/entities/lesson.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm'
import { CreateLessonDTO } from "./dto/create-lesson.dto";
import { v4 as uuid } from 'uuid'

@Injectable()
export class LessonService {
    private logger = new Logger(LessonService.name)
    constructor(
        @InjectRepository(LessonEntity)
        private readonly repo: Repository<LessonEntity>
    ) { }

    async create(input: CreateLessonDTO): Promise<LessonEntity> {
        try {
            const lesson: LessonEntity = await this.repo.create(input)

            lesson.id = uuid()

            return this.repo.save(lesson)
        } catch (e) {
            this.logger.error(e.message ?? e)
            throw new HttpException(e.message ?? "Error on creating a new lesson", HttpStatus.BAD_REQUEST)
        }
    }

    async getAll(): Promise<Array<LessonEntity>> {
        return this.repo.find()
    }

    async getLesson(id: string) {
        return this.repo.findOne({ where: { id } })
    }
}