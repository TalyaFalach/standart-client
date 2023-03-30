import React from 'react'

const PageTitle = ({title, subTitle}) => {
  return (
    <div>
      <h2 className="display-6">{title} </h2>
      <p className="lead w-75 mx-auto ">
       {subTitle}
      </p>
      <hr />
    </div>
  );
}

export default PageTitle