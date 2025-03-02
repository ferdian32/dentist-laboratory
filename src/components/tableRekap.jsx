import { useEffect, useState } from "react";
import { __httpClient__ } from "../lib/http";

const TableRekap = ({ column }) => {
  return (
    <table className="w-[800px]">
      <thead className="border border-slate-50">
        <tr>
          {column &&
            column.map((item, index) => {
              return (
                <th
                  key={index}
                  className="py-2 px-5 text-slate-50 bg-sky-500 border border-slate-50"
                >
                  {item}
                </th>
              );
            })}
        </tr>
      </thead>
      {/* <tbody>
        {nvc &&
          nvc.map((data, index) => {
            return (
              <tr key={index} className="bg-slate-50 py-2 px-3 text-sm  ">
                <td className="border border-black px-3">{data.tgl_invoice}</td>
                <td className="border border-black px-3">{data.no_invoice}</td>
                <td className="border border-black px-3">{data.nama_customer}</td>
                <td className="border border-black px-3">{data.alamat}</td>
                <td className="border border-black px-3">{data.pasien}</td>
                <td className="border border-black px-3">
                  {penjualan && penjualan.filter((dp) => data.no_invoice === dp.no_invoice).map((d, index) => {
                    return (
                      <p key={index} >{d.keterangan}</p>
                    )
                  })}
                </td>
                <td className="border border-black px-3">
                  {penjualan && penjualan.filter((dp) => data.no_invoice === dp.no_invoice).map((d, index) => {
                    return (
                      <p key={index} >{d.nama_barang}</p>
                    )
                  })}
                </td>
                <td className="border border-black px-3">
                  {penjualan && penjualan.filter((dp) => data.no_invoice === dp.no_invoice).map((d, index) => {
                    return (
                      <p key={index}>{d.qty}</p>
                    )
                  })}
                </td>
                <td className="border border-black px-3">
                  {penjualan && penjualan.filter((dp) => data.no_invoice === dp.no_invoice).map((d, index) => {
                    return (
                      <p key={index}>{d.harga_satuan}</p>
                    )
                  })}
                </td>
                <td className="border border-black px-3">
                  {penjualan && penjualan.filter((dp) => data.no_invoice === dp.no_invoice).map((d, index) => {
                    return (
                      <p key={index}>{d.harga_bruto}</p>
                    )
                  })}
                </td>
                <td className="border border-black px-3 font-bold">
                  {penjualan && penjualan.filter((dp) => data.no_invoice === dp.no_invoice).reduce((acc, crn) => {
                    let net_invoice = acc + crn?.harga_bruto
                    return net_invoice
                  }, 0)}
                </td>
              </tr>
            );
          })}
      </tbody> */}
    </table>
  )
};
export default TableRekap;