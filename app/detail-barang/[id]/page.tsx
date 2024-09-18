import { useRouter } from 'next/router';
import BackButton from "@/components/BackButton";
import DetailBarang from "@/pages/DetailBarang/DetailBarang";
import { TBarang } from "@/types/TBarang";
import { getBarangById } from '@/util/BarangHandler';

export default async function DetailBarangPage({ params }: { params: { id: string } }) {


    // Ensure that id is a string
    // const barang: TBarang | null = Array.isArray(id) ? await getBarangById(id[0]) : id ? await getBarangById(id) : null;
    const barangList = [
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
    ];
    // const idString =Array.isArray(id) ?id[0]:id;
    const barang = barangList.filter(node=>node.id==parseInt(params.id))[0]
    return (
        <>
            <div>
                <BackButton />
            </div>
            {barang ? (
                <DetailBarang barang={barang} />
            ) : (
                <p>Loading...</p> // Optional loading state
            )}
        </>
    );
}