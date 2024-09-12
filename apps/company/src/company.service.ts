import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/createCompany.dto';
import { Company } from '@app/common/Schema/Company.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { MailService } from '@app/common';
import { UpdateCompanyDto } from './dto/updateCompany.dto';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company.name) private companyModel: Model<Company>,
    private mailService: MailService,
  ) {}

  getHello(): string {
    return 'Hello World from Company microservice!';
  }

  async createCompany(createCompanyDto: CreateCompanyDto) {
    // generate verification code
    const verificationCode = Math.floor(Math.random() * 100000 + 1);
    createCompanyDto.verificationCode = `${verificationCode}`;

    // create a company record in db
    const company = await this.companyModel.create(createCompanyDto);

    // send mail for email verification
    this.mailService.sendMail({
      to: company.email,
      subject: 'Verifying Company',
      message: `Hey ${createCompanyDto.name}, Please verify your company by typing ${verificationCode} code`,
    });

    // emit message to the queue
    // this.notificationClient.emit('user_registered', createdUser.email);
    return {
      message: 'Company created successfully, Please verify your company!',
      data: null,
    };
  }

  async getCompany(id: string) {
    const company = await this.companyModel.findById(id);
    return {
      message: 'Company fetched successfully!',
      data: company,
    };
  }

  async getCompanies() {
    const companies = await this.companyModel.find({});
    return {
      message: 'Companies fetched successfully!',
      data: companies,
    };
  }

  async updateCompany(id: string, updateCompanyDto: UpdateCompanyDto) {
    await this.companyModel.findByIdAndUpdate(id, updateCompanyDto);
    return {
      message: 'Company updated successfully!',
    };
  }
}
