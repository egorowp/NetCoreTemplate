﻿/* tslint:disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v11.3.3.0 (NJsonSchema v9.4.2.0) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';

import { Observable } from 'rxjs/Observable';
import { Injectable, Inject, Optional, OpaqueToken } from '@angular/core';
import { Http, Headers, ResponseContentType, Response } from '@angular/http';

export const API_BASE_URL = new OpaqueToken('API_BASE_URL');

@Injectable()
export class AddressesService {
    private http: Http;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(Http) http: Http, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "http://localhost:60351";
    }

    getAll(): Observable<AddressGridViewModel[] | null> {
        let url_ = this.baseUrl + "/api/Addresses/GetAll";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = {
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_) => {
            return this.processGetAll(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetAll(response_);
                } catch (e) {
                    return <Observable<AddressGridViewModel[]>><any>Observable.throw(e);
                }
            } else
                return <Observable<AddressGridViewModel[]>><any>Observable.throw(response_);
        });
    }

    protected processGetAll(response: Response): Observable<AddressGridViewModel[] | null> {
        const status = response.status; 

        if (status === 200) {
            const _responseText = response.text();
            let result200: AddressGridViewModel[] | null = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (resultData200 && resultData200.constructor === Array) {
                result200 = [];
                for (let item of resultData200)
                    result200.push(AddressGridViewModel.fromJS(item));
            }
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText);
        }
        return Observable.of<AddressGridViewModel[] | null>(<any>null);
    }

    get(parameters: IdParams | undefined): Observable<AddressViewModel | null> {
        let url_ = this.baseUrl + "/api/Addresses/Get";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(parameters);
        
        let options_ = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_) => {
            return this.processGet(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGet(response_);
                } catch (e) {
                    return <Observable<AddressViewModel>><any>Observable.throw(e);
                }
            } else
                return <Observable<AddressViewModel>><any>Observable.throw(response_);
        });
    }

    protected processGet(response: Response): Observable<AddressViewModel | null> {
        const status = response.status; 

        if (status === 200) {
            const _responseText = response.text();
            let result200: AddressViewModel | null = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? AddressViewModel.fromJS(resultData200) : <any>null;
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText);
        }
        return Observable.of<AddressViewModel | null>(<any>null);
    }

    save(parameters: SaveAddressParams | undefined): Observable<AddressViewModel | null> {
        let url_ = this.baseUrl + "/api/Addresses/Save";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(parameters);
        
        let options_ = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_) => {
            return this.processSave(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processSave(response_);
                } catch (e) {
                    return <Observable<AddressViewModel>><any>Observable.throw(e);
                }
            } else
                return <Observable<AddressViewModel>><any>Observable.throw(response_);
        });
    }

    protected processSave(response: Response): Observable<AddressViewModel | null> {
        const status = response.status; 

        if (status === 200) {
            const _responseText = response.text();
            let result200: AddressViewModel | null = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? AddressViewModel.fromJS(resultData200) : <any>null;
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText);
        }
        return Observable.of<AddressViewModel | null>(<any>null);
    }

    delete(parameters: IdParams | undefined): Observable<boolean | null> {
        let url_ = this.baseUrl + "/api/Addresses/Delete";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(parameters);
        
        let options_ = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_) => {
            return this.processDelete(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processDelete(response_);
                } catch (e) {
                    return <Observable<boolean>><any>Observable.throw(e);
                }
            } else
                return <Observable<boolean>><any>Observable.throw(response_);
        });
    }

    protected processDelete(response: Response): Observable<boolean | null> {
        const status = response.status; 

        if (status === 200) {
            const _responseText = response.text();
            let result200: boolean | null = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 !== undefined ? resultData200 : <any>null;
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText);
        }
        return Observable.of<boolean | null>(<any>null);
    }
}

@Injectable()
export class PhonesService {
    private http: Http;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(Http) http: Http, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "http://localhost:60351";
    }

    getAll(): Observable<PhoneViewModel[] | null> {
        let url_ = this.baseUrl + "/api/Phones/GetAll";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = {
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_) => {
            return this.processGetAll(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetAll(response_);
                } catch (e) {
                    return <Observable<PhoneViewModel[]>><any>Observable.throw(e);
                }
            } else
                return <Observable<PhoneViewModel[]>><any>Observable.throw(response_);
        });
    }

    protected processGetAll(response: Response): Observable<PhoneViewModel[] | null> {
        const status = response.status; 

        if (status === 200) {
            const _responseText = response.text();
            let result200: PhoneViewModel[] | null = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (resultData200 && resultData200.constructor === Array) {
                result200 = [];
                for (let item of resultData200)
                    result200.push(PhoneViewModel.fromJS(item));
            }
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText);
        }
        return Observable.of<PhoneViewModel[] | null>(<any>null);
    }

    get(parameters: IdParams | undefined): Observable<PhoneViewModel | null> {
        let url_ = this.baseUrl + "/api/Phones/Get";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(parameters);
        
        let options_ = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_) => {
            return this.processGet(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGet(response_);
                } catch (e) {
                    return <Observable<PhoneViewModel>><any>Observable.throw(e);
                }
            } else
                return <Observable<PhoneViewModel>><any>Observable.throw(response_);
        });
    }

    protected processGet(response: Response): Observable<PhoneViewModel | null> {
        const status = response.status; 

        if (status === 200) {
            const _responseText = response.text();
            let result200: PhoneViewModel | null = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? PhoneViewModel.fromJS(resultData200) : <any>null;
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText);
        }
        return Observable.of<PhoneViewModel | null>(<any>null);
    }

    save(parameters: SavePhoneParams | undefined): Observable<PhoneViewModel | null> {
        let url_ = this.baseUrl + "/api/Phones/Save";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(parameters);
        
        let options_ = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_) => {
            return this.processSave(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processSave(response_);
                } catch (e) {
                    return <Observable<PhoneViewModel>><any>Observable.throw(e);
                }
            } else
                return <Observable<PhoneViewModel>><any>Observable.throw(response_);
        });
    }

    protected processSave(response: Response): Observable<PhoneViewModel | null> {
        const status = response.status; 

        if (status === 200) {
            const _responseText = response.text();
            let result200: PhoneViewModel | null = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? PhoneViewModel.fromJS(resultData200) : <any>null;
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText);
        }
        return Observable.of<PhoneViewModel | null>(<any>null);
    }

    delete(parameters: IdParams | undefined): Observable<boolean | null> {
        let url_ = this.baseUrl + "/api/Phones/Delete";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(parameters);
        
        let options_ = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_) => {
            return this.processDelete(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processDelete(response_);
                } catch (e) {
                    return <Observable<boolean>><any>Observable.throw(e);
                }
            } else
                return <Observable<boolean>><any>Observable.throw(response_);
        });
    }

    protected processDelete(response: Response): Observable<boolean | null> {
        const status = response.status; 

        if (status === 200) {
            const _responseText = response.text();
            let result200: boolean | null = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 !== undefined ? resultData200 : <any>null;
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText);
        }
        return Observable.of<boolean | null>(<any>null);
    }
}

export class Serializable implements ISerializable {

    constructor(data?: ISerializable) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
        }
    }

    static fromJS(data: any): Serializable {
        let result = new Serializable();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        return data; 
    }
}

export interface ISerializable {
}

export class AddressGridViewModel extends Serializable implements IAddressGridViewModel {
    modifyDate: Date;
    postalCode?: string | undefined;
    addressLine?: string | undefined;
    id: string;
    country?: string | undefined;
    city?: string | undefined;
    state?: string | undefined;

    constructor(data?: IAddressGridViewModel) {
        super(data);
    }

    init(data?: any) {
        super.init(data);
        if (data) {
            this.modifyDate = data["modifyDate"] ? new Date(data["modifyDate"].toString()) : <any>undefined;
            this.postalCode = data["postalCode"];
            this.addressLine = data["addressLine"];
            this.id = data["id"];
            this.country = data["country"];
            this.city = data["city"];
            this.state = data["state"];
        }
    }

    static fromJS(data: any): AddressGridViewModel {
        let result = new AddressGridViewModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["modifyDate"] = this.modifyDate ? this.modifyDate.toISOString() : <any>undefined;
        data["postalCode"] = this.postalCode;
        data["addressLine"] = this.addressLine;
        data["id"] = this.id;
        data["country"] = this.country;
        data["city"] = this.city;
        data["state"] = this.state;
        super.toJSON(data);
        return data; 
    }
}

export interface IAddressGridViewModel extends ISerializable {
    modifyDate: Date;
    postalCode?: string | undefined;
    addressLine?: string | undefined;
    id: string;
    country?: string | undefined;
    city?: string | undefined;
    state?: string | undefined;
}

export class IdParams extends Serializable implements IIdParams {
    id: string;

    constructor(data?: IIdParams) {
        super(data);
    }

    init(data?: any) {
        super.init(data);
        if (data) {
            this.id = data["id"];
        }
    }

    static fromJS(data: any): IdParams {
        let result = new IdParams();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        super.toJSON(data);
        return data; 
    }
}

export interface IIdParams extends ISerializable {
    id: string;
}

export class AddressViewModel extends Serializable implements IAddressViewModel {
    selectedPhoneIds?: string[] | undefined;
    postalCode?: string | undefined;
    addressLine?: string | undefined;
    id: string;
    country?: string | undefined;
    city?: string | undefined;
    state?: string | undefined;
    phones?: PhoneLookupViewModel[] | undefined;

    constructor(data?: IAddressViewModel) {
        super(data);
    }

    init(data?: any) {
        super.init(data);
        if (data) {
            if (data["selectedPhoneIds"] && data["selectedPhoneIds"].constructor === Array) {
                this.selectedPhoneIds = [];
                for (let item of data["selectedPhoneIds"])
                    this.selectedPhoneIds.push(item);
            }
            this.postalCode = data["postalCode"];
            this.addressLine = data["addressLine"];
            this.id = data["id"];
            this.country = data["country"];
            this.city = data["city"];
            this.state = data["state"];
            if (data["phones"] && data["phones"].constructor === Array) {
                this.phones = [];
                for (let item of data["phones"])
                    this.phones.push(PhoneLookupViewModel.fromJS(item));
            }
        }
    }

    static fromJS(data: any): AddressViewModel {
        let result = new AddressViewModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (this.selectedPhoneIds && this.selectedPhoneIds.constructor === Array) {
            data["selectedPhoneIds"] = [];
            for (let item of this.selectedPhoneIds)
                data["selectedPhoneIds"].push(item);
        }
        data["postalCode"] = this.postalCode;
        data["addressLine"] = this.addressLine;
        data["id"] = this.id;
        data["country"] = this.country;
        data["city"] = this.city;
        data["state"] = this.state;
        if (this.phones && this.phones.constructor === Array) {
            data["phones"] = [];
            for (let item of this.phones)
                data["phones"].push(item.toJSON());
        }
        super.toJSON(data);
        return data; 
    }
}

export interface IAddressViewModel extends ISerializable {
    selectedPhoneIds?: string[] | undefined;
    postalCode?: string | undefined;
    addressLine?: string | undefined;
    id: string;
    country?: string | undefined;
    city?: string | undefined;
    state?: string | undefined;
    phones?: PhoneLookupViewModel[] | undefined;
}

export class PhoneLookupViewModel implements IPhoneLookupViewModel {
    id: string;
    name?: string | undefined;

    constructor(data?: IPhoneLookupViewModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.id = data["id"];
            this.name = data["name"];
        }
    }

    static fromJS(data: any): PhoneLookupViewModel {
        let result = new PhoneLookupViewModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        return data; 
    }
}

export interface IPhoneLookupViewModel {
    id: string;
    name?: string | undefined;
}

export class SaveAddressParams extends Serializable implements ISaveAddressParams {
    phoneIds?: string[] | undefined;
    postalCode?: string | undefined;
    addressLine?: string | undefined;
    id: string;
    country?: string | undefined;
    city?: string | undefined;
    state?: string | undefined;

    constructor(data?: ISaveAddressParams) {
        super(data);
    }

    init(data?: any) {
        super.init(data);
        if (data) {
            if (data["phoneIds"] && data["phoneIds"].constructor === Array) {
                this.phoneIds = [];
                for (let item of data["phoneIds"])
                    this.phoneIds.push(item);
            }
            this.postalCode = data["postalCode"];
            this.addressLine = data["addressLine"];
            this.id = data["id"];
            this.country = data["country"];
            this.city = data["city"];
            this.state = data["state"];
        }
    }

    static fromJS(data: any): SaveAddressParams {
        let result = new SaveAddressParams();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (this.phoneIds && this.phoneIds.constructor === Array) {
            data["phoneIds"] = [];
            for (let item of this.phoneIds)
                data["phoneIds"].push(item);
        }
        data["postalCode"] = this.postalCode;
        data["addressLine"] = this.addressLine;
        data["id"] = this.id;
        data["country"] = this.country;
        data["city"] = this.city;
        data["state"] = this.state;
        super.toJSON(data);
        return data; 
    }
}

export interface ISaveAddressParams extends ISerializable {
    phoneIds?: string[] | undefined;
    postalCode?: string | undefined;
    addressLine?: string | undefined;
    id: string;
    country?: string | undefined;
    city?: string | undefined;
    state?: string | undefined;
}

export class PhoneViewModel extends Serializable implements IPhoneViewModel {
    id: string;
    company?: string | undefined;
    name?: string | undefined;
    price: number;

    constructor(data?: IPhoneViewModel) {
        super(data);
    }

    init(data?: any) {
        super.init(data);
        if (data) {
            this.id = data["id"];
            this.company = data["company"];
            this.name = data["name"];
            this.price = data["price"];
        }
    }

    static fromJS(data: any): PhoneViewModel {
        let result = new PhoneViewModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["company"] = this.company;
        data["name"] = this.name;
        data["price"] = this.price;
        super.toJSON(data);
        return data; 
    }
}

export interface IPhoneViewModel extends ISerializable {
    id: string;
    company?: string | undefined;
    name?: string | undefined;
    price: number;
}

export class SavePhoneParams extends Serializable implements ISavePhoneParams {
    id: string;
    name?: string | undefined;
    company?: string | undefined;
    price: number;

    constructor(data?: ISavePhoneParams) {
        super(data);
    }

    init(data?: any) {
        super.init(data);
        if (data) {
            this.id = data["id"];
            this.name = data["name"];
            this.company = data["company"];
            this.price = data["price"];
        }
    }

    static fromJS(data: any): SavePhoneParams {
        let result = new SavePhoneParams();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        data["company"] = this.company;
        data["price"] = this.price;
        super.toJSON(data);
        return data; 
    }
}

export interface ISavePhoneParams extends ISerializable {
    id: string;
    name?: string | undefined;
    company?: string | undefined;
    price: number;
}

export class SwaggerException extends Error {
    message: string;
    status: number; 
    response: string; 
    result: any; 

    constructor(message: string, status: number, response: string, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.result = result;
    }
}

function throwException(message: string, status: number, response: string, result?: any): Observable<any> {
    if(result !== null && result !== undefined)
        return Observable.throw(result);
    else
        return Observable.throw(new SwaggerException(message, status, response, null));
}

function blobToText(blob: any): Observable<string> {
    return new Observable<string>((observer: any) => { 
        let reader = new FileReader(); 
        reader.onload = function() { 
            observer.next(this.result);
            observer.complete();
        }
        reader.readAsText(blob); 
    });
}