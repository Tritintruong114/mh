/* eslint-disable react/prop-types */

import { urlFor } from "../../lib/sanity"

function Card({ index, item }) {
  return (
    <div
      key={index}
      className="w-full group relative overflow-hidden">
      <img
        className="w-full duration-700 hover:scale-110 sm:aspect-video object-cover"
        src={urlFor(item.img)}
      />
      <p className="font-medium left-1 group-hover:opacity-100 opacity-0 duration-700 bg-black  text-white bottom-0 px-3 font-Karla absolute">
        {item.title}
      </p>
    </div>
  )
}

export default Card