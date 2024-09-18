import BackButton from "@/components/BackButton";
import ListBarang from "@/pages/ListBarang/ListBarang";
import TableBarang from "@/pages/TableBarang/TableBarang";

export default function ListBarangPage() {
  return (
    <>
        <div>
            <BackButton></BackButton>
        </div>
      <div className=" block lg:hidden">
        <ListBarang></ListBarang>
      </div>
      <div className="hidden lg:block">
        <TableBarang></TableBarang>
      </div>
    </>
  );
}
