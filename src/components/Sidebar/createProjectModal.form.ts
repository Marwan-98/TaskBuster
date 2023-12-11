import { FormField } from "../Form/Form.type";

export const createProjectModalFieldMap = (): FormField[] => {

    return [
        {
            type: 'text',
            attributes: {
                name: 'Title',
                placeholder: 'Title',
                'aria-label': 'Title',
                autoComplete: 'title',
                id: 'title',
                maxLength: 120,
                required: true,
            }
        },
        {
            type: 'submit',
            attributes: {
                name: 'Submit',
                value: 'Submit',
                placeholder: 'Submit',
                'aria-label': 'Submit',
                id: 'submit',
                style: {
                    width: 'fit-content'
                }
            },
            renderLabel: false
        }
    ]
};
