import { useEffect, useState } from "react";
import { __httpClient__ } from "../lib/http";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const TableInvoice = ({ column, nvc }) => {
  const [penjualan, setPenjualan] = useState([]);
  useEffect(() => {
    const get = async () => {
      const response = await __httpClient__.get(import.meta.env.VITE_BASE_URL_PNJL);
      const json = await response?.data;
      setPenjualan(json?.data);
    };
    get();
  }, []);
  const handleDeleteButton = async (no) => {
    try {
      const result = await Swal.fire({
        title: "Are you Sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      });

      if (result.isConfirmed) {
        try {
          const response = await fetch(`http://localhost:3000/invoice/${no}`, {
            method: 'DELETE',
          });
          console.log(response);
          if (response.status === 200 || response.status === 204) {
            Swal.fire({
              title: "Deleted!",
              text: "Your data has been deleted.",
              icon: "success"
            });
            setTimeout(() => {
              window.location.href = "/invoice";
            }, 1000);
          }
        } catch (error) {
          console.error("Delete Error:", error);
          Swal.fire({
            title: "Error!",
            text: "There was an error deleting your data.",
            icon: "error"
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

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
      <tbody>
        {nvc &&
          nvc.map((data, index) => {
            return (
              <tr key={index} className="bg-slate-50 py-2 px-3 text-sm  ">
                <td className="border border-black px-3">{data.tgl_invoice ? new Date(data?.tgl_invoice).toDateString() : ''}</td>
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
                <td >

                  <div className="flex gap-x-3  p-3">
                    <button className="bg-rose-500 cursor-pointer text-slate-50 py-1 px-3 rounded-md" onClick={() => handleDeleteButton(data.no_invoice)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" /></svg>
                    </button>
                    <Link to={`/editDataInvoice/${data.id_invoice}`} className="bg-orange-500 cursor-pointer text-slate-50 py-1 px-3 rounded-md">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M7 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0-2.97-2.97L9 12v3h3zM16 5l3 3" /></g></svg>
                    </Link >
                  </div>

                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  )
};
export default TableInvoice;