import { __httpClient__ } from "../lib/http";
import { useContext, useEffect, useState } from "react";
import Button from "../elements/button";
import Input from "../elements/input";
import TableInvoice from "../components/tableInvoice";
import ModalInvoice from "../components/modalInvoice";
import { Link } from "react-router-dom";
import { __global__ } from "../__config__";
import { columnInvoice } from "../lib/data";
const Invoice = () => {
  const { setIsOpen, xyz } = useContext(__global__);
  const [noInvoice, setNoInvoice] = useState("");
  const [results, setResults] = useState([]);
  useEffect(() => {
    const get = async () => {
      await __httpClient__.get(import.meta.env.VITE_BASE_URL_NVC)
        .then((result) => {

          const json = result.data;
          setResults(json.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    get();
  }, [])
  const HandleSaveDataRekap = async (no) => {
    if (!no) {
      alert('No Invoice Dibutuhkan');
    }
    let f = results.find((d) => d?.no_invoice === no);
    try {
      console.log(xyz);
      console.log(no);
      console.log(f);
      console.log(results);
      // const { tgl_invoice, no_invoice, nama_customer, alamat, pasien } = f;
      // const data = {
      //   tgl_invoice,
      //   no_invoice,
      //   nama_customer,
      //   alamat,
      //   pasien
      // };

      // const response = await __httpClient__.post(import.meta.env.VITE_BASE_URL_REKAP, data);
      // return response.json;
    } catch (error) {
      console.log(error);
    }
  }
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
        <Input type="text" className="bg-red-500 outline-0 w-10" onChange={(event) => setNoInvoice(event.target.value)} value={noInvoice} id="no_invoice" name="no_invoice" />
        <div className="bg-gray-600 text-slate-50 py-2 px-3">
          <small> {"<<"}Masukan id invoice untuk dicetak</small>
        </div>
        <Link to={`/print/${noInvoice}`} className="bg-slate-50 py-1 px-3 rounded-md shadow-md" >
          Cetak Invoice
        </Link>
        <Button title="Simpan Data Rekap" className="ml-3 bg-rose-500 text-slate-50 py-1 px-3 rounded-md cursor-pointer" onClick={() => HandleSaveDataRekap(noInvoice)}></Button>
      </div>
      <TableInvoice column={columnInvoice} nvc={results}></TableInvoice>
    </section>
  )
};

export default Invoice;