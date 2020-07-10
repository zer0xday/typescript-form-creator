import {BaseField} from "./BaseField";
import {FieldTypes} from "../FieldTypes";

export class SelectField extends BaseField {
    public type: string = FieldTypes.Select;
    public options: string[] = [];

    constructor(label: string, name: string, options: string[] = ['Brak']) {
        super(label, name);
        this.options = options;
        this.value = this.options[0];
    }

    setOptions(select: HTMLElement) {
        this.options.forEach((option: string, index: number) => {
            let opt = document.createElement('option');
            opt.value = index.toString();
            opt.text = option;
            opt.selected = opt.text === this.value;

            select.append(opt);
        });
    }

    public createInput(): HTMLElement {
        let el = <HTMLInputElement>document.createElement(this.getType());
        el.name = this.getName();

        this.setOptions(el);

        return el;
    }
}