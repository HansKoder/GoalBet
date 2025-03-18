import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { log } from 'console';
import { CredentialDto } from 'src/dtos/Credential.dto';
import { LoginService } from 'src/services/login/login.service';

@Controller('api/v1/login')
export class LoginController {

    constructor(private loginService: LoginService) {}

    @Post()
    @HttpCode(HttpStatus.OK)
    login (@Body() credential: CredentialDto) {
        log(`[INFO] Login - credentials ${credential}`)
        return this.loginService.login(credential);
    }

}
