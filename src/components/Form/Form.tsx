import { useState } from 'react';
import './Form.style.css';
import { FormField } from '../../types/GlobalTypes';

const Form = ({fieldMap, onSubmit, formValues, formTitle}:
    { fieldMap: FormField[],
      onSubmit: (arg: Record<string, string>) => void,
      formValues?: Record<string,string> | null,
      formTitle: string,
    }) => {
    let stateMap = {};

    fieldMap.map(((field) => {
        const { attributes: { id } } = field;

        stateMap = {
            ...stateMap,
            [id]: formValues ? formValues[id] : ''
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
            fieldMap.map(({type, attributes, renderLabel = true}) => {
                const { name, id } = attributes;

                return (
                    <div key={id} id={ id }>
                        {renderLabel && <label htmlFor={id}>{ name }</label>}
                        <input type={ type } value={ formData[id] } onChange={(e) => handleChange(e)} {...attributes}/>
                    </div>
                )
            })
        }
    </form>
  )
}

export default Form