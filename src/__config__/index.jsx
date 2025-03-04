import { createContext, useState } from "react";

export const __global__ = createContext(null);
export const __local__ = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dataPenjualan, setDataPenjualan] = useState([]);
  const [xyz, setXyz] = useState([]);
  const [ongkir, setOngkir] = useState(0);
  const [diskon, setDiskon] = useState(0);
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
    harga_bruto: 0
  })
  return (
    <__global__.Provider value={{ isOpen, setIsOpen, formDataBarang, setDataPenjualan, dataPenjualan, setFormDataBarang, formDataPenjualan, setFormDataPenjualan, xyz, setXyz, ongkir, setOngkir, diskon, setDiskon }}>
      {children}
    </__global__.Provider>
  )
}