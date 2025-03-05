import Swal from "sweetalert2";
import Button from "../elements/button";
import { __httpClient__ } from "../lib/http";
import { useNavigate } from "react-router-dom";
export default function Table({ column, rows }) {
  const navigate = useNavigate();

  const obfu_2x = async (id) => {
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
        const response = await __httpClient__.delete(`${import.meta.env.VITE_BASE_URL_BRG}/${id}`);
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


  return (
    <table className="w-[00px] overflow-y-scroll">
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
                <td>{row.harga_jual}</td>
                <td className="flex gap-x-3 p-3">
                  <Button onClick={() => obfu_2x(row.kode_item)} className="bg-rose-500 text-slate-50 py-2 px-3 rounded-md cursor-pointer" title="hapus data"></Button>
                  <Button onClick={() => navigate(`/editDataBarang/${row.kode_item}`)} className="bg-orange-500 text-slate-50 py-2 px-3 rounded-md cursor-pointer" title="edit data"></Button>
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
