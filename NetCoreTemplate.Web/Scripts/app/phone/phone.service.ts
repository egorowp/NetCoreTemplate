import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Phone } from '../models/phone';
import { Entity } from '../models/entity';

@Injectable()
export class PhoneService {
    constructor(private http: Http) {
        console.log('PhoneService initialization ...');
    }

    getPhones() {
        return this.http.post('api/phones/index', '')
            .map(res => res.json());
    }

    getPhone(id:string) {
        return this.http.post('api/phones/get', new Entity(id))
            .map(res => res.json());
    }

    savePhone(phone: Phone) {
        return this.http.post('api/phones/save', phone)
            .map(res => res.json());
    }

    deletePhone(phone: Phone) {
        return this.http.post('api/phones/delete', phone)
            .map(res => res.json());
    }
}