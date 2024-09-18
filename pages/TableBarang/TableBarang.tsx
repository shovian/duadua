'use client';
import { TBarang } from '@/types/TBarang';
import React, { useState } from 'react';

const TableBarang: React.FC = () => {
    const [barangList, setBarangList] = useState<TBarang[]>([
        {
            id: 1,
            name: 'Charger',
            category: 'Charger',
            price: 10000,
            stock: 50,
            description: 'Fast charger for mobile devices.',
            brand: 'Brand A',
            imageUrl: '',
        },
        {
            id: 2,
            name: 'Phone Case',
            category: 'Case',
            price: 5000,
            stock: 100,
            description: 'Durable phone case.',
            brand: 'Brand B',
            imageUrl: '',
        },
    ]);

    const [sortConfig, setSortConfig] = useState<{ key: keyof TBarang; direction: 'ascending' | 'descending' } | null>(null);

    const sortedBarangList = React.useMemo(() => {
        let sortableItems = [...barangList];
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key]! < b[sortConfig.key]!) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key]! > b[sortConfig.key]!) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [barangList, sortConfig]);

    const requestSort = (key: keyof TBarang) => {
        let direction: 'ascending' | 'descending' = 'ascending';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    return (
        <div className=" mx-8 my-8 p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Barang List</h2>
            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-200">
                    <tr>
                        {['id', 'name', 'category', 'price', 'stock', 'description', 'brand'].map((header) => (
                            <th
                                key={header}
                                onClick={() => requestSort(header as keyof TBarang)}
                                className="py-2 px-4 text-left border-b cursor-pointer hover:bg-gray-100 transition-colors"
                            >
                                {header.charAt(0).toUpperCase() + header.slice(1)}
                                {sortConfig?.key === header && (sortConfig.direction === 'ascending' ? ' ▲' : ' ▼')}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {sortedBarangList.map((barang) => (
                        <tr key={barang.id} className="hover:bg-gray-100 transition-colors">
                            <td className="py-2 px-4 border-b">{barang.id}</td>
                            <td className="py-2 px-4 border-b">{barang.name}</td>
                            <td className="py-2 px-4 border-b">{barang.category}</td>
                            <td className="py-2 px-4 border-b">{barang.price} IDR</td>
                            <td className="py-2 px-4 border-b">{barang.stock}</td>
                            <td className="py-2 px-4 border-b">{barang.description}</td>
                            <td className="py-2 px-4 border-b">{barang.brand}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableBarang;