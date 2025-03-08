import { useParams } from "react-router-dom";
import { _apsx2 } from "../lib/data";
import { useEffect, useState } from "react";
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
      <section className="grid grid-cols-2 ">
        <div>

          <h6 className="capitalize font-bold mb-3">{nama_customer}</h6>
          <p>Dengan Hormat, <br />
            Dengan ini kami beritahukan tagihan invoice pesanan gigi dokter selama bulan : <br />
            Sebagai Berikut,
          </p>
        </div>
        <div>
          <h1 className="text-xl"><strong><span className="text-3xl">King</span></strong> Dental Laboratory</h1>
        </div>
      </section>
      <section className="w-full mt-4 h-[400px] border-2 overflow-hidden">
        <div className="flex border-b-2">
          <p className="text-center uppercase font-bold px-2">No</p>
          {_apsx2 && _apsx2.map((_) => {
            return <div className="border-l-2 text-center uppercase font-bold  w-3/12">{_}</div>
          })}
        </div>
        <div className="flex h-full">
          <div className="  px-4">1</div>
          <div className="border-l-2  text-center w-3/12">{addr}</div>
          <div className="border-l-2  text-center w-3/12">

            {asx_2a && asx_2a.map((_) => {
              return <h3>{_.pasien}</h3>
            })}
          </div>
          <div className="border-l-2 text-center w-3/12">

            {asx_2a && asx_2a.map((_) => {
              return <h3>{_.tgl_invoice ? new Date(_.tgl_invoice).toLocaleDateString() : '-'}</h3>
            })}
          </div>
          <div className="border-l-2 text-center w-3/12">

            {asx_2a && asx_2a.map((_) => {
              return <h3>{_.no_invoice}</h3>
            })}
          </div>
          <div className="border-l-2 text-center w-3/12">

            {asx_2a && asx_2a.map((_) => {
              return <h3>{_.grandTotal}</h3>
            })}
          </div>
        </div>
      </section>
      <div className="flex items-center justify-between">
        <small className="px-20 text-lg">Hormat Kami,</small>
        <div className="grid grid-cols-2 w-[39%] ">
          <p className="px-4 uppercase font-semibold">Total Tagihan :</p>
          <div className="border-l-2 border-r-2 border-b-2 text-lg px-3 w-full">
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