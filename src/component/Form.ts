import {IField} from "../interface/IField";
import {InputField} from "./fields/InputField";
import {BaseField} from "./fields/BaseField";
import {EmailField} from "./fields/EmailField";
import {SelectField} from "./fields/SelectField";
import {CheckboxField} from "./fields/CheckboxField";
import {TextAreaField} from "./fields/TextAreaField";
import {FieldTypes} from "./FieldTypes";
import {LocStorage} from "./storage/LocStorage";

export class Form {
    protected formElement: HTMLFormElement;
    public fields: IField[] = [];
    public submitBtn: HTMLButtonElement;
    public saveBtn: HTMLButtonElement;
    public backBtn: HTMLElement;

    constructor() {
        this.formElement = this.createFormElement();
        this.submitBtn = this.createSubmitButton();
        this.saveBtn = this.createSaveDocumentButton();
        this.backBtn = this.createBackButton();
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

    protected setFieldData(fieldsArray: BaseField[], fieldsData: any = {}): void {
        fieldsArray.forEach((field: BaseField, index) => {
            if (Object.keys(fieldsData).length) {
                field.setValue(fieldsData[index]['value']);
            }

            this.fields.push(field);
        });
    }

    protected renderFieldData(): void {
        this.fields.forEach((field) => {
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

    public save(): void {
        const loc = new LocStorage();
        loc.saveDocument(this.fields);

        window.location.href = '/index.html';
    }

    public render(): HTMLElement {
        this.setFieldData(this.formFields());
        this.renderFieldData();

        this.formElement.append(this.submitBtn);
        this.formElement.append(this.saveBtn);
        this.formElement.append(this.backBtn);

        return this.formElement;
    }

    protected createSaveDocumentButton(): HTMLButtonElement {
        let btn = document.createElement('button');
        btn.id = 'saveDocument';
        btn.textContent = "Zapisz";
        btn.type = 'button';

        return btn;
    }

    protected createBackButton(): HTMLElement {
        let btn = document.createElement('a');
        btn.className = 'button';
        btn.id = 'backBtn';
        btn.textContent = "Wróć";
        btn.href = '/index.html';

        return btn;
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

    public saveListener(): void {
        this.saveBtn.addEventListener('click', () => {
            this.save();
        });
    }

    public fieldListener(): void {
        this.fields.forEach((field) => {
            let key =
                <HTMLInputElement>this.formElement
                    .querySelector(`[name=${field.name}]`);
            let f = <BaseField>field;
            let val = '';

            key.addEventListener('change', () => {
                switch(field.type) {
                    case FieldTypes.Select:
                        val = key.querySelector('option:checked').textContent;
                        break;

                    case FieldTypes.Checkbox:
                        val = key.checked ? 'Tak' : 'Nie';
                        break;

                    default:
                        val = key.value;
                }

                f.setValue(val);
                field.value = val;
            });
        })
    }
}