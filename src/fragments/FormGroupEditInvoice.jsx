import { useContext } from "react";
import { __global__ } from "../__config__";
import Button from "../elements/button";
import Swal from "sweetalert2";
import { __httpClient__ } from "../lib/http";
import Input from "../elements/input";
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
      const { no_invoice, nama_customer, alamat, pasien, order_id } = formDataInvoice;
      const data = {
        no_invoice,
        nama_customer,
        alamat,
        pasien,
        order_id
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
        alert('Failed');
      }
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div >
      <section>
        <div>
          <label htmlFor="no_invoice">No Invoice</label>
          <Input
            onChange={changeEvent}
            className="border border-black w-full rounded-md py-1 px-3 mt-3"
            type="text"
            name="no_invoice"
            id="no_invoice"
            placeholder="Masukan No Invoice"
            value={formDataInvoice.no_invoice || ""}
          />
        </div>
        <div>
          <label htmlFor="nama_customer">Nama Customer</label>
          <Input
            onChange={changeEvent}
            className="border border-black w-full rounded-md py-1 px-3 mt-3"
            type="text"
            name="nama_customer"
            id="nama_customer"
            placeholder="Masukan Nama Customer"
            value={formDataInvoice.nama_customer || ""}
          />
        </div>
        <div>
          <label htmlFor="alamat">Alamat</label>
          <Input
            onChange={changeEvent}
            className="border border-black w-full rounded-md py-1 px-3 mt-3"
            type="text"
            name="alamat"
            id="alamat"
            placeholder="Alamat .."
            value={formDataInvoice.alamat || ""}
          />
        </div>
        <div>
          <label htmlFor="pasien">Pasien</label>
          <Input
            onChange={changeEvent}
            className="border border-black w-full rounded-md py-1 px-3 mt-3"
            type="text"
            name="pasien"
            id="pasien"
            placeholder="Pasien"
            value={formDataInvoice.pasien || ""}
          />
        </div>
        <div>
          <label htmlFor="order_id">order Id</label>
          <Input
            onChange={changeEvent}
            className="border border-black w-full rounded-md py-1 px-3 mt-3"
            type="text"
            name="order_id"
            id="order_id"
            placeholder="Order Id"
            value={formDataInvoice.order_id || ""}
          />
        </div>
      </section>
      <div>
        <Button title="Simpan Update Data" onClick={_2x3al} type="submit" className="bg-rose-500 text-slate-50 py-2 mt-3 px-3 rounded-md cursor-pointer"></Button>
      </div>
    </div>
  )
};

export default FormGroupEditInvoice;