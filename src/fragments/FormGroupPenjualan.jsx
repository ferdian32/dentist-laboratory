import { Fragment, useContext, useEffect, useState } from "react";
import { __global__ } from "../__config__";
import { __httpClient__ } from "../lib/http";
const FormGroupPenjualan = ({ setFormDataPenjualan, formDataPenjualan, invoice }) => {
  const { setDataPenjualan, dataPenjualan, onChange } = useContext(__global__);
  const [objx_021, setObjx_021] = useState([])
  useEffect(() => {
    const get = async () => {
      await __httpClient__.get(import.meta.env.VITE_BASE_URL_BRG)
        .then((results) => {
          const json = results.data
          setObjx_021(json.data)
        }).catch((err) => {
          console.log(err)
        });

    };
    get();
  }, [])
  const ChangeEventHandler = (event) => {
    setFormDataPenjualan((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }))
  }
  const kn_tl = objx_021.find((_) => _.nama_barang === formDataPenjualan.nama_barang);
  const obs_2xa = kn_tl ? kn_tl : 0
  const addData = () => {
    const { no_invoice, keterangan, nama_barang, qty } = formDataPenjualan;
    const data = {
      no_invoice,
      keterangan,
      nama_barang,
      qty,
      harga_satuan: obs_2xa.harga_jual,
      harga_bruto: obs_2xa.harga_jual * qty
    };

    const newData = [...dataPenjualan, data];
    setDataPenjualan(newData);
    if (newData) {
      setFormDataPenjualan({ no_invoice: "", keterangan: "", nama_barang: "", qty: 0, harga_satuan: 0, harga_bruto: 0 })
    }
  };

  return (
    <div className="grid grid-cols-2 gap-x-3">
      <section>

        <div>
          <select name="no_invoice" id="no_invoice" className="border border-black px-3" onChange={ChangeEventHandler} value={formDataPenjualan.no_invoice}>
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
          <input required onChange={ChangeEventHandler} value={formDataPenjualan.keterangan} className="border border-black px-3" type="text" name="keterangan" id="keterangan" />
        </div>


        <div className="flex flex-col">
          <label htmlFor="harga_satuan">Nama Barang</label>
          <select name="nama_barang" id="nama_barang" className="border border-black px-3" onChange={ChangeEventHandler} value={formDataPenjualan.nama_barang}>
            <option value="">Pilih Nama Barang</option>
            {objx_021 && objx_021.map((_) => {
              return (
                <option key={_?.nama_barang} value={_?.nama_barang}>{_?.nama_barang}</option>
              )
            })}
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="qty">Quantity</label>
          <input required onChange={ChangeEventHandler} value={formDataPenjualan?.qty} className="border border-black px-3" type="number" name="qty" id="qty" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="nama_barang">Harga Jual</label>
          <h3 className="border border-gray-500 rounded-sm px-3">{obs_2xa.harga_jual ? obs_2xa.harga_jual : 0}</h3>
        </div>
        <div>
          <button className="bg-black mt-3 text-slate-50 py-2 px-3 rounded-md" onClick={addData}>Tambah Data</button>

        </div>
      </section>
      <section>
        <div>
          <label htmlFor="nama_customer">Nama Customer</label>
          <input
            onChange={onChange}
            className="border border-black w-full rounded-md py-1 px-3 mt-3"
            label="nama customer"
            type="text"
            name="nama_customer"
            id="nama_customer"
            placeholder="Masukan Nama Customer"

          />
        </div>
        <div>
          <label htmlFor="alamat">Alamat</label>
          <input
            onChange={onChange}
            className="border border-black w-full rounded-md py-1 px-3 mt-3"
            label="alamat"
            type="text"
            name="alamat"
            id="alamat"
            placeholder="Alamat .."
          />
        </div>
        <div>
          <label htmlFor="pasien">Pasien</label>
          <input
            onChange={onChange}
            className="border border-black w-full rounded-md py-1 px-3 mt-3"
            label="pasien"
            type="text"
            name="pasien"
            id="pasien"
            placeholder="Pasien"
          />
        </div>
      </section>
    </div>
  )
};

export default FormGroupPenjualan;