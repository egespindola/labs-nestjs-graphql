import { Entity, PrimaryColumn, ObjectIdColumn, Column } from "typeorm"

@Entity('lesson')
export class LessonEntity {
    @ObjectIdColumn()
    _id: string

    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @Column()
    startDate: string

    @Column()
    endDate: string
}