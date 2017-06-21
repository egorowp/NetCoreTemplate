import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { Phone } from "../models/phone";

@Injectable()
export class PhonesService {
    constructor(private http: Http) {
        console.log("PhoneService initialization ...");
    }

    getPhones() {
        return this.http.get("./phone")
            .map(res => res.json());
    }

    savePhone(phone: Phone) {
        return this.http.post("phone/save", phone );
    }

    deletePhone(phone: Phone) {
        return this.http.post("phone/delete", phone).map(
          res => res.json());
    }

}