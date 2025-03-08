import { useContext } from "react"
import Input from "../elements/input"
import { __global__ } from "../__config__"

export function Tbody({ xyz, Sbt, grndT }) {
  const { ongkir, setOngkir, diskon, setDiskon } = useContext(__global__);
  return (
    <tbody>

      {xyz && xyz.map((zyx, index) => {
        return (

          <tr key={index} className={`${xyz.length === 1 ? "h-[100px]" : ""}`} >
            <td className="w-[50px]px-3 border-r-3  border-r-3-black text-center">{index + 1}</td>
            <td className="w-[135px] px-3 border-r-3 border-r-3-black text-center">{zyx.keterangan}</td>
            <td className="w-[280px] px-3 border-r-3 border-r-3-black ">{zyx.nama_barang}</td>
            <td className=" px-3 border-r-3 border-r-3-black text-center">{zyx.qty}</td>
            <td className="px-3 border-r-3 border-r-3-black text-center">{zyx.satuan}</td>
            <td className="w-[90px] px-3 border-r-3 border-r-3-black text-center">{zyx.harga_satuan}</td>
            <td className="px-3 border-r-2 border-r-2-black text-center">{zyx.harga_bruto}</td>
          </tr>
        )
      })}
      <tr  >
        <td colSpan={5} className="border-2 border-2-black relative" >
          <div className="flex justify-between px-10 absolute top-0 w-full">

            <div>
              <h3 className="font-bold">Dicetak Oleh:</h3>
              <p>Admin</p>
            </div>
            <div >
              <h3 className="font-bold">Diterima Oleh:</h3>
            </div>
          </div>
          <div className="border-t-2 border-t-2-black absolute bottom-0 right-0 px-10 w-full  italic">
            <h3>Terlampir: </h3>
          </div>
        </td>
        <td colSpan={2} className="border border-black">
          <div className="grid grid-cols-2 border-t-2 border-t-2-black">
            <div className="px-3 border-r-2 border-r-2-black">
              Subtotal
            </div>
            <div className="px-3 text-end">
              {Sbt}
            </div>
          </div>
          <div className="grid grid-cols-2 border-t-2 border-t-2-black">
            <div className="px-3 border-r-2 border-r-2-black">
              Ongkos Kirim
            </div>
            <div className="px-3 text-end">
              <Input type="number" name="ongkir" id="ongkir" className="w-14 mt-2 rounded-md px-3 outline-0" value={ongkir} onChange={(event) => setOngkir(event.target.value)}></Input>
            </div>

          </div>
          <div className="grid grid-cols-2 border-t-2 border-t-2-black">
            <div className="px-3 border-r-2 border-r-2-black">
              Diskon
            </div>
            <div className="px-3">
              <label htmlFor="diskon">

                <Input type="number" name="diskon" className="w-10  text-end rounded-md py-1 px-3 outline-0" id="diskon" value={diskon} onChange={(event) => setDiskon(event.target.value)} />
                %
              </label>
            </div>
          </div>
          <div className="grid grid-cols-2 border-t-2 border-t-2-black">
            <div className="py-2 px-3 border-r-2 border-r-2-black">
              Grandtotal
            </div>
            <div className="py-2   px-3 flex items-center justify-between">
              <div>

                Rp
              </div>
              {grndT}
            </div>
          </div>
        </td>
      </tr>

    </tbody >
  )
}