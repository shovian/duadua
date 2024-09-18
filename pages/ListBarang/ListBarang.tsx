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
        router.push("/detail-barang/" + id);
    }

    return (
        <div className=" mx-4 my-8 p-6 bg-gray-100 rounded-lg shadow-md">
            <ul className="list-none p-0">
                {barangList.map((barang) => (
                    <li
                    key={barang.id}
                    onClick={() => handleBarangClick(barang.id)}
                    className="border border-gray-300 rounded-lg p-4 mb-4 bg-white cursor-pointer transition-shadow hover:shadow-lg transform hover:scale-105"
                >
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{barang.name}</h3>
                    <div className="flex justify-between text-gray-700">
                        <p><strong>Category:</strong> {barang.category}</p>
                        <p><strong>Price:</strong> {barang.price} IDR</p>
                    </div>
                    <div className="flex justify-between text-gray-700">
                        <p><strong>Stock:</strong> {barang.stock}</p>
                    </div>
                </li>
                ))}
            </ul>
        </div>
    );
};

export default ListBarang;