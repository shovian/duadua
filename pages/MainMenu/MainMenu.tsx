'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const MainMenu: React.FC = () => {
    const router = useRouter();

    const handleButtonClick = (route: string) => {
        router.push(route);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-full bg-white">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Main Menu</h1>
            <div className="grid grid-cols-2 gap-4">
                <button
                    onClick={() => handleButtonClick('/tambah-barang')}
                    className="w-28 h-28 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-200"
                >
                    <span className="text-lg">Tambah Barang</span>
                </button>
                <button
                    onClick={() => handleButtonClick('/lihat-barang')}
                    className="w-28 h-28 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition duration-200"
                >
                    <span className="text-lg">Lihat Barang</span>
                </button>
                <button
                    onClick={() => handleButtonClick('/pembelian')}
                    className="w-28 h-28 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600 transition duration-200"
                >
                    <span className="text-lg">Pembelian</span>
                </button>
                <button
                    onClick={() => handleButtonClick('/grafik-penjualan')}
                    className="w-28 h-28 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition duration-200"
                >
                    <span className="text-lg">Grafik Penjualan</span>
                </button>
            </div>
        </div>
    );
};

export default MainMenu;