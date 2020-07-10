import {LocStorage} from "./storage/LocStorage";

export class DocumentList {
    private documentsList: string[];

    public getDocumentList(): string[] {
        this.documentsList = new LocStorage().getDocuments();

        return this.documentsList;
    }

    protected removeDocumentRow(id: string): void {
        const button = document.getElementById(id);
        const row = button.closest('td');

        row.remove();
    }

    protected removeDocumentFromStorage(id: string): void {
        const loc = new LocStorage();
        loc.removeDocument(id);
    }

    public removeDocument(id: string): void {
        this.removeDocumentRow(id);
        this.removeDocumentFromStorage(id)
    }

    public getDocument(id: string): any {
        const loc = new LocStorage();

        return loc.loadDocument(id);
    }

    protected renderDocumentTableHeader(table: HTMLTableElement): void {
        table.append(this.createRow());
        table.append(this.createHeader('Document ID'));
    }

    protected renderDocumentList(table: HTMLTableElement): void {
        this.getDocumentList().forEach((documentId) => {
            table.append(this.createRow());
            table.append(this.createCell(documentId));
        });
    }

    render(): HTMLElement {
        const table = this.createTable();

        this.renderDocumentTableHeader(table);
        this.renderDocumentList(table);

        return table;
    }

    protected createRemoveButton(id: string): HTMLButtonElement {
        const btn = document.createElement('button');
        btn.type = 'submit';
        btn.textContent = "Usuń"
        btn.className = 'remove-single-document';
        btn.id = id;

        return btn;
    }

    protected createTable(): HTMLTableElement {
        const table = document.createElement('table');
        table.className = 'document-list-table';

        return table;
    }

    protected createRow(): HTMLTableRowElement {
        return document.createElement('tr');
    }

    protected createHeader(title: string): HTMLTableHeaderCellElement {
        let th = document.createElement('th');
        th.innerHTML = title;

        return th;
    }

    protected createCell(data: string): HTMLTableDataCellElement {
        let td = document.createElement('td');

        td.append(this.createLink(data));
        td.append(this.createRemoveButton(data));

        return td;
    }

    protected createLink(documentId: string) {
        let a = document.createElement('a');
        a.href = `/edit-document.html?id=${documentId}`;
        a.innerHTML = documentId;
        a.className = 'document-link'

        return a;
    }

    public removeDocumentListener(): void {
        const removeButtons = document.querySelectorAll('button.remove-single-document');

        removeButtons.forEach((button) => {
            button.addEventListener('click', () => {
                this.removeDocument(button.id);
            });
        });
    }
}