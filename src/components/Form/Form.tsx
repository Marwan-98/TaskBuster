import { ReactElement, useState } from 'react';
import './Form.style.css';
import { FormProps } from './Form.type';

const Form = ({fieldMap, onSubmit, formValues, formTitle}: FormProps): ReactElement => {
    let stateMap: Record<string, string> = {};

    fieldMap.map(((field) => {
        const { attributes: { id } = {} } = field;

        if (id) {
            stateMap = {
                ...stateMap,
                [id]: (field.type !== 'button' || 'submit') && formValues ? formValues[id] : ''
            }
        }

    }));

    const [formData, setFormData] = useState<Record<string, string>>({...stateMap});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target as HTMLInputElement;

        setFormData({
            ...formData,
            [id]: value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(formData)
        setFormData({
            ...formData
        })

        const resetObject = Object.fromEntries(
            Object.keys(formData).map((key) => [key, ''])
        );

        setFormData(resetObject);
    }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className={`${formTitle}-Form`}>
        {
            fieldMap.map(({type, attributes = {}, events = {}, renderLabel = true}) => {
                const { name, id } = attributes;

                return (
                    <div key={id} id={ id }>
                        {renderLabel && <label htmlFor={id}>{ name }</label>}
                        <input type={ type } value={ formData[id ?? ''] } onChange={(e) => handleChange(e)} {...attributes} {...events}/>
                    </div>
                )
            })
        }
    </form>
  )
}

export default Form