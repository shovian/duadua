import Pembelian from "@/pages/Pembelian/Pembelian";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
       <Pembelian barangList={[{
            id: 2,
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
        },]}></Pembelian>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        22 Cell © 2024
      </footer>
    </div>
  );
}
