import { Form} from "./component/Form";

export class App {
    protected renderForm(form: Form): void {
        document.body.append(form.render());
    }

    public init(): void {
        const form = new Form();

        this.renderForm(form);
        form.fieldListener();

        form.getValue();
    }
}
