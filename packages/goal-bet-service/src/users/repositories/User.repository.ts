import { CredentialDto } from "src/login/dtos/Credential.dto";
import { User } from "src/users/entities/User"

export class UserRepository {

    private users: User[] = [];
    
    private constructor () {}

    private static INSTANCE: UserRepository;

    static getInstance () {
        if (this.INSTANCE == null) 
            this.INSTANCE = new UserRepository();

        return this.INSTANCE;
    }

    save(entity: User) {
        return this.users.push(entity);
    }

    getUserPerUUID(uuid: string) {
        return this.users.find(item => item.uuid == uuid)
    }

    getUserPerCredential(credential: CredentialDto) {
        console.log(`${JSON.stringify(credential)}`)
        return this.users.find(item =>
            item.email == credential.email && item.password == credential.password);
    }

}