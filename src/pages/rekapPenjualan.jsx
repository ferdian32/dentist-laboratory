import { Navbar } from "../components/navbar";
import { columnRekap } from "../lib/data";
import TableRekap from "../components/tableRekap";
import { Fragment, useEffect, useState } from "react";
import { __httpClient__ } from "../lib/http";
export default function RekapPenjualan() {
  const [kzp, setKzp] = useState([]);
  useEffect(() => {
    const get = async () => {
      try {
        const result = await __httpClient__.get(import.meta.env.VITE_BASE_URL_KRP);
        const json = result.data;
        const ax02_xs = json?.data.reduce((x, y) => {
          const exst_2a = x.find((i) => i.no_invoice === y.no_invoice);
          let mx2 = Math.floor(Math.random() * y.length);
          if (exst_2a) {
            exst_2a.total += item.total;
            console.log(mx2);

          } else {
            x.push({ ...y });
          }

          return i;
        }, []);

        setKzp(ax02_xs);
      } catch (error) {
        console.log(error);
      }
    };
    get();
  }, []);

  return (
    <Fragment>
      <Navbar></Navbar>
      <section className="bg-sky-300 w-full h-screen py-8 px-4">
        <div className="font-bold">
          <h3 className="text-md capitalize">King Dental Laboratory</h3>
          <h1 className="text-2xl uppercase">Data Rekap Penjualan</h1>
          <small className="capitalize">Tuesday, 25 february 2025</small>
        </div>
        <TableRekap column={columnRekap} rows={kzp}></TableRekap>
      </section>
    </Fragment>
  )
}