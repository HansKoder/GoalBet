import { BadRequestException, Injectable } from '@nestjs/common';
import { CredentialDto } from 'src/dtos/Credential.dto';
import { UserRepository } from 'src/repositories/User.repository';
import { TransactionsService } from '../transactions/transactions.service';
import { User } from 'src/entities/User';
import { GetWalletDto } from 'src/dtos/GetWallet.dto';

@Injectable()
export class LoginService {

    private repository : UserRepository = UserRepository.getInstance();

    constructor (private transactionService: TransactionsService) {}

    login(credential: CredentialDto) {
        const user = this.repository.getUserPerCredential(credential);

        if (!user) {
            const err = `Credentials ${credential.email} and ${credential.password} is Invalid `;
            throw new BadRequestException(err);
        }

        const wallet = this.transactionService.getWalletByUserId(user.uuid);

        return this.mapToUserResponse(user, wallet);
    }

    private mapToUserResponse (userEntity: User, walletDto: GetWalletDto): LoginResponseDto {
        return {
            wallet: walletDto.wallet,
            ...userEntity
        }
    }

}
