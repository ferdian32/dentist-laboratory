import { Navbar } from "../components/navbar";
import { useContext } from "react";
import { columnRekap } from "../lib/data";
import { useNavigate } from "react-router-dom";
import TableRekap from "../components/tableRekap";
import { Fragment, useEffect, useState } from "react";
import { __httpClient__ } from "../lib/http";
import { __global__ } from "../__config__";
export default function RekapPenjualan() {
  const [kzp, setKzp] = useState([]);
  const navigate = useNavigate();
  const [sx, setSx] = useState("");
  const { ld, setLd } = useContext(__global__);
  useEffect(() => {
    const get = async () => {
      try {
        const result = await __httpClient__.get(import.meta.env.VITE_BASE_URL_KRP);
        const json = result.data;
        setTimeout(() => {

          setLd(false)
        }, 700)
        const ax02_xs = json?.data.reduce((x, y) => {
          const exst_2a = x.find((i) => i.no_invoice === y.no_invoice);

          if (exst_2a) {
            exst_2a.grandTotal = Math.max(exst_2a.grandTotal, y.grandTotal);
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
      <section className=" w-full py-8 px-4">
        <div className="font-bold">
          <h3 className="text-md capitalize">King Dental Laboratory</h3>
          <h1 className="text-2xl uppercase">Data Rekap Penjualan</h1>
          <small className="capitalize">Tuesday, 25 february 2025</small>
        </div>
        <div className="my-4 flex items-center gap-x-3">

          <input type="search" name="search" id="search" className="bg-slate-50 outline-0 rounded-md px-3 py-1 " onChange={(event) => setSx(event.target.value)} value={sx} placeholder="Search Nama Customer..." />
          <button onClick={() => navigate(`/printRekap/${sx}`)} className="bg-slate-50 text-black py-1 px-3 rounded-md cursor-pointer ml-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18 7H6V3h12zm0 5.5q.425 0 .713-.288T19 11.5t-.288-.712T18 10.5t-.712.288T17 11.5t.288.713t.712.287M16 19v-4H8v4zm2 2H6v-4H2v-6q0-1.275.875-2.137T5 8h14q1.275 0 2.138.863T22 11v6h-4z" /></svg>
          </button>
        </div>
        <TableRekap column={columnRekap} rows={kzp} sc={sx}></TableRekap>
      </section>
    </Fragment>
  )
}