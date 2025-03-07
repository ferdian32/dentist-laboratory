import { Fragment, useContext, useEffect, useState } from "react";
import Button from "../elements/button";
import Swal from "sweetalert2";
import { __global__ } from "../__config__";
import { __httpClient__ } from "../lib/http";
const FormGroupPenjualan = ({ setFormDataPenjualan, formDataPenjualan, invoice }) => {
  const { setDataPenjualan, dataPenjualan, setObjx_021, objx_021 } = useContext(__global__);
  const [nvc, setNvc] = useState([]);
  useEffect(() => {
    const get = async () => {
      await __httpClient__.get(import.meta.env.VITE_BASE_URL_BRG)
        .then((results) => {
          const json = results.data;
          setObjx_021(json.data)
        }).catch((err) => {
          console.log(err)
        });

    };
    get();
  }, [])
  useEffect(() => {
    const get = async () => {
      await __httpClient__.get(import.meta.env.VITE_BASE_URL_NVC)
        .then((results) => {
          const json = results.data;
          setNvc(json.data)
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
  const d = nvc.find((x) => x.no_invoice === formDataPenjualan.no_invoice);
  const obs_2xa = kn_tl ? kn_tl : 0
  const addData = () => {
    const { no_invoice, keterangan, nama_barang, qty } = formDataPenjualan;
    const data = {
      id_invoice: d.id_invoice,
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

  const knt_2xl = async () => {
    try {
      const _p2x0 = await __httpClient__.post(import.meta.env.VITE_BASE_URL_PNJL, dataPenjualan)
      if (_p2x0) {
        Swal.fire({
          title: "Success!",
          text: "Data has been successfully confirmed!",
          icon: "success"
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = '/invoice'
          }
        });
      }
    } catch (error) {
      console.log("Error saat menyimpan data:", error);
      alert("Terjadi kesalahan saat menyimpan data. Coba lagi.");
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
          <Button title="Tambah Data" className="bg-black mt-3 text-slate-50 py-2 px-3 rounded-md" onClick={addData}></Button>
          <Button title="Simpan Data" onClick={knt_2xl} type="submit" className="bg-rose-500 text-slate-50 py-2 ml-3 px-3 rounded-md cursor-pointer"></Button>
        </div>
      </section>

    </div>
  )
};

export default FormGroupPenjualan;