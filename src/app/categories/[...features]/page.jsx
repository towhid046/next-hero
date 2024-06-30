import React from 'react'

const CategoryDetailsPage = ({params}) => {
  const dynamicParams = params.features;
if(dynamicParams.length === 1)return <p>{dynamicParams[0]}</p>
if(dynamicParams.length === 2)return <p>{dynamicParams[1]}</p>
if(dynamicParams.length === 3)return <p>{dynamicParams[2]}</p>
  return (
    <div>CategoryDetailsPage</div>
  )
}

export default CategoryDetailsPage