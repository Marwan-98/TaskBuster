import { ReactElement, useState } from 'react';
import './Form.style.css';
import { FormField, FormProps } from './Form.type';

const Form = ({fieldMap, onSubmit, formValues, formTitle}: FormProps): ReactElement => {
    let stateMap: Record<string, string> = {};

    const renderSelectInput = ({renderLabel, attributes, events, options = []}: FormField) => {
        const { name, id } = attributes;

        return (
            <div key={id} id={ id }>
                {renderLabel && <label htmlFor={id}>{ name }</label>}
                <select id={ id } {...attributes} {...events} onChange={(e) => handleChange(e)}>
                    { options.map((option, idx) => (
                        <option key={idx} value={option} selected={ formValues && formValues[id ?? ''] ? option === formValues[id ?? ''] : option === options[0] }>{option}</option>
                    )) }
                </select>
            </div>
        );
    }

    const renderTextArea = ({renderLabel, attributes, events}: FormField) => {
        const { name, id } = attributes;

        return (
            <div key={id} id={ id }>
                {renderLabel && <label htmlFor={id}>{ name }</label>}
                <textarea name={ name } id={ id } rows={6} value={formData[id ?? '']} onChange={(e) => handleChange(e)} {...attributes} {...events}></textarea>
            </div>
        )
    }

    const renderDefaultInput = ({renderLabel, type, attributes, events}: FormField) => {
        const { name, id } = attributes;

        return (
            <div key={id} id={ id }>
                {renderLabel && <label htmlFor={id}>{ name }</label>}
                <input type={ type } value={ formData[id ?? ''] } onChange={(e) => handleChange(e)} {...attributes} {...events}/>
            </div>
        )
    }

    const renderMap: Record<string, ({renderLabel, type, attributes, events, options}: FormField) => ReactElement | null> = {
        select: renderSelectInput,
        text: renderDefaultInput,
        'text-area': renderTextArea,
        'datetime-local': renderDefaultInput,
        submit: renderDefaultInput,
        button: renderDefaultInput
    }

    fieldMap.map(((field) => {
        const { attributes: { id } = {}, options } = field;

        if (id) {
            stateMap = {
                ...stateMap,
                [id]: (field.type !== 'button' || 'submit') && formValues ? formValues[id] : field.type === 'select' ? options![0] : ''
            }
        }

    }));

    const [formData, setFormData] = useState<Record<string, string>>({...stateMap});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
            fieldMap.map(({type, attributes = {}, events = {}, renderLabel = true, options}) => {
                return renderMap[type]({renderLabel, type, attributes, events, options});
            })
        }
    </form>
  )
}

export default Form;
