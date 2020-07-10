import {LocStorage} from "./storage/LocStorage";

export class DocumentList {
    private documentsList: string[];

    public getDocumentList(): string[] {
        this.documentsList = new LocStorage().getDocuments();

        return this.documentsList;
    }

    render(): HTMLElement {
        const table = this.createTable();
        const headerRow = this.createRow();
        const header = this.createHeader('Document ID');
        const cellRow = this.createRow();

        table.append(headerRow);
        table.append(header);
        table.append(cellRow);

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