"use client";
import { TBarang } from "@/types/TBarang";
import React, { useState } from "react";

type ReceiptItem = {
  name: string;
  quantity: number;
  totalPrice: number;
};

type Props = {
  barangList: TBarang[];
};

const Pembelian: React.FC = () => {
  const [barangList, setBarangList] = useState<TBarang[]>([
    {
      id: 0,
      name: "Charger",
      category: "Charger",
      price: 10000,
      stock: 50,
      description: "Fast charger for mobile devices.",
      brand: "Brand A",
      imageUrl: "",
    },
    {
      id: 1,
      name: "Phone Case",
      category: "Case",
      price: 5000,
      stock: 100,
      description: "Durable phone case.",
      brand: "Brand B",
      imageUrl: "",
    },
  ]);
  const [selectedBarangId, setSelectedBarangId] = useState<number | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [cart, setCart] = useState<ReceiptItem[]>([]);
  const [receiptVisible, setReceiptVisible] = useState<boolean>(false);

  const handleBarangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBarangId(Number(e.target.value));
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };

  const handleAddToCart = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedBarangId !== null) {
      const selectedBarang = barangList.find((b) => b.id === selectedBarangId);
      if (selectedBarang) {
        const currentCartItem = cart.find(
          (item) => item.name === selectedBarang.name
        );
        const newTotalQuantity = currentCartItem
          ? currentCartItem.quantity + quantity
          : quantity;

        if (newTotalQuantity <= selectedBarang.stock) {
          setCart((prev) => {
            if (currentCartItem) {
              return prev.map((item) =>
                item.name === selectedBarang.name
                  ? {
                      ...item,
                      quantity: newTotalQuantity,
                      totalPrice: selectedBarang.price * newTotalQuantity,
                    }
                  : item
              );
            } else {
              const totalPrice = selectedBarang.price * quantity;
              return [
                ...prev,
                {
                  name: selectedBarang.name,
                  quantity,
                  totalPrice,
                },
              ];
            }
          });
          setReceiptVisible(true);
          setQuantity(1);
        } else {
          alert("Insufficient stock available for the requested quantity.");
        }
      }
    }
  };

  const handlePrintReceipt = () => {
    const receiptContent = document.getElementById("receipt")?.innerHTML;
    const newWindow = window.open("", "", "width=600,height=400");
    if (newWindow) {
      newWindow.document.write(`
                <html>
                    <head>
                        <title>Receipt</title>
                        <style>
                            body { font-family: Arial, sans-serif; }
                            pre { white-space: pre-wrap; }
                            @media print {
                                button { display: none; }
                            }
                        </style>
                    </head>
                    <body>
                        <h1>Receipt</h1>
                        <pre>${receiptContent}</pre>
                        <button onclick="window.print()">Print</button>
                    </body>
                </html>
            `);
      newWindow.document.close();
      newWindow.focus();
    }
  };

  const handleReset = () => {
    setCart([]);
    setSelectedBarangId(null);
    setQuantity(1);
    setReceiptVisible(false);
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Pembelian</h1>
      <form onSubmit={handleAddToCart} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Select Barang:
          </label>
          <select
            value={selectedBarangId || ""}
            onChange={handleBarangChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
          >
            <option value="" disabled>
              Select an item
            </option>
            {barangList.map((barang) => (
              <option key={barang.id} value={barang.id}>
                {barang.name} - {barang.price} IDR (Stock: {barang.stock})
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Quantity:
          </label>
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
          />
        </div>
        <button
          type="submit"
          disabled={selectedBarangId === null || quantity <= 0}
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </form>

      {receiptVisible && (
        <div className="mt-6 p-4 bg-green-100 border border-green-300 rounded-md">
          <h2 className="text-xl font-semibold">Receipt</h2>
          <pre id="receipt" className="whitespace-pre-wrap">
            {cart.map(
              (item) =>
                `Item: ${item.name}\nQuantity: ${item.quantity}\nTotal Price: ${item.totalPrice} IDR\n`
            )}
            {`--------------------\nTotal Amount: ${cart.reduce(
              (sum, item) => sum + item.totalPrice,
              0
            )} IDR`}
          </pre>
          <button
            onClick={handlePrintReceipt}
            className="mt-4 py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Print Receipt
          </button>
        </div>
      )}
      <button
        onClick={handleReset}
        className="mt-4 w-full py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700"
      >
        Reset
      </button>
    </div>
  );
};

export default Pembelian;
