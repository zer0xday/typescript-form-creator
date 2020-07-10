import { Form } from "./component/Form";

export class App {
    protected renderForm(form: Form): void {
        document.body.append(form.render());
    }

    protected renderFormView() {
        const form = new Form();

        this.renderForm(form);
        form.fieldListener();
        form.saveListener();

        form.getValue();
    }

    protected renderDocumentListView() {

    }

    public init(): void {
        switch(window.location.pathname) {
            case '/document-list.html':
                break;

            case '/new-document.html':
                this.renderFormView();
                break;
        }
    }
}
