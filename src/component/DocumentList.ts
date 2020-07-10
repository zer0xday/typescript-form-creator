import {LocStorage} from "./storage/LocStorage";

export class DocumentList {
    private documentsList: string[];

    public getDocumentList(): string[] {
        this.documentsList = new LocStorage().getDocuments();

        return this.documentsList;
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

    protected createTable(): HTMLTableElement {
        return document.createElement('table');
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
        td.innerHTML = data;

        return td;
    }
}