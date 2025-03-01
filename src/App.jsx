import { dataTransaksi } from "./lib/data";
import { Link } from "react-router-dom";
const App = () => {
  return (
    <main className="w-full h-screen overflow-hidden ">
      <section className="w-[800px] block my-20 mx-auto  ">
        <div className="flex gap-x-3 items-center ">
          <img src="/images/logo.jpg" alt="logo" className="w-40 h-40" />
          <h1 className="text-6xl text-green-500 font-bold italic">
            King{" "}
            <span className="text-black text-5xl">Dental Laboratory</span>{" "}
          </h1>
        </div>
      </section>
      <section className="bg-orange-500 h-80 grid place-items-center text-slate-50 py-8">
        <div>
          <div className="mb-5 text-center w-64 block my-0 mx-auto bg-sky-500 py-2 px-3 rounded-md">
            <h1>Transaksi Jual Beli & Kontrol Stok</h1>
          </div>
          {dataTransaksi ? (
            dataTransaksi.map((data, index) => {
              return (
                <Link
                  to={data.path}
                  key={index}
                  className="bg-sky-500 mr-3 py-2 px-3 cursor-pointer uppercase rounded-md border-slate-50 border"
                >
                  {data.name}
                </Link>
              );
            })
          ) : (
            <h1>Tidak Ada Data</h1>
          )}
        </div>
      </section>
    </main>
  );
}
export default App;
