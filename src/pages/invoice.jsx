import { __httpClient__ } from "../lib/http";
import { Fragment, useContext, useEffect, useState } from "react";
import Button from "../elements/button";
import Input from "../elements/input";
import { Navbar } from "../components/navbar";
import TableInvoice from "../components/tableInvoice";
import ModalInvoice from "../components/modalInvoice";
import { Link } from "react-router-dom";
import { __global__ } from "../__config__";
import { columnInvoice } from "../lib/data";
import Swal from "sweetalert2";

const Invoice = () => {
  const { setIsOpen, xyz, setXyz } = useContext(__global__);
  const [noInvoice, setNoInvoice] = useState("");
  const [results, setResults] = useState([]);
  useEffect(() => {
    const get = async () => {
      await __httpClient__.get(import.meta.env.VITE_BASE_URL_NVC)
        .then((rsl) => {
          const json = rsl.data;
          setResults(json.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    get();
  }, [])
  useEffect(() => {
    const get = async () => {
      await __httpClient__.get(import.meta.env.VITE_BASE_URL_PNJL)
        .then((rsl) => {
          const json = rsl.data;
          setXyz(json.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    get();
  }, [])
  const po2xk = async (no) => {
    try {
      const _pxzo = results.find((_) => _.no_invoice === no);
      const { tgl_invoice, no_invoice, nama_customer, alamat, pasien } = _pxzo
      const p2_ok = xyz.filter((_) => _.no_invoice === no);
      console.log(p2_ok);
      let grandTotal = p2_ok.reduce((ac, cr) => ac + cr.harga_bruto, 0);
      const data = {
        tgl_invoice,
        no_invoice,
        nama_customer,
        alamat,
        pasien,
        grandTotal: grandTotal
      }
      const rs = await __httpClient__.post(`${import.meta.env.VITE_BASE_URL_KRP}`, data);
      if (rs) {
        Swal.fire({
          title: "Congratulations!",
          text: "Berhasil menambahkan data rekap?",
          icon: "success"
        });

        window.location.href = `/print/${no}`
      }
      return rs;
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Fragment>
      <Navbar></Navbar>
      <section className="bg-sky-300 w-full h-screen overflow-hidden py-8 px-4">
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
          <Button title="cetak Invoice" onClick={() => po2xk(noInvoice)} className="bg-slate-50 text-black py-1 px-3 rounded-md cursor-pointer ml-3"></Button>
        </div>
        <TableInvoice column={columnInvoice} nvc={results}></TableInvoice>
      </section>
    </Fragment>
  )
};

export default Invoice;