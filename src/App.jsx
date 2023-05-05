import React, { useState } from 'react';
import './style.css';
import { ProductList as List } from './components/ProductList/ProductList';

export default function App() {
  const productList = [
    {
      id: 1,
      name: 'crema',
      quality: 1,
    },
    {
      id: 2,
      name: 'cafe',
      quality: 5,
    },
    {
      id: 3,
      name: 'leche',
      quality: 2,
    },
  ];

  return (
    <div>
      <h1>lista de producto</h1>
      <ProductList productList={productList} />
    </div>
  );
}

function ProductList({ productList }) {
  return (
    <div>
      {productList.map((product) => (
        <ProductItem3 data={product} />
      ))}
    </div>
  );
}

const ProductItem = (props) => {
  console.log(props);
  return (
    <div style={{ border: '2px solid red' }}>
      <p>{props.data.name}</p>
      <p>{props.data.quality}</p>
    </div>
  );
};

const ProductItem2 = ({ data }) => {
  return (
    <div style={{ border: '2px solid yellow' }}>
      <p>{data.name}</p>
      <p>{data.quality}</p>
    </div>
  );
};

const ProductItem3 = ({ data }) => {
  const { name, quality } = data;

  return (
    <div style={{ border: '2px solid blue' }}>
      <p>{name}</p>
      <p>{quality}</p>
    </div>
  );
};

// crear un componente llamado producList que reciba los productos y los muestras
