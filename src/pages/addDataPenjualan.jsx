import FormGroupPenjualan from "../fragments/FormGroupPenjualan";
import { useContext, useEffect, useState } from "react";
import { __global__ } from "../__config__";
import { __httpClient__ } from "../lib/http";
const AddDataPenjualan = () => {
  const { formDataPenjualan, setFormDataPenjualan, dataPenjualan } = useContext(__global__);
  const [dataInvoice, setDataInvoice] = useState([]);
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
      const response = await __httpClient__.post(import.meta.env.VITE_BASE_URL_PNJL, dataPenjualan);
      if (response) {
        alert('Data Has been successfully confirmed');
        window.location.href = '/invoice'
      }
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <section className="px-3 w-full h-screen py-8  ">
      <h1 className="text-center">Form Data Tambah data Penjualan</h1>
      <div className="w-xl h-[340px] block my-2 mx-auto">
        <FormGroupPenjualan setFormData={setFormDataPenjualan} formData={formDataPenjualan} invoice={dataInvoice} />
        <button onClick={saveDataPenjualan} className="bg-rose-500 mt-3 text-slate-50 py-2 px-3 rounded-md ml-5">Simpan Data</button>
        <div className="mt-8 bg-black text-slate-50 px-3 rounded-md h-full overflow-y-scroll">
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
    </section>
  )
};

export default AddDataPenjualan;