import FormEditGroupBarang from "../fragments/FormEditGroupBarang";
import { Navbar } from "../components/navbar";
import { useParams } from "react-router-dom";
import { __httpClient__ } from "../lib/http";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

export default function EditDataBarang() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    nama_barang: "",
    kode_item: "",
    satuan: "",
    harga_jual: 0
  });

  useEffect(() => {
    const get = async () => {
      try {
        const response = await __httpClient__.get(`${import.meta.env.VITE_BASE_URL_BRG}/${id}`);
        const json = await response.data;
        setFormData({
          nama_barang: json.data.nama_barang,
          kode_item: json.data.kode_item,
          satuan: json.data.satuan,
          harga_jual: json.data.harga_jual
        });
      } catch (err) {
        console.log(err);
      }
    };
    get();
  }, [id]);

  const SaveData = async (event) => {
    event.preventDefault();
    try {
      const _OAXs2 = {
        nama_barang: formData.nama_barang,
        kode_item: formData.kode_item,
        satuan: formData.satuan,
        harga_jual: formData.harga_jual
      };
      const response = await __httpClient__.patch(`${import.meta.env.VITE_BASE_URL_BRG}/${id}`, _OAXs2);
      if (response.status === 200) {
        Swal.fire({
          title: "Deleted!",
          text: "Your data has been updated.",
          icon: "success"
        });
        window.location.href = "/master-item";
      }
      return response;
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      <Navbar></Navbar>
      <section className="w-full h-screen py-8 px-20">

        <h1 className="text-center font-bold text-2xl italic">Form Edit Data Barang</h1>
        <form method="POST" action="" className="max-w-[500px]" onSubmit={SaveData}>
          <FormEditGroupBarang formDataBarang={formData} setFormData={setFormData} />
          <button type="submit" className="bg-blue-500 text-slate-50 block cursor-pointer rounded-md py-2 px-3 mt-4">Simpan data</button>
        </form>
      </section>
    </>
  );
}