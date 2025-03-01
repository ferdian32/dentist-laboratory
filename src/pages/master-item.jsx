import { useContext, useState, useEffect } from "react"
import Button from "../elements/button"
import { __global__ } from "../__config__";
import { column } from "../lib/data";
import Table from "../components/table";
import ModalElement from "../components/modal";
import { __httpClient__ } from "../lib/http";
export default function MasterItem() {
  const { setIsOpen } = useContext(__global__);
  const [results, setResults] = useState("")
  useEffect(() => {
    const get = async () => {
      try {
        const response = await __httpClient__.get(import.meta.env.VITE_BASE_URL_BRG);
        const json = response.data
        setResults(json.data)
      } catch (error) {
        consolle.log(error);
      }
    };
    get();
  }, [])
  return (
    <section className="bg-sky-300 w-full h-screen py-8 px-4">
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
  )
}