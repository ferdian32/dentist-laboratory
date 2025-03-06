import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { __httpClient__ } from "../lib/http";
import { __global__ } from "../__config__";
import FormGroupEditInvoice from "../fragments/FormGroupEditInvoice";
const EditDataInvoice = () => {
  const { id_invoice } = useParams();
  const { setFormDataInvoice, } = useContext(__global__);
  useEffect(() => {
    const get = async () => {
      const xp_2x = await __httpClient__.get(`${import.meta.env.VITE_BASE_URL_NVC}/${id_invoice}`);
      const px_wzaa = xp_2x.data;
      setFormDataInvoice({
        no_invoice: px_wzaa.data.no_invoice,
        nama_customer: px_wzaa.data.nama_customer,
        alamat: px_wzaa.data.alamat,
        pasien: px_wzaa.data.pasien,
        order_id: px_wzaa.order_id
      });
    };
    get()
  }, [id_invoice]);
  return (
    <main className="w-full h-screen max-w-xl py-4 px-10 ">
      <h1 className="text-center mb-4 font-bold text-2xl">Form Edit Data Invoice</h1>
      <div className="w-full h-[500px] my-2 mx-auto">
        <FormGroupEditInvoice prms={id_invoice}></FormGroupEditInvoice>
      </div>
    </main>
  )
};

export default EditDataInvoice;