'use client'
import { TBarang } from '@/types/TBarang';
import React from 'react';

type Props = {
    barangList: TBarang[];
};

const DetailBarang: React.FC<Props> = (props:{ barangList:TBarang[] }) => {
    const barangList=props.barangList
    const id = "0"
    const barang = barangList.find(b => b.id === Number(id));

    if (!barang) {
        return <div>Barang not found!</div>;
    }

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: '20px auto', backgroundColor: '#f4f4f4', borderRadius: '8px' }}>
            <h1>{barang.name}</h1>
            <p><strong>Category:</strong> {barang.category}</p>
            <p><strong>Price:</strong> {barang.price} IDR</p>
            <p><strong>Stock:</strong> {barang.stock}</p>
            {barang.description && <p><strong>Description:</strong> {barang.description}</p>}
            {barang.brand && <p><strong>Brand:</strong> {barang.brand}</p>}
            {barang.imageUrl && <img src={barang.imageUrl} alt={barang.name} style={{ maxWidth: '100%', height: 'auto' }} />}
        </div>
    );
};

export default DetailBarang;