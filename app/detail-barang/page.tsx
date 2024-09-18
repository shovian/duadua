import { useRouter } from 'next/router';
import BackButton from "@/components/BackButton";
import DetailBarang from "@/pages/DetailBarang/DetailBarang";
import { TBarang } from "@/types/TBarang";
import { getBarangById } from '@/util/BarangHandler';

export default async function DetailBarangPage() {
    const router = useRouter();
    const { id } = router.query; // Extract `id` from the URL

    // Fetch the barang using the id
    const barang: TBarang|null = id ? await getBarangById(id) : null;

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