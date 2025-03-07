
import { __httpClient__ } from "../lib/http";

const TableRekap = ({ column, rows, sc }) => {
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
            </tr>
          )
        })}
      </tbody>
    </table>
  )
};
export default TableRekap;