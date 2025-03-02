import { useContext } from "react"
import Input from "../elements/input"
import { __global__ } from "../__config__"

export function Tbody({ xyz, Sbt, grndT }) {
  const { ongkir, setOngkir, diskon, setDiskon } = useContext(__global__);
  return (
    <tbody>
      {xyz && xyz.map((zyx, index) => {
        return (

          <tr key={index}>
            <td className="w-[50px] py-2 px-3 border-2 border-2-black">{index + 1}</td>
            <td className="py-2 px-3 border-2 border-2-black">{zyx.keterangan}</td>
            <td className="py-2 px-3 border-2 border-2-black">{zyx.nama_barang}</td>
            <td className="py-2 px-3 border-2 border-2-black">{zyx.qty}</td>
            <td className="py-2 px-3 border-2 border-2-black">Rp {zyx.harga_satuan}</td>
            <td className="py-2 px-3 border-2 border-2-black">Rp {zyx.harga_bruto}</td>
          </tr>
        )
      })}
      <tr >
        <td colSpan={5} className=" border-2 border-2-black relative" >
          <div className="flex justify-between px-10 absolute top-0 w-full">

            <div>
              <h3 className="font-bold">Dicetak Oleh:</h3>
              <p className="my-5">Admin</p>
            </div>
            <div >
              <h3 className="font-bold">Diterima Oleh:</h3>
              <p className="my-5">Nama</p>
            </div>
          </div>
          <div className="border-2 border-2-black absolute bottom-0 right-0 px-10 w-full  italic">
            <h3>Terlampir: </h3>
          </div>
        </td>
        <td colSpan={2} className=" border-2 border-2-black ">
          <div className="grid grid-cols-2">
            <div className="py-2 px-3 border-2 border-2-black">
              Subtotal
            </div>
            <div className="py-2 px-3 border-2 border-2-black">
              {Sbt}
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="py-2 px-3 border-2 border-2-black">
              Ongkos Kirim
            </div>
            <div className="py-2 px-3 border-2 border-2-black">
              <Input type="number" name="ongkir" id="ongkir" className="w-20 rounded-md py-2 px-3 outline-0" value={ongkir} onChange={(event) => setOngkir(event.target.value)}></Input>
            </div>

          </div>
          <div className="grid grid-cols-2">
            <div className="py-2 px-3 border-2 border-2-black">
              Diskon
            </div>
            <div className="py-2 px-3 border-2 border-2-black">
              <label htmlFor="diskon">

                <Input type="number" name="diskon" className="w-20 rounded-md py-2 px-3 outline-0" id="diskon" value={diskon} onChange={(event) => setDiskon(event.target.value)} />
                %
              </label>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="py-2  border-2 border-2-black">
              Grandtotal
            </div>
            <div className="py-2  border-2 border-2-black">
              Rp {grndT}
            </div>
          </div>
        </td>
      </tr>

    </tbody>
  )
}