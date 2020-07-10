export interface IDataStorage {
    saveDocument(formData: any): string;
    loadDocument(documentId: string): object;
    getDocuments(): string[];
}