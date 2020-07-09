export interface IField {
    name: string;
    label: HTMLLabelElement;
    type: string;
    value: string;
    render(): HTMLElement;
}