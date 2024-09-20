"use client";
import React, { useState } from "react";
import { TBarang } from "../../types/TBarang";
import { formFields } from "@/configs/formFields";
import { addBarang } from "@/util/BarangHandler";

const AddBarang: React.FC = () => {
  const [formData, setFormData] = useState<TBarang>({
    id: "",
    name: "",
    category: "",
    price: 0,
    stock: 0,
    description: "",
    brand: "",
    imageUrl: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "price" || name === "stock" ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { id, ...formDataWithoutId } = formData;
    const newBarang = { ...formDataWithoutId };
    try {
      const docId = await addBarang(newBarang); // Call the addBarang function
      alert("Barang added successfully!");
      // Reset form data
      setFormData({
        id: "",
        name: "",
        category: "",
        price: 0,
        stock: 0,
        description: "",
        brand: "",
        imageUrl: "",
      });
    } catch (e) {
      alert(e instanceof Error ? e.message : "An error occurred"); // Display the error message
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">Add Barang</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        {formFields.barang.map((field) => (
          <div key={field.name}>
            <label className="block text-sm font-medium text-gray-700">
              {field.label}:
            </label>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name as keyof TBarang]}
              onChange={handleChange}
              required={field.required}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        ))}
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
