import { Navbar } from "../components/navbar";
import { useContext } from "react";
import { columnRekap } from "../lib/data";
import TableRekap from "../components/tableRekap";
import { Fragment, useEffect, useState } from "react";
import { __httpClient__ } from "../lib/http";
import { __global__ } from "../__config__";
export default function RekapPenjualan() {
  const [kzp, setKzp] = useState([]);
  const [sx, setSx] = useState("");
  const { ld, setLd } = useContext(__global__);
  useEffect(() => {
    const get = async () => {
      try {
        const result = await __httpClient__.get(import.meta.env.VITE_BASE_URL_KRP);
        const json = result.data;
        setTimeout(() => {

          setLd(false)
        }, 8000)
        const ax02_xs = json?.data.reduce((x, y) => {
          const exst_2a = x.find((i) => i.no_invoice === y.no_invoice);
          
          if (exst_2a) {
            exst_2a.total += y.total;
            console.log(mx2);

          } else {
            x.push({ ...y });
          }
          return x;
        }, []);

        setKzp(ax02_xs);
      } catch (error) {
        console.log(error);
      }
    };
    get();
  }, []);
  if (ld) return <div className="w-full h-screen flex items-center justify-center text-2xl font-bold italic">Load....</div>
  return (
    <Fragment>
      <Navbar></Navbar>
      <section className="bg-sky-300 w-full h-screen py-8 px-4">
        <div className="font-bold">
          <h3 className="text-md capitalize">King Dental Laboratory</h3>
          <h1 className="text-2xl uppercase">Data Rekap Penjualan</h1>
          <small className="capitalize">Tuesday, 25 february 2025</small>
        </div>
        <input type="search" name="search" id="search" className="bg-slate-50 outline-0 rounded-md px-3 py-1 my-2" onChange={(event) => setSx(event.target.value)} value={sx} placeholder="Search Nama Customer..." />
        <TableRekap column={columnRekap} rows={kzp} sc={sx}></TableRekap>
      </section>
    </Fragment>
  )
}