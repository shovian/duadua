'use client'
import React, { useState } from 'react';
import { TBarang } from "../../types/TBarang";

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
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-center mb-6">Add Barang</h1>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Name:</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Category:</label>
                    <input 
                        type="text" 
                        name="category" 
                        value={formData.category} 
                        onChange={handleChange} 
                        required 
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Price:</label>
                    <input 
                        type="number" 
                        name="price" 
                        value={formData.price} 
                        onChange={handleChange} 
                        required 
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Stock:</label>
                    <input 
                        type="number" 
                        name="stock" 
                        value={formData.stock} 
                        onChange={handleChange} 
                        required 
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Description:</label>
                    <input 
                        type="text" 
                        name="description" 
                        value={formData.description} 
                        onChange={handleChange} 
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Brand:</label>
                    <input 
                        type="text" 
                        name="brand" 
                        value={formData.brand} 
                        onChange={handleChange} 
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Image URL:</label>
                    <input 
                        type="url" 
                        name="imageUrl" 
                        value={formData.imageUrl} 
                        onChange={handleChange} 
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <button 
                    type="submit" 
                    className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                    Add Barang
                </button>
            </form>
        </div>
    );
};

export default AddBarang;