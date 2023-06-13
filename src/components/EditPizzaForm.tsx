import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import Pizza from '../models/Pizza';

interface EditPizzaFormProps {
    data: Pizza,
    updatePizza: (newPizza: Pizza) => void,
    handleToggleEdit: () => void,
}

const EditPizzaForm: FC<EditPizzaFormProps> = ({ data, updatePizza, handleToggleEdit }) => {
    const [editPizza, setEditPizza] = useState<Pizza>(data);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setEditPizza({...editPizza, [name]: value})
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const {title, price, img} = editPizza;

        if (title && price && img) {
            updatePizza(editPizza);
            handleToggleEdit();
        } else {
            console.log('There are empty fields')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name='title'
                placeholder='Pizza name' 
                onChange={handleChange}
                value={editPizza.title}
            />
            <input 
                type="text"
                name='price'
                placeholder='Price' 
                onChange={handleChange}
                value={editPizza.price}
            />
            <input 
                type="text"
                name='img'
                placeholder='Image' 
                onChange={handleChange}
                value={editPizza.img}
            />
            <button type='submit'>Edit</button>
        </form>
    )
}

export default EditPizzaForm;