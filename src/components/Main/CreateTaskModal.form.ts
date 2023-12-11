import { FormField } from "../Form/Form.type";

export const createTaskModalFieldMap = ({ projectList }: { projectList: string[] }): FormField[] => {
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
            type: 'text-area',
            attributes: {
                name: 'Description',
                placeholder: 'Description',
                'aria-label': 'Description',
                autoComplete: 'description',
                id: 'description',
                required: true,
            }
        },
        {
            type: 'datetime-local',
            attributes: {
                name: 'Due Date',
                placeholder: 'Due Date',
                'aria-label': 'Due Date',
                id: 'dueDate',
                required: true,
            }
        },
        {
            type: 'select',
            attributes: {
                name: 'Select Project',
                placeholder: 'Select Project',
                'aria-label': 'Select Project',
                id: 'project',
                required: true,
            },
            options: ['inbox', ...projectList]
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
                    width: '150px'
                }
            },
            renderLabel: false
        }
    ]
};
