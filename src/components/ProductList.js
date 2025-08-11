import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'

const ProductList = () => {
  const {filtered_products:productss, grid_view} = useFilterContext()

  if(productss.length < 1) {
    return <h5 style={{textTransform:'none'}}>
      Sorry, no products matched your search...
    </h5>
  }

  if(grid_view === false) {
    return <ListView products={productss} />
  }

  return <GridView products={productss} />
}

export default ProductList
