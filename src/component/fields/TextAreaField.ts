import { FieldTypes } from "../FieldTypes";
import {BaseField} from "./BaseField";

export class TextAreaField extends BaseField {
    public type: string = FieldTypes.Textarea;
    protected height: string = '';

    constructor(label: string, name: string, height: string = "150px") {
        super(label, name);
        this.height = height;
    }

    public createInput(): HTMLElement {
        let el = <HTMLInputElement>document.createElement(this.getType());
        el.name = this.getName();
        el.style.height = this.height;
        el.innerText = this.value;

        return el;
    }
}