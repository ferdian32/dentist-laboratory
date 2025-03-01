import { useContext } from "react";
import { __global__ } from "../__config__";

const FormGroup = () => {
  const { formDataBarang, setFormDataBarang } = useContext(__global__);
  console.log(formDataBarang);
  const { nama_barang, kode_item, satuan, harga_beli, harga_jual, supplier, no_telp } = formDataBarang;
  const changeEventHandler = (event) => {
    setFormDataBarang((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }))
  }
  return (
    <div className="h-[430px] px-3 overflow-scroll mb-3">
      <input
        onChange={changeEventHandler}
        type="text"
        name="nama_barang"
        id="barang"
        placeholder="Nama Barang"
        className="border border-black w-full rounded-md py-1 px-3 mt-3"
        value={nama_barang}
      />
      <input
        onChange={changeEventHandler}
        type="text"
        name="kode_item"
        id="kode_item"
        placeholder="kode item"
        className="border border-black w-full rounded-md py-1 px-3 mt-3"
        value={kode_item}
      />
      <input
        onChange={changeEventHandler}
        type="text"
        name="satuan"
        id="satuan"
        placeholder="satuan"
        className="border border-black w-full rounded-md py-1 px-3 mt-3"
        value={satuan}
      />
      <input
        onChange={changeEventHandler}
        type="number"

        name="harga_beli"
        id="harga_beli"
        placeholder="harga beli"
        className="border border-black w-full rounded-md py-1 px-3 mt-3"
        value={harga_beli}
      />
      <input
        onChange={changeEventHandler}
        type="number"

        name="harga_jual"
        id="harga_jual"
        placeholder="harga jual"
        className="border border-black w-full rounded-md py-1 px-3 mt-3"
        value={harga_jual}
      />
      <input
        onChange={changeEventHandler}
        type="text"

        name="supplier"
        id="supplier"
        placeholder="supplier"
        className="border border-black w-full rounded-md py-1 px-3 mt-3"
        value={supplier}
      />
      <input
        onChange={changeEventHandler}
        type="number"

        name="no_telp"
        id="no_telp"
        placeholder="Masukan Nomor telepon"
        className="border border-black w-full rounded-md py-1 px-3 mt-3"
        value={no_telp}
      />
    </div>
  )
};

export default FormGroup;