export type FormField = {
    name: string;
    type: string;
    id: string;
    required: boolean;
    attributes?: Record<string, string | number>
}