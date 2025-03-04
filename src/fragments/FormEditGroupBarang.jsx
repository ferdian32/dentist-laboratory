import Input from "../elements/input";
import { useContext } from "react";
import { __global__ } from "../__config__";
export default function FormEditGroupBarang({ formDataBarang, setFormData }) {
  const onChange = (event) => {
    setFormData({
      ...formDataBarang,
      [event.target.name]: event.target.value
    })
  }
  return (
    <div>
      <div>
        <label htmlFor="nama_barang" className="mb-4">Nama Barang</label>
        <Input type="text" value={formDataBarang.nama_barang || ""} placeholder="Nama Barang" name="nama_barang" id="nama_barang" className="border py-2 px-3 border-black rounded-md outline-0 w-full" onChange={onChange}></Input>
      </div>
      <div>
        <label htmlFor="kode_item" className="mb-4">Kode Item</label>
        <Input type="text" onChange={onChange} value={formDataBarang.kode_item || ""} placeholder="kode_item" name="kode_item" id="kode_item" className="border py-2 px-3 border-black rounded-md outline-0 w-full"></Input>
      </div>
      <div>
        <label htmlFor="satuan" className="mb-4">Satuan</label>
        <Input type="text" onChange={onChange} value={formDataBarang.satuan || ""} placeholder="Satuan" name="satuan" id="satuan" className="border py-2 px-3 border-black rounded-md outline-0 w-full"></Input>
      </div>
      <div>
        <label htmlFor="harga_jual" className="mb-4">Harga Jual</label>
        <Input type="number" onChange={onChange} value={formDataBarang.harga_jual || ""} placeholder="Harga Jual" name="harga_jual" id="harga_jual" className="border py-2 px-3 border-black rounded-md outline-0 w-full"></Input>
      </div>
    </div>
  )
}