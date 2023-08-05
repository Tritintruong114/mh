/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import client, { urlFor } from '../lib/sanity'
import { useState } from 'react';
import Card from '../core/components/Card';

function Advertising() {
  const [products, setProducts] = useState([])

  const query = `*[_type == "advertising"] | order(publishedAt desc) {
    _id,
    title,
    "img": mainImage  {
        asset -> {
          url
        }
    }
  }`;

  const posts = async () => {
    const getData = await client.fetch(query)
    console.log(getData)
    setProducts(getData)
  }

  useEffect(() => {
    posts()
  }, [])

  return (
    <div className="w-full gap-3 h-full grid grid-cols-1 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
      {products.map((product) => {
        return (
          <div key={product._id} >
            <Card index={product._id} item={product} />
          </div>
        )
      })
      }
    </div >
  )
}

export default Advertising