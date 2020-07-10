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

    public getDocuments(): string[] {
        return Object.keys(this.data);
    }

    public loadDocument(documentId: string): any {
        return this.data[documentId];
    }

    public saveDocument(formData: any): string {
        const id = this.generateUid();
        this.data[id] = formData;
        localStorage[this.FILES_KEY] = JSON.stringify(this.data);

        return id;
    }

    protected generateUid(): string {
        return Date.now().toString();
    }
}