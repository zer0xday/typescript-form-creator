import {BaseField} from "./BaseField";
import {FieldTypes} from "../FieldTypes";

export class CheckboxField extends BaseField{
    public type: string = FieldTypes.Checkbox;
    public value: string = 'Nie';

    constructor(label: string, name: string) {
        super(label, name);
    }
}