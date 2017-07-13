import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { Phone } from "../models/phone";
import { Entity } from "../models/entity";

@Injectable()
export class PhoneService {

    //private extractData(res: Response) {
    //    let body = res.json();
    //    return body || {};
    //}
    //private handleErrorObservable(error: Response | any) {
    //    console.error(error.message || error);
    //    return Observable.throw(error.message || error);
    //}
    //private handleErrorPromise(error: Response | any) {
    //    console.error(error.message || error);
    //    return Promise.reject(error.message || error);
    //}

    constructor(private http: Http) {
        console.log("PhoneService initialization ...");
    }

    getPhones() {
        return this.http.post("api/phones/index", "")
            .map(res => res.json());
    }

    getPhone(id:string) {
        return this.http.post("api/phones/get", new Entity(id))
            .map(res => res.json());
    }

    savePhone(phone: Phone) {
        return this.http.post("api/phones/save", phone)
            .map(res => res.json());
    }

    deletePhone(phone: Phone) {
        return this.http.post("api/phones/delete", phone)
            .map(res => res.json());
    }
}