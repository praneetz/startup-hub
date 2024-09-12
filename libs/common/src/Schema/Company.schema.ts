import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CompanyDocument = HydratedDocument<Company>;

@Schema()
export class Company {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  numberOfEmp: string;

  @Prop()
  location: string;

  @Prop()
  departments: [string];

  @Prop({ default: false })
  verified: boolean;

  @Prop()
  verificationCode: string;
}

export const CompanySchema = SchemaFactory.createForClass(Company);
