import { useContext, useEffect, useState } from "react";
import Button from "../elements/button";
import TableInvoice from "../components/tableInvoice";
import ModalInvoice from "../components/modalInvoice";
import { __httpClient__ } from "../lib/http";
import { __global__, __local__ } from "../__config__";
import { Link } from "react-router-dom";
import { columnInvoice } from "../lib/data";
const Invoice = () => {
  const { setIsOpen } = useContext(__global__);
  const [noInvoice, setNoInvoice] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const get = async () => {
      const response = await __httpClient__.get(import.meta.env.VITE_BASE_URL_NVC);
      const json = await response.data;
      setResults(json.data);
    };
    get();
  }, [])
  return (
    <section className="bg-sky-300 w-full h-screen py-8 px-4">
      <div className="font-bold">
        <h3 className="text-md capitalize">King Dental Laboratory</h3>
        <h1 className="text-2xl uppercase">Data Penjualan</h1>
        <small className="capitalize">Tuesday, 25 february 2025</small>
      </div>
      <ModalInvoice></ModalInvoice>
      <div>
        <Button
          title="tambah data "
          className="bg-sky-500 text-slate-50 my-3 py-1 px-3 rounded-md cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
        <Link to="/addDataPenjualan" className="bg-sky-500 text-slate-50 my-3 py-1 px-3 ml-3  rounded-md cursor-pointer">
          tambah Data penjualan
        </Link>
      </div>
      <div className="flex mb-4">
        <input type="text" className="bg-red-500 outline-0 w-10" onChange={(event) => setNoInvoice(event.target.value)} value={noInvoice} />
        <div className="bg-gray-600 text-slate-50 py-2 px-3">
          <small> {"<<"}Masukan id invoice untuk dicetak</small>
        </div>
        <Link to={`/print/${noInvoice}`} className="bg-slate-50 py-1 px-3 rounded-md shadow-md" >
          Cetak Invoice
        </Link>
      </div>
      <TableInvoice column={columnInvoice} nvc={results}></TableInvoice>
    </section>
  )
};

export default Invoice;