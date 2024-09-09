'use client';
import { TBarang } from '@/types/TBarang';
import React, { useState } from 'react';

type ReceiptItem = {
    name: string;
    quantity: number;
    totalPrice: number;
};

type Props = {
    barangList: TBarang[];
};

const Pembelian: React.FC<Props> = ({ barangList }) => {
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
            const selectedBarang = barangList.find(b => b.id === selectedBarangId);
            if (selectedBarang) {
                const currentCartItem = cart.find(item => item.name === selectedBarang.name);
                const newTotalQuantity = currentCartItem ? currentCartItem.quantity + quantity : quantity;

                if (newTotalQuantity <= selectedBarang.stock) {
                    setCart(prev => {
                        if (currentCartItem) {
                            // Update quantity and total price if item already exists
                            return prev.map(item =>
                                item.name === selectedBarang.name
                                    ? {
                                        ...item,
                                        quantity: newTotalQuantity,
                                        totalPrice: selectedBarang.price * newTotalQuantity,
                                    }
                                    : item
                            );
                        } else {
                            // Add new item to cart
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
                    setQuantity(1); // Reset quantity after adding
                } else {
                    alert('Insufficient stock available for the requested quantity.');
                }
            }
        }
    };

    const handlePrintReceipt = () => {
        const receiptContent = document.getElementById('receipt')?.innerHTML;
        const newWindow = window.open('', '', 'width=600,height=400');
        if (newWindow) {
            newWindow.document.write(`
                <html>
                    <head>
                        <title>Receipt</title>
                        <style>
                            body { font-family: Arial, sans-serif; }
                            pre { white-space: pre-wrap; }
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
        <div style={{ maxWidth: '600px', margin: '20px auto', padding: '20px', backgroundColor: '#f4f4f4', borderRadius: '8px' }}>
            <h1>Pembelian</h1>
            <form onSubmit={handleAddToCart}>
                <label>
                    Select Barang:
                    <select value={selectedBarangId || ''} onChange={handleBarangChange} required>
                        <option value="" disabled>Select an item</option>
                        {barangList.map(barang => (
                            <option key={barang.id} value={barang.id}>
                                {barang.name} - {barang.price} IDR (Stock: {barang.stock})
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    Quantity:
                    <input type="number" value={quantity} onChange={handleQuantityChange} min="1" required />
                </label>
                <button type="submit" disabled={selectedBarangId === null || quantity <= 0}>Add to Cart</button>
            </form>

            {receiptVisible && (
                <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#e0ffe0', borderRadius: '4px' }}>
                    <h2>Receipt</h2>
                    <pre id="receipt">
                        {cart.map(item => (
                            `Item: ${item.name}\nQuantity: ${item.quantity}\nTotal Price: ${item.totalPrice} IDR\n`
                        ))}
                        {`--------------------\nTotal Amount: ${cart.reduce((sum, item) => sum + item.totalPrice, 0)} IDR`}
                    </pre>
                    <button onClick={handlePrintReceipt}>Print Receipt</button>
                </div>
            )}
            <button onClick={handleReset} style={{ marginTop: '20px' }}>Reset</button>
        </div>
    );
};

export default Pembelian;