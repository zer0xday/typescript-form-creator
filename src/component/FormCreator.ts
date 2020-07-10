import {Form} from "./Form";
import {LocStorage} from "./storage/LocStorage";

export class FormCreator extends Form {
    public editBtn: HTMLButtonElement;
    private readonly docId: string;
    private readonly data: any = {};

    constructor(id: string, data: any) {
        super();
        this.editBtn = this.createEditButton();
        this.docId = id;
        this.data = data;
    }

    protected createEditButton(): HTMLButtonElement {
        let btn = document.createElement('button');
        btn.id = 'edit-document';
        btn.innerText = 'Zapisz edycję';
        btn.type = 'button';

        return btn;
    }

    public editButtonListener(): void {
        this.editBtn.addEventListener('click', () => {
            let loc = new LocStorage();

            loc.updateDocument(this.docId, this.fields);
        });
    }

    public newForm(): HTMLElement {
        this.setFieldData(this.formFields(), this.data);
        this.renderFieldData();

        this.formElement.append(this.editBtn);
        this.formElement.append(this.backBtn);

        return this.formElement;
    }
}