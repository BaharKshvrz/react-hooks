import React, { useState, useTransition } from 'react'
import ProductList from './ProductList';
import { generateProducts } from '../data';
const dummyProducts = generateProducts();

const filterProducts = (filterTerm) => {
    if (!filterTerm) return dummyProducts;
    return dummyProducts.filter(product => product.includes(filterTerm))
  }

const ShowList = () => {
  const [filterTerm, setFilterTerm] = useState("");
  const [isPending, startTransaction] = useTransition();

  const filteredProducts = filterProducts(filterTerm);

  const updateFilterHandler = (e) => {
    // We are telling React that updating input state has a lower priority than other state updates
    startTransaction(() => {
        setFilterTerm(e.target.value);
    });
  }
  return (
    <div>
       <input type='text' onChange={updateFilterHandler}/>
       { isPending && <p> Loading...! </p> }
       <ProductList products={filteredProducts}/>
    </div>
  )
}

export default ShowList
