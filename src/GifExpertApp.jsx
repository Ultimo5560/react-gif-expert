import {useState} from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Xbox'])
    const onAddCategory = (newCategory) => {
        // console.log(newCategory);
        if (categories.includes(newCategory)) {
            alert('Esta categoria ya existe')
        }else {
            setCategories([newCategory, ...categories]);
        }
        
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory 
                // setCategories={setCategories} 
                onNewCategory={(event) => onAddCategory(event)}
            />

            {categories.map(category => (
                <GifGrid key={category} category={category} />
            ))}
            <h4>Created by Eber E.</h4>
        </>
    )
}