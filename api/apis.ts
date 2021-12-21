export * from './administrationApi';
import { AdministrationApi } from './administrationApi';
export * from './ballotApi';
import { BallotApi } from './ballotApi';
export * from './gradeApi';
import { GradeApi } from './gradeApi';
export * from './invitationApi';
import { InvitationApi } from './invitationApi';
export * from './loginApi';
import { LoginApi } from './loginApi';
export * from './pollApi';
import { PollApi } from './pollApi';
export * from './proposalApi';
import { ProposalApi } from './proposalApi';
export * from './registrationApi';
import { RegistrationApi } from './registrationApi';
export * from './resultApi';
import { ResultApi } from './resultApi';
export * from './toolsApi';
import { ToolsApi } from './toolsApi';
export * from './userApi';
import { UserApi } from './userApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [AdministrationApi, BallotApi, GradeApi, InvitationApi, LoginApi, PollApi, ProposalApi, RegistrationApi, ResultApi, ToolsApi, UserApi];
