import {
  Body,
  Controller,
  Post,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { Roles } from '@app/common/Authorization/role.decorator';
import { Role } from '@app/common/Authorization/role.enum';
import { RolesGuard } from '@app/common/Authorization/role.guard';
import { JWTAuthGuard } from '@app/common/Guards/jwtAuth.gaurd';
import { UpdateUserDto } from './dto/update-user.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from '@app/common/Upload/upload.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly uploadService: UploadService,
  ) {}

  @ApiTags('User')
  @Roles(Role.Freelancer)
  @UseGuards(JWTAuthGuard, RolesGuard)
  @ApiBearerAuth()
  @Post('profile')
  getMyProfile(@Req() request: Request) {
    return this.userService.getMyProfile(request);
  }

  @ApiTags('User')
  @UseGuards(JWTAuthGuard)
  @ApiBearerAuth()
  @Post('updateProfile')
  updateProfile(@Req() request: Request, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateProfile(updateUserDto, request);
  }

  @ApiTags('User')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          // 👈 this property
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @Post('uploadProfileImage')
  @UseInterceptors(FileInterceptor('file'))
  async fileUpload(@UploadedFile() file: Express.Multer.File) {
    return await this.uploadService.uploadFile(file);
  }
}
