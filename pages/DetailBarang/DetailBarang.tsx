"use client";
import { TBarang } from "@/types/TBarang";
import React from "react";

type Props = {
  barang: TBarang;
};

const DetailBarang: React.FC<Props> = ({ barang }) => {
  if (!barang) {
    return <div className="text-center text-red-500">Barang not found!</div>;
  }

  return (
    <div className="p-6 max-w-md mx-auto my-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{barang.name}</h1>
      <p className="text-gray-800">
        <strong>Category:</strong>{" "}
        <span className="text-gray-600">{barang.category}</span>
      </p>
      <p className="text-gray-800">
        <strong>Price:</strong>{" "}
        <span className="text-gray-600">{barang.price} IDR</span>
      </p>
      <p className="text-gray-800">
        <strong>Stock:</strong>{" "}
        <span className="text-gray-600">{barang.stock}</span>
      </p>
      {barang.description && (
        <p className="text-gray-800 mt-2">
          <strong>Description:</strong>{" "}
          <span className="text-gray-600">{barang.description}</span>
        </p>
      )}
      {barang.brand && (
        <p className="text-gray-800">
          <strong>Brand:</strong>{" "}
          <span className="text-gray-600">{barang.brand}</span>
        </p>
      )}
      {barang.imageUrl && (
        <img
          src={barang.imageUrl}
          alt={barang.name}
          className="mt-4 max-w-full h-auto rounded-md shadow-sm"
        />
      )}
    </div>
  );
};

export default DetailBarang;
