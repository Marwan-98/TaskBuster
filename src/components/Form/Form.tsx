import { useState } from 'react';
import './Form.style.css';
import { FormField } from '../../types/GlobalTypes';

const Form = ({fieldMap, onSubmit}: { fieldMap: FormField[], onSubmit: (arg: Record<string, string>) => void }) => {
    let stateMap = {};

    fieldMap.map(((field) => {
        stateMap = {
            ...stateMap,
            [field.id]: ''
        }
    }));

    const [formData, setFormData] = useState<Record<string, string>>({...stateMap});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target as HTMLInputElement;

        setFormData({
            ...formData,
            [name]: value
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
    <form onSubmit={(e) => handleSubmit(e)}>
        {
            fieldMap.map(({name, type, id, required, attributes}) => (
                <div>
                    <label htmlFor={id}>{ name }</label>
                    <input type={ type } id={id} name={id} required={ required } value={ formData[id] } onChange={(e) => handleChange(e)} {...attributes}/>
                </div>
            ))
        }

        <button type="submit">Submit</button>
    </form>
  )
}

export default Form