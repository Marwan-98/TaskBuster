import { FormField } from "../Form/Form.type";
import { ProjectType } from "../Project/Project.type";

export const updateTaskModalFieldMap = (events: Record<string, () => void>, projectList: ProjectType[]): FormField[] => {
    const { handleDelete } = events;

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
            options: ['inbox', ...projectList.map(({ name }) => name)]
        },
        {
            type: 'select',
            attributes: {
                name: 'Select Priority',
                placeholder: 'Select Priority',
                'aria-label': 'Select Priority',
                id: 'priority',
                required: true,
            },
            options: ['Low', 'Medium', 'High', 'Critical']
        },
        {
            type: 'submit',
            attributes: {
                name: 'Update Task',
                value: 'Update',
                'aria-label': 'Update Task',
                id: 'update',
            },
            renderLabel: false
        },
        {
            type: 'button',
            attributes: {
                name: 'Delete Task',
                value: 'Delete',
                'aria-label': 'Delete Task',
                id: 'delete',
            },
            events: {
                onClick: handleDelete
            },
            renderLabel: false
        }
    ]
};
