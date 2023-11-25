export const updateTaskModalFieldMap = (events: Record<string, () => void>) => {
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
            type: 'text',
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
            type: 'submit',
            attributes: {
                name: 'Update Task',
                value: 'Update Task',
                placeholder: 'Update Task',
                'aria-label': 'Update Task',
                id: 'update',
            },
            renderLabel: false
        },
        {
            type: 'button',
            attributes: {
                name: 'Delete Task',
                value: 'Delete Task',
                placeholder: 'Delete Task',
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
