export class FieldLabel {
    protected label: string

    constructor(label: string) {
        this.label = label;
    }

    public render(): HTMLLabelElement {
        let el = document.createElement('label');
        el.innerHTML = this.label;

        return el;
    }
}