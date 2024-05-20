import { Field, InputType } from "@nestjs/graphql";
import { IsString } from "class-validator";

@InputType()
export class CreateLessonDTO {
    @Field()
    @IsString({ message: "name must be a string!" })
    readonly name: string

    @Field()
    @IsString({ message: "startDate must be a string!" })
    readonly startDate: string

    @Field()
    @IsString({ message: "endDate must be a string!" })
    readonly endDate: string
}