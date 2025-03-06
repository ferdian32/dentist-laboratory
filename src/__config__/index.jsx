import { createContext, useState } from "react";
import { __httpClient__ } from "../lib/http";
import Swal from "sweetalert2";
export const __global__ = createContext(null);
export const __local__ = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dataPenjualan, setDataPenjualan] = useState([]);
  const [UpdatedataPenjualan, setUpdatedataPenjualan] = useState([]);
  const [xyz, setXyz] = useState([]);
  const [ongkir, setOngkir] = useState(0);
  const [diskon, setDiskon] = useState(0);
  const [results, setResults] = useState("");
  const [px23, setPx23] = useState("");
  const [objx_021, setObjx_021] = useState([]);
  const [formDataBarang, setFormDataBarang] = useState({
    nama_barang: "",
    kode_item: "",
    satuan: "",
    harga_jual: "",
  });
  const [formDataPenjualan, setFormDataPenjualan] = useState({
    no_invoice: "",
    keterangan: "",
    nama_barang: "",
    qty: 0,
    harga_satuan: 0,
    harga_bruto: 0,
  })
  const [formDataInvoice, setFormDataInvoice] = useState({
    no_invoice: "",
    nama_customer: "",
    alamat: "",
    pasien: "",
  });
  // const onChange = (event) => {
  //   setFormDataInvoice((prev) => ({
  //     ...prev,
  //     [event.target.name]: event.target.value
  //   }))
  // }

  return (
    <__global__.Provider value={{ isOpen, setIsOpen, formDataBarang, setDataPenjualan, dataPenjualan, setFormDataBarang, formDataPenjualan, setFormDataPenjualan, xyz, setXyz, ongkir, setOngkir, diskon, setDiskon, formDataInvoice, setFormDataInvoice, results, setResults, px23, setPx23, objx_021, setObjx_021, UpdatedataPenjualan, setUpdatedataPenjualan }}>
      {children}
    </__global__.Provider>
  )
}