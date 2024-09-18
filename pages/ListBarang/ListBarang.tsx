'use client';
import { TBarang } from '@/types/TBarang';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const ListBarang: React.FC = () => {
    const router = useRouter();
    const [barangList, setBarangList] = useState<TBarang[]>([
        {
            id: 0,
            name: 'Charger',
            category: 'Charger',
            price: 10000,
            stock: 50,
            description: 'Fast charger for mobile devices.',
            brand: 'Brand A',
            imageUrl: '',
        },
        {
            id: 1,
            name: 'Phone Case',
            category: 'Case',
            price: 5000,
            stock: 100,
            description: 'Durable phone case.',
            brand: 'Brand B',
            imageUrl: '',
        },
    ]);

    function handleBarangClick(id: number): void {
        router.push("/" + id);
    }

    return (
        <div className="max-w-2xl mx-auto my-8 p-6 bg-gray-100 rounded-lg shadow-md">
            <ul className="list-none p-0">
                {barangList.map((barang) => (
                    <li
                        key={barang.id}
                        onClick={() => handleBarangClick(barang.id)} // Use click handler for navigation
                        className="border border-gray-300 rounded-md p-4 mb-4 bg-white cursor-pointer hover:shadow-lg transition-shadow"
                    >
                        <h3 className="text-lg font-semibold">{barang.name}</h3>
                        <p className="text-gray-700"><strong>Category:</strong> {barang.category}</p>
                        <p className="text-gray-700"><strong>Price:</strong> {barang.price} IDR</p>
                        <p className="text-gray-700"><strong>Stock:</strong> {barang.stock}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListBarang;