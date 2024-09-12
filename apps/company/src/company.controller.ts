import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { CompanyService } from './company.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateCompanyDto } from './dto/createCompany.dto';
import { UpdateCompanyDto } from './dto/updateCompany.dto';
import { JWTAuthGuard } from '@app/common/Guards/jwtAuth.gaurd';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @ApiTags('Company')
  @Post('register')
  registerCompany(@Body() createCompanyDto: CreateCompanyDto) {
    return this.companyService.createCompany(createCompanyDto);
  }

  @ApiTags('Company')
  @Get(':id')
  getCompany(@Param() id: string) {
    return this.companyService.getCompany(id);
  }

  @Get()
  getCompanies() {
    return this.companyService.getCompanies();
  }

  @UseGuards(JWTAuthGuard)
  @ApiBearerAuth()
  @ApiTags('Company')
  @Post('update/:id')
  updateCompany(
    @Param() id: string,
    @Body() updateCompanyDto: UpdateCompanyDto,
  ) {
    return this.companyService.updateCompany(id, updateCompanyDto);
  }
}
