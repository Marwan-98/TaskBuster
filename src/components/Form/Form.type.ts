import { AllHTMLAttributes, DOMAttributes } from "react";

type FieldReactEvents<T> = Omit<DOMAttributes<T>, 'children' | 'dangerouslySetInnerHTML'>;

export type FormField = {
    type: string;
    attributes: AllHTMLAttributes<HTMLInputElement | HTMLSelectElement | HTMLButtonElement | HTMLTextAreaElement>,
    events?: FieldReactEvents<HTMLInputElement | HTMLSelectElement | HTMLButtonElement | HTMLTextAreaElement>,
    renderLabel?: boolean
    options?: string[]
}



export interface FormProps {
    fieldMap: FormField[],
    onSubmit: (arg: Record<string, string>) => void,
    formValues?: Record<string,string> | null,
    formTitle: string,
}
