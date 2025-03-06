import FormGroupPenjualan from "../fragments/FormGroupPenjualan";
import Swal from "sweetalert2";
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
       

      </div>
    </section >
  )
};

export default AddDataPenjualan;