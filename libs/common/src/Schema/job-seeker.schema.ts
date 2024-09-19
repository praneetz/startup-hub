import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { User } from './User.schema' 
export type JobSeekerDocument = HydratedDocument<JobSeeker>;

@Schema()
export class JobSeeker {
    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User', required: true })
    userId: User;

    @Prop()
    bio: string;

    @Prop([String])
    skills: string[];

    @Prop()
    experience: number;

    @Prop()
    education: string;

    @Prop()
    location: string;

    @Prop([String])
    certifications: string[];

    @Prop({ default: false })
    profilePublished: boolean;

    @Prop({ default: Date.now })
    createdAt: Date;
}

export const JobSeekerSchema = SchemaFactory.createForClass(JobSeeker);
