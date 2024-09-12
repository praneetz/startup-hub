import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-dto';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { JWTAuthGuard } from '@app/common/Guards/jwtAuth.gaurd';
import { ForgetPasswordDto } from './dto/forgotPassword.dto';

@Controller()
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private jwtService: JwtService,
  ) {}

  // login with gooele
  @ApiTags('Auth')
  @Get('googleLogin')
  @UseGuards(AuthGuard('google'))
  googleAuth() {
    console.log('// Initiates the Google OAuth2 login process');
  }

  @Get('/google/callback')
  @UseGuards(AuthGuard('google'))
  async callBack(@Req() req) {
    // checking user register or not
    const userDetails: any = await this.authService.registerByGoogle({
      email: req.user.email,
      name: req.user.firstName + ' ' + req.user.lastName,
      registerBy: 'google',
      verified: true,
    });
    const jwtToken = await this.jwtService.signAsync(userDetails);
    return jwtToken;
  }

  @ApiTags('Auth')
  @Post('register')
  registerUser(@Body() createUserDto: CreateUserDto) {
    return this.authService.createUser(createUserDto);
  }

  @ApiTags('Auth')
  @Post('login')
  loginUser(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }

  @UseGuards(JWTAuthGuard)
  @ApiBearerAuth()
  @ApiTags('Auth')
  @Post('verifyAccount')
  verifyUser(@Body() body: { otp: string }, @Req() req: Request) {
    return this.authService.verifyAccount(body.otp, req);
  }

  @UseGuards(JWTAuthGuard)
  @ApiBearerAuth()
  @ApiTags('Auth')
  @Post('resendVerificationCode')
  resendVerificationCode(@Req() req: Request) {
    return this.authService.resendVerificationCode(req);
  }

  @ApiTags('Auth')
  @Post('forgetPassword')
  forgetPassword(@Body() forgetPasswordDto: ForgetPasswordDto) {
    return this.authService.forgetPassword(forgetPasswordDto.email);
  }

  @ApiTags('Auth')
  @Get('reset-password/:tokenForResetPassword')
  resetPassword(
    @Param() token: { tokenForResetPassword: string },
    @Body() body: { password: string },
  ) {
    return this.authService.resetPassword(
      token.tokenForResetPassword,
      body.password,
    );
  }
}
