import localVarRequest from 'request';

export * from './ballot';
export * from './ballotCreate';
export * from './ballotCreated';
export * from './ballotRead';
export * from './ballotjsonld';
export * from './ballotjsonldCreate';
export * from './ballotjsonldCreated';
export * from './ballotjsonldRead';
export * from './credentials';
export * from './gradeCreate';
export * from './gradeRead';
export * from './gradejsonldCreate';
export * from './gradejsonldRead';
export * from './inlineResponse200';
export * from './inlineResponse2001';
export * from './inlineResponse2002';
export * from './inlineResponse2003';
export * from './inlineResponse2004';
export * from './inlineResponse2005';
export * from './inlineResponse200HydraSearch';
export * from './inlineResponse200HydraSearchHydraMapping';
export * from './inlineResponse200HydraView';
export * from './invitationRead';
export * from './invitationjsonldRead';
export * from './pollCreate';
export * from './pollRead';
export * from './polljsonldCreate';
export * from './polljsonldRead';
export * from './proposalCreate';
export * from './proposalGradeResultRead';
export * from './proposalGradeResultjsonldRead';
export * from './proposalRead';
export * from './proposalResultRead';
export * from './proposalResultjsonldRead';
export * from './proposaljsonldCreate';
export * from './proposaljsonldRead';
export * from './resultRead';
export * from './resultjsonldRead';
export * from './token';
export * from './userCreate';
export * from './userEdit';
export * from './userRead';
export * from './userjsonldCreate';
export * from './userjsonldEdit';
export * from './userjsonldRead';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { Ballot } from './ballot';
import { BallotCreate } from './ballotCreate';
import { BallotCreated } from './ballotCreated';
import { BallotRead } from './ballotRead';
import { Ballotjsonld } from './ballotjsonld';
import { BallotjsonldCreate } from './ballotjsonldCreate';
import { BallotjsonldCreated } from './ballotjsonldCreated';
import { BallotjsonldRead } from './ballotjsonldRead';
import { Credentials } from './credentials';
import { GradeCreate } from './gradeCreate';
import { GradeRead } from './gradeRead';
import { GradejsonldCreate } from './gradejsonldCreate';
import { GradejsonldRead } from './gradejsonldRead';
import { InlineResponse200 } from './inlineResponse200';
import { InlineResponse2001 } from './inlineResponse2001';
import { InlineResponse2002 } from './inlineResponse2002';
import { InlineResponse2003 } from './inlineResponse2003';
import { InlineResponse2004 } from './inlineResponse2004';
import { InlineResponse2005 } from './inlineResponse2005';
import { InlineResponse200HydraSearch } from './inlineResponse200HydraSearch';
import { InlineResponse200HydraSearchHydraMapping } from './inlineResponse200HydraSearchHydraMapping';
import { InlineResponse200HydraView } from './inlineResponse200HydraView';
import { InvitationRead } from './invitationRead';
import { InvitationjsonldRead } from './invitationjsonldRead';
import { PollCreate } from './pollCreate';
import { PollRead } from './pollRead';
import { PolljsonldCreate } from './polljsonldCreate';
import { PolljsonldRead } from './polljsonldRead';
import { ProposalCreate } from './proposalCreate';
import { ProposalGradeResultRead } from './proposalGradeResultRead';
import { ProposalGradeResultjsonldRead } from './proposalGradeResultjsonldRead';
import { ProposalRead } from './proposalRead';
import { ProposalResultRead } from './proposalResultRead';
import { ProposalResultjsonldRead } from './proposalResultjsonldRead';
import { ProposaljsonldCreate } from './proposaljsonldCreate';
import { ProposaljsonldRead } from './proposaljsonldRead';
import { ResultRead } from './resultRead';
import { ResultjsonldRead } from './resultjsonldRead';
import { Token } from './token';
import { UserCreate } from './userCreate';
import { UserEdit } from './userEdit';
import { UserRead } from './userRead';
import { UserjsonldCreate } from './userjsonldCreate';
import { UserjsonldEdit } from './userjsonldEdit';
import { UserjsonldRead } from './userjsonldRead';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
}

let typeMap: {[index: string]: any} = {
    "Ballot": Ballot,
    "BallotCreate": BallotCreate,
    "BallotCreated": BallotCreated,
    "BallotRead": BallotRead,
    "Ballotjsonld": Ballotjsonld,
    "BallotjsonldCreate": BallotjsonldCreate,
    "BallotjsonldCreated": BallotjsonldCreated,
    "BallotjsonldRead": BallotjsonldRead,
    "Credentials": Credentials,
    "GradeCreate": GradeCreate,
    "GradeRead": GradeRead,
    "GradejsonldCreate": GradejsonldCreate,
    "GradejsonldRead": GradejsonldRead,
    "InlineResponse200": InlineResponse200,
    "InlineResponse2001": InlineResponse2001,
    "InlineResponse2002": InlineResponse2002,
    "InlineResponse2003": InlineResponse2003,
    "InlineResponse2004": InlineResponse2004,
    "InlineResponse2005": InlineResponse2005,
    "InlineResponse200HydraSearch": InlineResponse200HydraSearch,
    "InlineResponse200HydraSearchHydraMapping": InlineResponse200HydraSearchHydraMapping,
    "InlineResponse200HydraView": InlineResponse200HydraView,
    "InvitationRead": InvitationRead,
    "InvitationjsonldRead": InvitationjsonldRead,
    "PollCreate": PollCreate,
    "PollRead": PollRead,
    "PolljsonldCreate": PolljsonldCreate,
    "PolljsonldRead": PolljsonldRead,
    "ProposalCreate": ProposalCreate,
    "ProposalGradeResultRead": ProposalGradeResultRead,
    "ProposalGradeResultjsonldRead": ProposalGradeResultjsonldRead,
    "ProposalRead": ProposalRead,
    "ProposalResultRead": ProposalResultRead,
    "ProposalResultjsonldRead": ProposalResultjsonldRead,
    "ProposaljsonldCreate": ProposaljsonldCreate,
    "ProposaljsonldRead": ProposaljsonldRead,
    "ResultRead": ResultRead,
    "ResultjsonldRead": ResultjsonldRead,
    "Token": Token,
    "UserCreate": UserCreate,
    "UserEdit": UserEdit,
    "UserRead": UserRead,
    "UserjsonldCreate": UserjsonldCreate,
    "UserjsonldEdit": UserjsonldEdit,
    "UserjsonldRead": UserjsonldRead,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
