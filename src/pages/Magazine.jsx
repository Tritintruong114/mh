/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react';
import client from '../lib/sanity';
import { useEffect } from 'react';
import Card from '../core/components/Card';

function Magazine() {
  const [products, setProducts] = useState([])

  const query = `*[_type == "magazine"] | order(publishedAt desc) {
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
    <div className="w-full no-scrollbar xl:overflow-y-scroll md:col-span-3 md:col-start-2 gap-3 grid grid-cols-1 md:grid-cols-1 md:gap-6 xl:grid-cols-1 xl:col-span-3 xl:col-start-2">
      {products.map((product) => {
        return (
          <div className="w-full gap-6 flex flex-col" key={product._id} >
            <Card index={product._id} item={product} />
          </div>
        )
      })
      }
    </div>
  )
}

export default Magazine