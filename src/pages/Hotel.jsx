//Fetching data
import { useState } from "react";
import Card from "../core/components/Card";
import client from "../lib/sanity";
import { useEffect } from "react";

function Hotel() {
  const [products, setProducts] = useState([]);

  const query = `*[_type == "hotel"] | order(publishedAt desc) {
    _id,
    title,
    "img": mainImage  {
        asset -> {
          url
        }
    }
  }`;

  const posts = async () => {
    const getData = await client.fetch(query);
    setProducts(getData);
  };

  useEffect(() => {
    posts();
  }, []);
  return (
    <div className="w-full no-scrollbar xl:overflow-y-scroll md:col-span-3 md:col-start-2 gap-3 grid grid-cols-1 md:grid-cols-1 md:gap-6 xl:grid-cols-1 xl:col-span-2 xl:col-start-3">
      {products.map((product) => {
        return (
          <div className="w-full gap-6 flex flex-col" key={product._id}>
            <Card index={product._id} item={product} />
          </div>
        );
      })}
    </div>
  );
}

export default Hotel;
