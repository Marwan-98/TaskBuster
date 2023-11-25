export const createTaskModalFieldMap = () => {

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
