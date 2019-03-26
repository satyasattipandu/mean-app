export class Patient {
    firstname: string;
    lastname: string;
    phone: number;
    address: string;
    consultedBy: string;
    age: number;
    gender: string;
    consulted: boolean;
    created_at: Date;
    complaints:string;
    Results: string;
    Prescriptions:string;
    constructor(values: Object = {}) {
        Object.assign(this, values);
      }

}