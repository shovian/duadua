'use client'
import { TBarang } from '@/types/TBarang';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const ListBarang: React.FC = () => {
    const router = useRouter()
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
router.push("/"+id)    }

    return (
        <div style={{ maxWidth: '800px', margin: '20px auto', padding: '20px', backgroundColor: '#f4f4f4', borderRadius: '8px' }}>
            

            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {barangList.map((barang) => (
                    <li
                        key={barang.id}
                        onClick={() => handleBarangClick(barang.id)} // Use click handler for navigation
                        style={{
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            padding: '10px',
                            margin: '10px 0',
                            backgroundColor: '#fff',
                            cursor: 'pointer', // Change cursor to pointer for clickable items
                        }}
                    >
                        <h3>{barang.name}</h3>
                        <p><strong>Category:</strong> {barang.category}</p>
                        <p><strong>Price:</strong> {barang.price} IDR</p>
                        <p><strong>Stock:</strong> {barang.stock}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListBarang;