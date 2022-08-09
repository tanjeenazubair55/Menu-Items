import React from 'react';

const Categories = ({category,filterItems}) => {
  return (
    <div className="btn-container">
      {category.map((categ,index)=>{
        return <button 
        type='button'
        className='filter-btn' 
        key={index} 
        onClick={()=>
          filterItems(categ)
        }>
          {categ}
        </button>
      })}
    </div>
  )
};

export default Categories;
