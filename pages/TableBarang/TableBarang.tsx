'use client'
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

    return (
        <div style={{ maxWidth: '800px', margin: '20px auto', padding: '20px', backgroundColor: '#f4f4f4', borderRadius: '8px' }}>

            <h2>Barang List</h2>
            <table style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Description</th>
                        <th>Brand</th>
                    </tr>
                </thead>
                <tbody>
                    {barangList.map((barang) => (
                        <tr key={barang.id}>
                            <td>{barang.id}</td>
                            <td>{barang.name}</td>
                            <td>{barang.category}</td>
                            <td>{barang.price}</td>
                            <td>{barang.stock}</td>
                            <td>{barang.description}</td>
                            <td>{barang.brand}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableBarang;