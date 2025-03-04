import { useContext } from "react";
import { __global__ } from "../__config__";
import Input from "../elements/input";
const FormGroup = () => {
  const { formDataBarang, setFormDataBarang } = useContext(__global__);
  const { nama_barang, kode_item, satuan, harga_jual } = formDataBarang;
  const changeEventHandler = (event) => {
    setFormDataBarang((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }))
  }
  return (
    <div className="h-[430px] px-3 overflow-scroll mb-3">
      <div>

        <label className="font-bold italic" htmlFor="nama_barang">Nama Barang</label>
        <Input
          onChange={changeEventHandler}
          type="text"
          name="nama_barang"
          id="barang"
          placeholder="Nama Barang"
          className="border border-black w-full rounded-md py-1 px-3 mt-3"
          value={nama_barang}
        />
      </div>
      <div>
        <label className="font-bold italic" htmlFor="kode_item">Kode Item</label>
        <Input
          onChange={changeEventHandler}
          type="text"
          name="kode_item"
          id="kode_item"
          placeholder="kode item"
          className="border border-black w-full rounded-md py-1 px-3 mt-3"
          value={kode_item}
        />
      </div>
      <div>
        <label className="font-bold italic" htmlFor="satuan">Satuan</label>
        <Input
          onChange={changeEventHandler}
          type="text"
          name="satuan"
          id="satuan"
          placeholder="satuan"
          className="border border-black w-full rounded-md py-1 px-3 mt-3"
          value={satuan}
        />
      </div>
      <div>
        <label className="font-bold italic" htmlFor="harga_jual">Harga Jual</label>
        <Input
          onChange={changeEventHandler}
          type="number"
          name="harga_jual"
          id="harga_jual"
          placeholder="harga jual"
          className="border border-black w-full rounded-md py-1 px-3 mt-3"
          value={harga_jual}
        />
      </div>
    </div>
  )
};

export default FormGroup;