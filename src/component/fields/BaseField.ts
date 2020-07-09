import {FieldTypes} from "../FieldTypes";
import {IField} from "../../interface/IField";
import {FieldLabel} from "../FieldLabel";

export class BaseField implements IField {
    public name: string = '';
    public label: HTMLLabelElement;
    public type: string = FieldTypes.Text;
    public value: string = '';

    constructor(label: string, name: string) {
        this.label = new FieldLabel(label).render();
        this.name = name;
    }

    public render(): HTMLElement {
        return this.createField(this.createInput(), this.label);
    }

    protected createInput(): HTMLElement {
        let el = document.createElement('input');
        el.type = this.getType();
        el.name = this.getName();
        el.value = this.getValue();

        return el;
    }

    protected createField(input: HTMLElement, label: HTMLLabelElement): HTMLElement {
        let div = document.createElement('div');
        div.className = 'form-group';
        div.append(label);
        div.append(input);

        return div;
    }

    protected getType() {
        return this.type;
    }

    protected getValue() {
        return this.value;
    }

    protected getName() {
        return this.name;
    }
}