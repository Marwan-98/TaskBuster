export const taskModalFieldMap = [
    {
        name: 'Title',
        type: 'text',
        id: 'title',
        required: true,
        attributes: {
            maxlength: 120
        }
    },
    {
        name: 'Description',
        type: 'text',
        id: 'description',
        required: true
    },
    {
        name: 'Due Date',
        type: 'datetime-local',
        id: 'dueDate',
        required: true
    }
];
