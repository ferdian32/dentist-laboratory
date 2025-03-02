import { columnRekap } from "../lib/data";
import Button from "../elements/button";
import TableRekap from "../components/tableRekap";
export default function RekapPenjualan() {
  return (
    <section className="bg-sky-300 w-full h-screen py-8 px-4">
      <div className="font-bold">
        <h3 className="text-md capitalize">King Dental Laboratory</h3>
        <h1 className="text-2xl uppercase">Data Rekap Penjualan</h1>
        <small className="capitalize">Tuesday, 25 february 2025</small>
      </div>
      {/* <ModalInvoice></ModalInvoice> */}
      <div>
        <Button
          title="tambah data "
          className="bg-sky-500 text-slate-50 my-3 py-1 px-3 rounded-md cursor-pointer"
          onClick={() => setIsOpen(true)}
        />

      </div>
      <TableRekap column={columnRekap}></TableRekap>
    </section>
  )
}