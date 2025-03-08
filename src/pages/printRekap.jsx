import { useParams } from "react-router-dom";
import { _apsx2 } from "../lib/data";
import { useEffect, useState } from "react";
import Body from "../fragments/body";
import Header from "../fragments/header";
import { __httpClient__ } from "../lib/http";
import Button from "../elements/button";
export default function PrintRekap() {
  const { nama_customer } = useParams();
  const [asx_2a, setAsx_2a] = useState([]);
  const [addr, setAddr] = useState("");
  useEffect(() => {
    const _axs = async () => {
      await __httpClient__.get(import.meta.env.VITE_BASE_URL_KRP)
        .then((js) => {
          const re_s2xa = js.data;
          const _xaws = re_s2xa.data.filter((_) => _.nama_customer.toLowerCase() === nama_customer);
          const f_ndx = _xaws.find((_) => _.nama_customer.toLowerCase() === nama_customer);
          setAddr(f_ndx.alamat);
          setAsx_2a(_xaws);
        })
        .catch((e) => {
          console.log(e);
        })
    }
    _axs();
  }, []);
  const _of2xa = () => {
    window.print()
  }
  return (
    <main className="w-full  overflow-hidden py-8 px-10">
      <small className="">Kepada yth : </small>
      <Header _axs2={nama_customer} />
      <Body _apsx2={_apsx2} asx_2a={asx_2a} addr={addr} />
      <div className="flex items-center justify-between">
        <small className="px-20 text-lg">Hormat Kami,</small>
        <div className="grid grid-cols-2 w-[39%] ">
          <p className="px-4 uppercase font-semibold">Total Tagihan :</p>
          <div className="border-l-2 border-r-2 border-b-2 text-xl  text-center px-3 w-full">
            <small>Rp {asx_2a.reduce((x, y) => x + y.grandTotal, 0)}</small>
          </div>
        </div>
      </div>
      <Button title="print invoice" className={`py-1 px-3 bg-black  text-slate-50 mt-3 rounded-sm cursor-pointer absolute no-print `} onClick={_of2xa}>
        Print Invoice
      </Button>
    </main>
  )
}