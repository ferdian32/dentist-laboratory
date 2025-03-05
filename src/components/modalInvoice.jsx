import { useContext, useState } from "react";
import { __global__, __local__ } from "../__config__";
import FormGroupInvoice from "../fragments/FormGroupInvoice";
import { __httpClient__ } from "../lib/http";
import { nanoid } from "nanoid";
export default function ModalInvoice() {
  const { isOpen, setIsOpen, } = useContext(__global__);
  const handleForm = (event) => {
    event.preventDefault();
    const { nama_customer, alamat, pasien, keterangan } = formDataInvoice;
    const data = {
      tgl_invoice: new Date().toISOString(),
      no_invoice: nanoid(),
      nama_customer,
      alamat,
      pasien,
      keterangan
    }
    try {
      const response = __httpClient__.post(import.meta.env.VITE_BASE_URL_NVC, data);
      if (response) {
        alert('success!!!!');
        window.location.href = '/invoice'
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div
      className={`w-md  h-[350px] fixed top-3 left-4/12 ${isOpen ? "block" : "hidden"
        } bg-slate-50 px-3 py-4 rounded-md `}
    >
      <div className="relative">
        <h1 className="font-bold text-center">Form input Data </h1>
        <form onSubmit={handleForm} method="post" >
          <FormGroupInvoice setFormData={setFormDataInvoice} />
          <button
            type="submit"
            className="bg-blue-500 text-slate-50 py-2 px-3 block text-end rounded-md"
          >
            submit
          </button>
        </form>
        <button
          className="absolute top-0 right-0 cursor-pointer"
          onClick={() => setIsOpen((prev) => setIsOpen(!prev))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={32}
            height={32}
            viewBox="0 0 32 32"
          >
            <path
              fill="#e90505"
              d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m0 26C9.4 28 4 22.6 4 16S9.4 4 16 4s12 5.4 12 12s-5.4 12-12 12"
            ></path>
            <path
              fill="#e90505"
              d="M21.4 23L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"
            ></path>
          </svg>
        </button>
      </div>
    </div>

  )
}