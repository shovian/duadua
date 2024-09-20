'use client';
import { TBarang } from '@/types/TBarang';
import { useRouter } from 'next/navigation';
import React from 'react';

interface ListBarangProps {
    barangList: TBarang[];
}

const ListBarang: React.FC<ListBarangProps> = ({ barangList }) => {
    const router = useRouter();

    function handleBarangClick(id: string): void {
        router.push("/detail-barang/" + id);
    }

    return (
        <div className="mx-4 my-8 p-6 bg-gray-100 rounded-lg shadow-md">
            <ul className="list-none p-0">
                {barangList.map((barang) => (
                    <li
                        key={barang.id}
                        onClick={() => handleBarangClick(barang.id)}
                        className="border border-gray-300 rounded-lg p-4 mb-4 bg-white cursor-pointer transition-shadow transition-all hover:shadow-lg transform hover:scale-105"
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