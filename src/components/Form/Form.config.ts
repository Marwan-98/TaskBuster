import { AllHTMLAttributes, DOMAttributes } from "react";

type FieldReactEvents<T> = Omit<DOMAttributes<T>, 'children' | 'dangerouslySetInnerHTML'>;

export type FormField = {
    type: string;
    attributes: AllHTMLAttributes<HTMLInputElement | HTMLSelectElement | HTMLButtonElement>,
    events?: FieldReactEvents<HTMLInputElement | HTMLSelectElement | HTMLButtonElement>,
    renderLabel?: boolean
}



export interface FormProps {
    fieldMap: FormField[],
    onSubmit: (arg: Record<string, string>) => void,
    formValues?: Record<string,string> | null,
    formTitle: string,
}
