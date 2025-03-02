import { columnPrintInvoice } from "../lib/data";
import { useRef, useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { __global__ } from "../__config__";
import Button from "../elements/button";
import { __httpClient__ } from "../lib/http";
import { Tbody } from "../fragments/tbody";
import { Thead } from "../fragments/thead";
import { useReactToPrint } from "react-to-print";

export default function PrintInvoice() {
  const { xyz, setXyz, ongkir, diskon } = useContext(__global__);
  const [nvc, setNvc] = useState([]);

  const contentRef = useRef()
  const { no_invoice } = useParams();
  useEffect(() => {
    const getData = async () => {
      await __httpClient__.get(import.meta.env.VITE_BASE_URL_NVC)
        .then((results) => {
          const fnd = results.data.data.find((f) => f?.no_invoice === no_invoice);
          setNvc(fnd);
        }).catch((err) => {
          console.log(err);
        });
    }
    getData();
  }, []);
  useEffect(() => {
    const getData = async () => {
      await __httpClient__.get(import.meta.env.VITE_BASE_URL_PNJL)
        .then((results) => {
          const fnd = results.data.data.filter((f) => f?.no_invoice === no_invoice);
          setXyz(fnd);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    getData();
  }, []);
  const Sbt = xyz.reduce((x, y) => x + y.harga_bruto, 0);
  let grndT = (Number(Sbt) + Number(ongkir)) - (Number(Sbt) / 100 * Number(diskon));

  const HandlePrint = () => {
    console.log('window is called')
    window.print()

  }
  return (
    <section className="lg:w-[800px] md:w-[800px] w-full px-3  overflow-hidden" >
      <div ref={contentRef}>

        <div className="grid grid-cols-2   p-5">
          <div>
            <h1><strong>King</strong> Dental Laboratory</h1>
            <p>Jl. Marinir raya, Gg. Rejeki no.02 rt.02 rw.05, Perwira, Bekasi Utara, Bekasi Kota
              Phone/wa : 081 389 457 457
            </p>
            <h6><strong>Kepada:</strong></h6>
            <div className="flex justify-between items-center">
              <div className="leading-6">

                <p>{nvc.nama_customer}</p>
                <p>{nvc.nama_pasien}</p>
              </div>
              <div>
                <p>{nvc.alamat}</p>
              </div>
            </div>
          </div>
          <div className="px-3 text-end ">
            <ul className="" >
              <li className="text-sm py-2">Tanggal Invoice  : <strong>{nvc.tgl_invoice ? new Date(nvc.tgl_invoice).toLocaleDateString() : 'tidak ada tanggal'}</strong>
              </li>
              <li className="text-sm py-2">
                Tanggal Jatuh Tempo:
                <strong>
                  {nvc.tgl_invoice
                    ? new Date(new Date(nvc.tgl_invoice).setDate(new Date(nvc.tgl_invoice).getDate() + 30)).toLocaleDateString()
                    : 'tidak ada tanggal'}
                </strong>
              </li>
              <li className="text-sm py-2">No Invoice  : <strong>{nvc.no_invoice}</strong>
              </li>

            </ul>
          </div>
        </div >
        <table className="w-full" >
          <Thead columnPrintInvoice={columnPrintInvoice}></Thead>
          <Tbody xyz={xyz} Sbt={Sbt} grndT={grndT} ></Tbody>
        </table>
      </div >
      <Button title="print invoice" className={`py-1 px-3 bg-black  text-slate-50 mt-3 rounded-sm cursor-pointer absolute no-print `} onClick={HandlePrint}>
        Print Invoice
      </Button>
    </section >
  )
}
