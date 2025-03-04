import { columnRekap } from "../lib/data";
import TableRekap from "../components/tableRekap";
import { useEffect, useState } from "react";
import { __httpClient__ } from "../lib/http";
export default function RekapPenjualan() {
  const [rekap, setRekap] = useState([]);
  useEffect(() => {
    const get = async () => {
      try {
        await __httpClient__.get(import.meta.env.VITE_BASE_URL_KRP)
          .then((result) => {
            const json = result.data;
            setRekap(json?.data);
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    }
    get();
  }, []);

  return (
    <section className="bg-sky-300 w-full h-screen py-8 px-4">
      <div className="font-bold">
        <h3 className="text-md capitalize">King Dental Laboratory</h3>
        <h1 className="text-2xl uppercase">Data Rekap Penjualan</h1>
        <small className="capitalize">Tuesday, 25 february 2025</small>
      </div>
      <TableRekap column={columnRekap} rows={rekap}></TableRekap>
    </section>
  )
}