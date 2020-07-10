import {IDataStorage} from "../../interface/IDataStorage";

export class LocStorage implements IDataStorage {
    private readonly data: any;
    private readonly FILES_KEY: string = 'documents';

    constructor() {
        this.data = this.getDataFromStorage();
    }

    private getDataFromStorage(): any {
        return localStorage[this.FILES_KEY]
            ? JSON.parse(localStorage[this.FILES_KEY])
            : {};
    }

    private setDataToStorage(data: any): void {
        localStorage[this.FILES_KEY] = JSON.stringify(data);
    }

    public updateDocument(id: string, data: any): void {
        this.data[id] = data;

        this.setDataToStorage(this.data);
    }

    public getDocuments(): string[] {
        return Object.keys(this.data);
    }

    public loadDocument(documentId: string): any {
        return this.data[documentId];
    }

    public saveDocument(formData: any): string {
        const id = this.generateUid();
        this.data[id] = formData;
        this.setDataToStorage(this.data);

        return id;
    }

    public removeDocument(id: string): void {
        const data = this.getDataFromStorage();
        delete data[id];

        this.setDataToStorage(data);
    }

    protected generateUid(): string {
        return Date.now().toString();
    }
}