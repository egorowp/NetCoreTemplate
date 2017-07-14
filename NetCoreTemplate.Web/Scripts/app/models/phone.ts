export class Phone {
    constructor(
        public Id: string,
        public Company: string,
        public Name: string,
        public Price: number
    ) { }
}

export interface IPhone {
    Id: string;
    Company: string;
    Name: string;
    Price: number;
}