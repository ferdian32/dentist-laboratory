import { Fragment, useContext } from "react";
import { __global__ } from "../__config__";
import { __httpClient__ } from "../lib/http";
const FormGroupPenjualan = ({ setFormData, formData, invoice }) => {
  console.log(formData);
  const { setDataPenjualan, dataPenjualan } = useContext(__global__);
  const ChangeEventHandler = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }))
  }
  const addData = () => {
    const { no_invoice,keterangan, nama_barang, qty, harga_satuan } = formData;
    const data = {
      no_invoice,
      keterangan,
      nama_barang,
      qty,
      harga_satuan,
      harga_bruto: harga_satuan * qty
    };

    const newData = [...dataPenjualan, data];
    console.log(newData)
    setDataPenjualan(newData);
    if (newData) {

      setFormData({ no_invoice: "",keterangan, nama_barang: "", quantity: 0, harga_satuan: 0, harga_bruto: 0 })
    }
  };

  return (
    <Fragment>
      <div>
        <select name="no_invoice" id="no_invoice" className="border border-black px-3" onChange={ChangeEventHandler}>
          <option value="">Pilih No Invoice</option>
          {invoice && invoice.map((data) => {
            return (

              <option key={data?.no_invoice} value={data?.no_invoice}>{data?.no_invoice}</option>
            )
          })}
        </select>
      </div>
      <div className="flex flex-col">
        <label htmlFor="keterangan">Keterangan</label>
        <input required onChange={ChangeEventHandler} value={formData?.keterangan} className="border border-black px-3" type="text" name="keterangan" id="keterangan" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="nama_barang">Nama Barang</label>
        <input required onChange={ChangeEventHandler} value={formData?.nama_barang} className="border border-black px-3" type="text" name="nama_barang" id="nama_barang"/>
      </div>
      <div className="flex flex-col">
        <label htmlFor="qty">Quantity</label>
        <input required onChange={ChangeEventHandler} value={formData?.number} className="border border-black px-3" type="number" name="qty" id="qty"/>
      </div>
      <div className="flex flex-col">
        <label htmlFor="harga_satuan">harga satuan</label>
        <input required onChange={ChangeEventHandler} value={formData?.harga_satuan} className="border border-black px-3" type="number" name="harga_satuan" id="harga_satuan" />
      </div>
      <div>

        <button className="bg-black mt-3 text-slate-50 py-2 px-3 rounded-md" onClick={addData}>Tambah Data</button>

      </div>
    </Fragment>
  )
};

export default FormGroupPenjualan;