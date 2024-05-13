import { API_DOCUMENT } from '../api.document';
import { BaseCoreService } from '../base/base.service';
import { IUser } from './models/user.model';

export class UserService extends BaseCoreService {
    constructor() {
        super();
    }

    public async getUsers(): Promise<IUser[]> {
        return (await this.requestApiWithAuth(API_DOCUMENT.user.getList, {})) as any;
    }
}
