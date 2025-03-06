import { useContext, useState, useEffect, Fragment } from "react"
import Table from "../components/table";
import Button from "../elements/button"
import { __global__ } from "../__config__";
import { Navbar } from "../components/navbar";
import { column } from "../lib/data";
import ModalElement from "../components/modal";
import { __httpClient__ } from "../lib/http";
export default function MasterItem() {
  const { setIsOpen, results, setResults, ld, setLd } = useContext(__global__);
  useEffect(() => {
    const get = async () => {
      await __httpClient__.get(import.meta.env.VITE_BASE_URL_BRG)
        .then((results) => {
          const json = results.data
          setResults(json.data)
          setTimeout(() => {
            setLd(false)
          }, 700)
        }).catch((err) => {
          console.log(err)
        });

    };
    get();
  }, [])
  if (ld) return <div className="w-full h-screen flex items-center justify-center text-2xl font-bold italic">Load....</div>
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
        <Table column={column} rows={results}></Table>
        <ModalElement></ModalElement>
      </section>
    </Fragment>
  )
}