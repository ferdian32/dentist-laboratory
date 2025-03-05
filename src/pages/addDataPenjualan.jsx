import FormGroupPenjualan from "../fragments/FormGroupPenjualan";
import { useContext, useEffect, useState } from "react";
import { __global__ } from "../__config__";
import { __httpClient__ } from "../lib/http";
const AddDataPenjualan = () => {
  const { formDataPenjualan, setFormDataPenjualan, dataPenjualan, formDataInvoice } = useContext(__global__);
  const [dataInvoice, setDataInvoice] = useState([]);
  console.log(formDataInvoice);
  useEffect(() => {
    const get = async () => {
      const response = await __httpClient__.get(import.meta.env.VITE_BASE_URL_NVC);
      const json = await response?.data;
      setDataInvoice(json?.data);
    };
    get();
  }, []);
  const saveDataPenjualan = async () => {
    try {
      console.log(formDataInvoice);
      const { nama_customer, alamat, pasien } = formDataInvoice;
      const _k02xap = {
        nama_customer,
        alamat,
        pasien
      };

      const [responsePenjualan, responseInvoice] = await Promise.all([
        __httpClient__.post(import.meta.env.VITE_BASE_URL_PNJL, dataPenjualan),
        fetch(import.meta.env.VITE_BASE_URL_NVC, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(_k02xap)
        })
      ]);

      if (responsePenjualan && responseInvoice) {
        alert("Data Has been successfully confirmed");
        window.location.href = "/invoice";
      }
    } catch (error) {
      console.log("Error saat menyimpan data:", error);
      alert("Terjadi kesalahan saat menyimpan data. Coba lagi.");
    }
  };

  return (
    <section className="px-3 w-full h-screen overflow-hidden py-8  ">
      <h1 className="text-center">Form Data Tambah data Penjualan</h1>
      <div className="w-8xl h-[500px] my-2 mx-auto">
        <div className="grid grid-cols-2 gap-x-3  ">
          <FormGroupPenjualan setFormDataPenjualan={setFormDataPenjualan} formDataPenjualan={formDataPenjualan} invoice={dataInvoice} />
          <div className=" bg-black text-slate-50 px-3 rounded-md h-[500px] overflow-y-scroll">
            {'['}
            {dataPenjualan && dataPenjualan.map((item, index) => {
              return (
                <div key={index} className="px-3 text-rose-500">
                  {'{'}
                  <div >No_invoice : {item.no_invoice}</div>
                  <div > nama_barang: {item.nama_barang}</div>
                  <div >Quantity: {item.qty}</div>
                  <div >Harga Satuan: {item.harga_satuan}</div>
                  <div >Harga Bruto: {item.harga_bruto}</div>
                  {'},'}
                </div>

              )
            })}
            {']'}
          </div>
        </div>
        <button onClick={saveDataPenjualan} className="bg-rose-500 text-slate-50 py-1 px-3 rounded-md">Simpan Data</button>

      </div>
    </section >
  )
};

export default AddDataPenjualan;