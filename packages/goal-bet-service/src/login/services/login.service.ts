import { BadRequestException, Injectable } from '@nestjs/common';
import { CredentialDto } from 'src/login/dtos/Credential.dto';
import { UserRepository } from 'src/users/repositories/User.repository';
import { TransactionsService } from '../../transactions/services/transactions.service';
import { User } from 'src/users/entities/User';
import { GetWalletDto } from 'src/transactions/dtos/GetWallet.dto';

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
