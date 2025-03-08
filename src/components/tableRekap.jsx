import Swal from "sweetalert2";
import { __httpClient__ } from "../lib/http";

const TableRekap = ({ column, rows, sc }) => {
  const _x20xb2 = async (no) => {
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
          const response = await __httpClient__.delete(`${import.meta.env.VITE_BASE_URL_KRP}/${no}`, {
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
              window.location.href = "/rekapPenjualan";
            }, 700);
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
        {rows && rows.filter((ys) => {
          return sc.toLowerCase() === '' ? ys : ys.nama_customer.toLowerCase().includes(sc)
        }).map((row, index) => {
          return (
            <tr key={row.no_invoice} className="bg-slate-50 py-2 px-3 text-sm">
              <td className="text-center border  border-black px-3">{index + 1}</td>
              <td className="text-center border  border-black px-3">{row.tgl_invoice ? new Date(row?.tgl_invoice).toDateString() : ''}</td>
              <td className="text-center border  border-black px-3">{row.no_invoice}</td>
              <td className="text-center border  border-black px-3">{row.nama_customer}</td>
              <td className="text-center border  border-black px-3">{row.alamat}</td>
              <td className="text-center border  border-black px-3">{row.pasien}</td>
              <td className="text-center border  border-black px-3">{row.grandTotal}</td>
              <td ><button className="bg-rose-500 cursor-pointer block ml-2 text-slate-50 py-1 px-3 rounded-md" onClick={() => _x20xb2(row.no_invoice)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" /></svg></button></td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
};
export default TableRekap;