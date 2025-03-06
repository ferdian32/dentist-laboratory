import { useContext } from "react";
import { __global__ } from "../__config__";
import Button from "../elements/button";
import { __httpClient__ } from "../lib/http";
const FormGroupEditInvoice = ({ x, prms }) => {
  const { formDataInvoice, setFormDataInvoice } = useContext(__global__);
  const changeEvent = (event) => {
    setFormDataInvoice((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }))
  };
  const _2x3al = async () => {
    try {
      const data = {
        no_invoice: formDataInvoice.no_invoice,
        nama_customer: formDataInvoice.nama_customer,
        alamat: formDataInvoice.alamat,
        pasien: formDataInvoice.pasien
      }
      const response = await __httpClient__.patch(`${import.meta.env.VITE_BASE_URL_NVC}/${prms}`, data);
      if (response.status === 200) {
        Swal.fire({
          title: "Success!",
          text: "Data has been successfully confirmed!",
          icon: "success"
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = '/invoice'
          }
        });
      } else {
        alert('Kontol');
      }
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div >
      <section>
        <input
          onChange={changeEvent}
          className="border border-black w-full rounded-md py-1 px-3 mt-3"
          type="text"
          name="no_invoice"
          id="no_invoice"
          placeholder="Masukan No Invoice"
          value={formDataInvoice.no_invoice || ""}
        />
        <input
          onChange={changeEvent}
          className="border border-black w-full rounded-md py-1 px-3 mt-3"
          type="text"
          name="nama_customer"
          id="nama_customer"
          placeholder="Masukan Nama Customer"
          value={formDataInvoice.nama_customer || ""}
        />
        <input
          onChange={changeEvent}
          className="border border-black w-full rounded-md py-1 px-3 mt-3"
          type="text"
          name="alamat"
          id="alamat"
          placeholder="Alamat .."
          value={formDataInvoice.alamat || ""}
        />
        <input
          onChange={changeEvent}
          className="border border-black w-full rounded-md py-1 px-3 mt-3"
          type="text"
          name="pasien"
          id="pasien"
          placeholder="Pasien"
          value={formDataInvoice.pasien || ""}
        />
      </section>
      <div>
        <Button title="Simpan Update Data" onClick={_2x3al} type="submit" className="bg-rose-500 text-slate-50 py-2 ml-3 px-3 rounded-md cursor-pointer"></Button>
      </div>
    </div>
  )
};

export default FormGroupEditInvoice;