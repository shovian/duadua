"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const MainMenu: React.FC = () => {
  const router = useRouter();
  useEffect(() => {
    
  }, []);
  const handleButtonClick = (route: string) => {
    router.push(route);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-full">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Main Menu</h1>
      <div className="grid grid-cols-2 gap-6">
        <button
          onClick={() => handleButtonClick("/tambah-barang")}
          className="w-28 h-28 bg-white text-gray-800 rounded-lg shadow-md hover:shadow-lg transition duration-200 flex items-center justify-center border border-gray-300"
        >
          <span className="text-lg font-semibold">Tambah Barang</span>
        </button>
        <button
          onClick={() => handleButtonClick("/lihat-barang")}
          className="w-28 h-28 bg-white text-gray-800 rounded-lg shadow-md hover:shadow-lg transition duration-200 flex items-center justify-center border border-gray-300"
        >
          <span className="text-lg font-semibold">Lihat Barang</span>
        </button>
        <button
          onClick={() => handleButtonClick("/pembelian")}
          className="w-28 h-28 bg-white text-gray-800 rounded-lg shadow-md hover:shadow-lg transition duration-200 flex items-center justify-center border border-gray-300"
        >
          <span className="text-lg font-semibold">Pembelian</span>
        </button>
        <button
          onClick={() => handleButtonClick("/grafik-penjualan")}
          className="w-28 h-28 bg-white text-gray-800 rounded-lg shadow-md hover:shadow-lg transition duration-200 flex items-center justify-center border border-gray-300"
        >
          <span className="text-lg font-semibold">Grafik Penjualan</span>
        </button>
      </div>
    </div>
  );
};

export default MainMenu;
