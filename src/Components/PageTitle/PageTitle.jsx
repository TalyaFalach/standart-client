import React from 'react'

const PageTitle = ({title, subTitle}) => {
  return (
    <div className='mt-3 mb-3'>
      <h2 className="display-6">{title} </h2>
      <p className="lead w-100 mx-auto ">
       {subTitle}
      </p>
     
    </div>
  );
}

export default PageTitle