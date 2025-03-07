import Swal from "sweetalert2";
import Button from "../elements/button";
import { __httpClient__ } from "../lib/http";
import { useNavigate } from "react-router-dom";
export default function Table({ column, rows }) {
  const navigate = useNavigate();

  const obfu_2x = async (id) => {
    const d2xa = await Swal.fire({
      title: "Are you Sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    });
    if (d2xa.isConfirmed) {
      try {
        const response = await __httpClient__.delete(`${import.meta.env.VITE_BASE_URL_BRG}/${id}`);
        if (response.status === 200) {
          Swal.fire({
            title: "Deleted!",
            text: "Your data has been deleted.",
            icon: "success"
          });
          window.location.href = "/master-item";
        }
        return response;
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
    <table className="w-[800px] overflow-y-scroll">
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
                  <button onClick={() => obfu_2x(row.id)} className="bg-rose-500 text-slate-50 py-2 px-3 rounded-md cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path></svg>
                  </button>
                  <button onClick={() => navigate(`/editDataBarang/${row.id}`)} className="bg-orange-500 text-slate-50 py-2 px-3 rounded-md cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path></g></svg>
                  </button>
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
