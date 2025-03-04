import Swal from "sweetalert2";
import Button from "../elements/button";
import { __httpClient__ } from "../lib/http";
export default function Table({ column, rows }) {
 


  return (
    <table className="max-w-[1000px] ">
      <thead className="border border-slate-50">
        <tr>
          {column &&
            column.map((data, index) => {
              return (
                <th className="bg-blue-500 text-slate-50 py-2 px-3" key={index}>
                  {data}
                </th>
              );
            })}
        </tr>
      </thead>
      <tbody>
        {rows.length > 0 ? (
          rows.map((row, index) => {
            return (
              <tr
                key={index}
                className="bg-slate-50 text-black border text-center"
              >
                <td>{index + 1}</td>
                <td>{row.nama_barang}</td>
                <td>{row.kode_item}</td>
                <td>{row.satuan}</td>
                <td>{row.harga_beli}</td>
                <td>{row.harga_jual}</td>
                <td>{row.supplier}</td>
                <td>{row.no_telp}</td>
                <td className="flex gap-x-3 p-3">
                  <Button onClick={() => deleteData(row.kode_item)} className="bg-rose-500 text-slate-50 py-2 px-3 rounded-md cursor-pointer" title="hapus data"></Button>
                  <Button className="bg-orange-500 text-slate-50 py-2 px-3 rounded-md cursor-pointer" title="edit data"></Button>
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td>Tidak Ditemukan data</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}
