import { Form } from "./component/Form";
import {DocumentList} from "./component/DocumentList";
import {Router} from "./component/Router";
import {FormCreator} from "./component/FormCreator";

export class App {
    protected renderForm(form: Form): void {
        document.body.append(form.render());
    }

    protected renderDocumentsList(doc: DocumentList): void {
        document.body.append(doc.render());
    }

    protected renderEditDocument(formCreator: FormCreator) {
        document.body.append(formCreator.newForm());
    }

    protected renderEditDocumentView(): void {
        const docId = Router.getParam('id');
        const docList = new DocumentList();
        const formCreator = new FormCreator(
            docId,
            docList.getDocument(docId)
        );

        this.renderEditDocument(formCreator);

        formCreator.fieldListener();
        formCreator.editButtonListener();
    }

    protected renderFormView(): void {
        const form = new Form();

        this.renderForm(form);

        form.fieldListener();
        form.saveListener();
        form.getValue();
    }

    protected renderDocumentListView(): void {
        const docs = new DocumentList();

        this.renderDocumentsList(docs);

        docs.removeDocumentListener();
    }

    public init(): void {
        switch(window.location.pathname) {
            case '/document-list.html':
                this.renderDocumentListView();
                break;

            case '/new-document.html':
                this.renderFormView();
                break;

            case '/edit-document.html':
                this.renderEditDocumentView();
                break;
        }
    }
}
