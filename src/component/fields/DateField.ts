import {BaseField} from "./BaseField";
import {FieldTypes} from "../FieldTypes";

export class DateField extends BaseField {
    public type: string = FieldTypes.Date;

    constructor(label: string, name: string) {
        super(label, name);
    }
}