import {BaseField} from "./BaseField";
import {FieldTypes} from "../FieldTypes";

export class EmailField extends BaseField {
    public type: string = FieldTypes.Email;

    constructor(label: string, name: string) {
        super(label, name);
    }
}