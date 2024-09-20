import BackButton from "@/components/BackButton";
import ListBarang from "@/pages/ListBarang/ListBarang";
import TableBarang from "@/pages/TableBarang/TableBarang";
import { TBarang } from "@/types/TBarang";
import { getAllBarang } from "@/util/BarangHandler";

export default async function ListBarangPage() {
  // Fetch all barang documents on the server side
  const barangList: TBarang[] = await getAllBarang();

  return (
      <>
          <div>
              <BackButton />
          </div>
          <div className="block lg:hidden">
              <ListBarang barangList={barangList} />
          </div>
          <div className="hidden lg:block">
              <TableBarang barangList={barangList} />
          </div>
      </>
  );
}