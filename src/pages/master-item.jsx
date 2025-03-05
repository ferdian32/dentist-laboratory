import { useContext, useState, useEffect, Fragment } from "react"
import DataTable from "react-data-table-component";
import Button from "../elements/button"
import { __global__ } from "../__config__";
import { Navbar } from "../components/navbar";
// import { column } from "../lib/data";
// import Button from "../elements/button";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import ModalElement from "../components/modal";
import { __httpClient__ } from "../lib/http";
export default function MasterItem() {
  const { setIsOpen } = useContext(__global__);
  const [results, setResults] = useState("");
  const navigate = useNavigate();
  const columns = [
    {
      name: 'Nama Barang',
      selector: (row) => row.nama_barang,
      sortable: true,
    },
    {
      name: 'Kode Item',
      selector: (row) => row.kode_item,
      sortable: true,
    },
    {
      name: 'Satuan',
      selector: (row) => row.satuan,
      sortable: true,
    },

    {
      name: 'Harga Jual',
      selector: (row) => row.harga_jual,
      sortable: true,

    },
    {
      name: 'Actions',
      cell: (row) => (
        <div className="py-3 px-3 ">
          <button onClick={() => navigate(`/editDataBarang/${row.id}`)} className="bg-orange-500 cursor-pointer text-slate-50 rounded-md py-1 px-2 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M7 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0-2.97-2.97L9 12v3h3zM16 5l3 3" /></g></svg>
          </button>
          <button onClick={() => obfu_2x(row.id)} className="bg-red-500 ml-3 cursor-pointer text-slate-50 rounded-md py-1 px-2 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" /></svg>
          </button>
        </div>
      ),
    },
  ];
  const obfu_2x = async (id) => {
    const result = await Swal.fire({
      title: "Are you Sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    });

    if (result.isConfirmed) {
      try {
        const response = await __httpClient__.delete(`${import.meta.env.VITE_BASE_URL_BRG}/${id}`)
        if (response) {
          Swal.fire({
            title: "Deleted!",
            text: "Your data has been deleted.",
            icon: "success"
          });
          window.location.href = "/master-item";
        }
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: "There was an error deleting your data.",
          icon: "error"
        });
      }
    }
  };
  useEffect(() => {
    const get = async () => {
      await __httpClient__.get(import.meta.env.VITE_BASE_URL_BRG)
        .then((results) => {
          const json = results.data
          setResults(json.data)
        }).catch((err) => {
          console.log(err)
        });

    };
    get();
  }, [])
  return (
    <Fragment>
      <Navbar></Navbar>
      <section className="bg-sky-300 w-full h-screen overflow-hidden py-8 px-4">
        <div className="font-bold">
          <h3 className="text-md capitalize">King Dental Laboratory</h3>
          <h1 className="text-2xl uppercase">Master item</h1>
          <small className="capitalize">Tuesday, 25 february 2025</small>
        </div>

        <Button
          title="tambah data"
          className="bg-sky-500 text-slate-50 my-3 py-1 px-3 rounded-md cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
        <DataTable columns={columns} data={results} pagination></DataTable>
        <ModalElement></ModalElement>
      </section>
    </Fragment>
  )
}