import React from "react";

export function ServiceCard({ title, content, image }) {
  return (
    <div className="w-[300px] min-h-[320px] rounded-md border bg-white p-3 m-2">
      <img
        src={image}
        alt="Laptop"
        className="h-[200px] w-full rounded-md object-cover"
      />
      <div className="p-2 md:p-4">
        <h1 className="text-lg font-semibold">{title}</h1>
        <p className="md:mt-3 text-sm text-gray-600">{content}</p>
      </div>
    </div>
  );
}
