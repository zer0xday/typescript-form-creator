import {BaseField} from "./BaseField";
import {FieldTypes} from "../FieldTypes";

export class CheckboxField extends BaseField{
    public type: string = FieldTypes.Checkbox;
    public value: string = 'Nie';

    constructor(label: string, name: string) {
        super(label, name);
    }

    protected createInput(): HTMLElement {
        let el = document.createElement('input');
        el.type = this.getType();
        el.name = this.getName();
        el.value = this.getValue();
        el.checked = this.getValue() === 'Tak';

        return el;
    }
}