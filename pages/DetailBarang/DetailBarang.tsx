'use client';
import { TBarang } from '@/types/TBarang';
import React from 'react';

type Props = {
    barang: TBarang;
};

const DetailBarang: React.FC<Props> = ({ barang }) => {
    if (!barang) {
        return <div className="text-center text-red-500">Barang not found!</div>;
    }

    return (
        <div className="p-6 max-w-md mx-auto my-8 bg-gray-100 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">{barang.name}</h1>
            <p className="text-gray-700"><strong>Category:</strong> {barang.category}</p>
            <p className="text-gray-700"><strong>Price:</strong> {barang.price} IDR</p>
            <p className="text-gray-700"><strong>Stock:</strong> {barang.stock}</p>
            {barang.description && <p className="text-gray-700"><strong>Description:</strong> {barang.description}</p>}
            {barang.brand && <p className="text-gray-700"><strong>Brand:</strong> {barang.brand}</p>}
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