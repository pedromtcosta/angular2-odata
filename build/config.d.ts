import { RequestOptions, Response } from '@angular/http';
import { PagedResult } from "./query";
export declare class KeyConfigs {
    Filter: string;
    Top: string;
    Skip: string;
    OrderBy: string;
}
export declare class ODataConfiguration {
    baseUrl: string;
    getEntityUri(entityKey: string, _typeName: string): string;
    Keys: KeyConfigs;
    handleError(err: any, caught: any): void;
    requestOptions: RequestOptions;
    postRequestOptions: RequestOptions;
    extractQueryResultData<T>(res: Response): T[];
    extractQueryResultDataWithCount<T>(res: Response): PagedResult<T>;
}
