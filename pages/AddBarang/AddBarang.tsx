'use client'
import React, { useState } from 'react';
import {TBarang} from "../../types/TBarang"

const AddBarang: React.FC = () => {
    const [barangList, setBarangList] = useState<TBarang[]>([]);
    const [currentId, setCurrentId] = useState(1);
    const [formData, setFormData] = useState<TBarang>({
        id: 0,
        name: '',
        category: '',
        price: 0,
        stock: 0,
        description: '',
        brand: '',
        imageUrl: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === 'price' || name === 'stock' ? parseFloat(value) : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newBarang = { ...formData, id: currentId };
        setBarangList((prev) => [...prev, newBarang]);
        console.log('Barang added:', newBarang);
        alert('Barang added successfully!');
        setFormData({
            id: 0,
            name: '',
            category: '',
            price: 0,
            stock: 0,
            description: '',
            brand: '',
            imageUrl: '',
        });
        setCurrentId((prev) => prev + 1);
    };

    return (
        <div style={{ maxWidth: '600px', margin: '20px auto', padding: '20px', backgroundColor: '#f4f4f4', borderRadius: '8px' }}>
            <h1>Add Barang</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>
                <label>
                    Category:
                    <input type="text" name="category" value={formData.category} onChange={handleChange} required />
                </label>
                <label>
                    Price:
                    <input type="number" name="price" value={formData.price} onChange={handleChange} required />
                </label>
                <label>
                    Stock:
                    <input type="number" name="stock" value={formData.stock} onChange={handleChange} required />
                </label>
                <label>
                    Description:
                    <input type="text" name="description" value={formData.description} onChange={handleChange} />
                </label>
                <label>
                    Brand:
                    <input type="text" name="brand" value={formData.brand} onChange={handleChange} />
                </label>
                <label>
                    Image URL:
                    <input type="url" name="imageUrl" value={formData.imageUrl} onChange={handleChange} />
                </label>
                <button type="submit">Add Barang</button>
            </form>
        </div>
    );
};

export default AddBarang;