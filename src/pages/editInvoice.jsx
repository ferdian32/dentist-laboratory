import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { __httpClient__ } from "../lib/http";
import { __global__ } from "../__config__";
import FormGroupEditInvoice from "../fragments/FormGroupEditInvoice";
const EditDataInvoice = () => {
  const { id_invoice } = useParams();
  const [kontol, setKontol] = useState([]);
  const { dataPenjualan, formDataInvoice, setFormDataInvoice, px23, setFormDataPenjualan, UpdatedataPenjualan } = useContext(__global__);
  useEffect(() => {
    const get = async () => {
      const xp_2x = await __httpClient__.get(`${import.meta.env.VITE_BASE_URL_NVC}/${id_invoice}`);
      const px_wzaa = xp_2x.data;
      setFormDataInvoice({
        no_invoice: px_wzaa.data.no_invoice,
        nama_customer: px_wzaa.data.nama_customer,
        alamat: px_wzaa.data.alamat,
        pasien: px_wzaa.data.pasien
      });
    };
    get()
  }, [id_invoice]);
  useEffect(() => {
    const get = async () => {
      const fx = await __httpClient__.get(import.meta.env.VITE_BASE_URL_PNJL);
      const _02xa = fx.data.data;
      const __2xasa = _02xa.filter((_) => _.no_invoice === id_invoice);
      setKontol(__2xasa);
    }
    get();
  }, [id_invoice])
  return (
    <main className="w-full h-screen max-w-8xl py-4 px-10 ">
      <h1 className="text-center mb-4 font-bold text-2xl">Form Edit Data Invoice</h1>
      <div className="w-full h-[500px] my-2 mx-auto">
        <div className="grid grid-cols-2 gap-x-3  ">
          <FormGroupEditInvoice x={kontol} prms={id_invoice}></FormGroupEditInvoice>
          <div className=" bg-black text-slate-50 px-3 rounded-md h-[500px] overflow-y-scroll">
            {'['}
            {UpdatedataPenjualan && UpdatedataPenjualan.map((item, index) => {
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
    </main>
  )
};

export default EditDataInvoice;