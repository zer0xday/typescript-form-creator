import {IField} from "../interface/IField";
import {InputField} from "./fields/InputField";
import {BaseField} from "./fields/BaseField";
import {EmailField} from "./fields/EmailField";
import {SelectField} from "./fields/SelectField";
import {CheckboxField} from "./fields/CheckboxField";
import {TextAreaField} from "./fields/TextAreaField";
import {FieldTypes} from "./FieldTypes";

export class Form {
    protected formElement: HTMLFormElement;
    public fields: IField[] = [];
    public submitBtn: HTMLButtonElement;

    constructor() {
        this.formElement = this.createFormElement();
        this.submitBtn = this.createSubmitButton();
    }

    protected getDataContainer(): HTMLElement {
        const dataContainer = document.createElement('div');
        dataContainer.id = 'data-container';

        this.fields.forEach((field) => {
            let row = document.createElement('p');
            row.innerHTML = field.value;
            dataContainer.append(row);
        });

        return dataContainer;
    }

    protected setFieldData(fieldsArray: BaseField[]): void {
        fieldsArray.forEach((field: BaseField) => {
            this.fields.push(field);
            this.formElement.append(field.render());
        });
    }

    public getValue() {
        this.submitBtn.addEventListener('click', () => {
            document.body.append(this.getDataContainer());
        });
    }

    protected formFields(): BaseField[] {
        const optionFields = [
            'Informatyka',
            'Psychologia',
            'Zarządzanie',
            'Ekonometria'
        ];

        return [
            new InputField('Imię', 'name'),
            new InputField('Nazwisko', 'surname'),
            new EmailField('E-Mail', 'email'),
            new SelectField('Wybrany kierunek studiów', 'profession', optionFields),
            new CheckboxField('Czy preferujesz e-learning?', 'elearning'),
            new TextAreaField('Uwagi', 'desc'),
        ];
    }

    public render(): HTMLElement {
        this.setFieldData(this.formFields());
        this.formElement.append(this.submitBtn);

        return this.formElement;
    }

    protected createSubmitButton(): HTMLButtonElement {
        let btn = document.createElement('button');
        btn.id = 'submit';
        btn.textContent = 'Pobierz wyniki';
        btn.type = 'button';

        return btn;
    }

    protected createFormElement(): HTMLFormElement {
        return document.createElement('form');
    }

    public fieldListener() {
        this.fields.forEach((field) => {
            let key = <HTMLInputElement>this.formElement.querySelector(`[name=${field.name}]`);
            key.addEventListener('change', () => {
                switch(field.type) {
                    case FieldTypes.Select:
                        field.value = key.querySelector('option:checked').textContent;
                        break;

                    case FieldTypes.Checkbox:
                        field.value = key.checked ? 'Tak' : 'Nie';
                        break;

                    default:
                        field.value = key.value;
                }
            });
        })
    }
}