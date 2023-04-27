import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = ( newCategory ) => {

      if(categories.includes(newCategory)) return;
      // console.log(newCategory)
      // categories.push('Valorant');
      setCategories( [ newCategory, ...categories ] );
      // setCategories( cat => [ ...cat , 'Valorant' ] )
  }

  // console.log(categories);

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
          // setCategories={setCategories}
          onNewCategory={(value) => onAddCategory(value)}
        />


        {
          categories.map( (category) => (
                <GifGrid 
                  key={category} 
                  category={category}
                />
          ))
        }


    </>
  )

}
