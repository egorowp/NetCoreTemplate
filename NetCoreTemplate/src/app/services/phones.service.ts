import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, Response } from "@angular/http";
import "rxjs/add/operator/map";
import { Phone } from "../models/phone";

@Injectable()
export class PhonesService {
    constructor(private http: Http) {
        console.log("PhoneService initialization ...");
    }

    getUsers() {
        return this.http.get("./Admin")
            .map(res => res.json());
    }
    saveUser(phone: Phone) {
        return this.http.post("Admin", phone );
    }
    deleteUser(phone: Phone) {
      return this.http.delete("Admin", phone);
    }

}