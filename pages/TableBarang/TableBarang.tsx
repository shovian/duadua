"use client";
import { formFields } from "@/configs/formFields";
import { TBarang } from "@/types/TBarang";
import React, { useState } from "react";

interface TableBarangProps {
  barangList: TBarang[];
}

const TableBarang: React.FC<TableBarangProps> = ({ barangList }) => {
  const [sortConfig, setSortConfig] = useState<{
    key: keyof TBarang;
    direction: "ascending" | "descending";
  } | null>(null);

  const sortedBarangList = React.useMemo(() => {
    let sortableItems = [...barangList];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key]! < b[sortConfig.key]!) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key]! > b[sortConfig.key]!) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [barangList, sortConfig]);

  const requestSort = (key: keyof TBarang) => {
    let direction: "ascending" | "descending" = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="mx-8 my-8 p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Barang List</h2>
      <table className="min-w-full bg-white border border-gray-300 rounded-lg">
        <thead className="bg-gray-200">
          <tr>
            {formFields.barang.map(({ label, name }) => (
              <th
                key={name}
                onClick={() => requestSort(name as keyof TBarang)}
                className="py-2 px-4 text-left border-b cursor-pointer hover:bg-gray-100 transition-colors"
              >
                {label}
                {sortConfig?.key === name &&
                  (sortConfig.direction === "ascending" ? " ▲" : " ▼")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedBarangList.map((barang) => (
            <tr key={barang.id} className="hover:bg-gray-100 transition-colors">
              {formFields.barang.map(({ name }) => (
                <td key={name} className="py-2 px-4 border-b">
                  {name === "price"
                    ? `${barang[name as keyof TBarang]} IDR`
                    : barang[name as keyof TBarang]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableBarang;
