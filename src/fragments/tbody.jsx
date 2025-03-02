export function Tbody({ xyz, Sbt, ongkir, diskon, grndT }) {
  return (
    <tbody>
      {xyz && xyz.map((zyx, index) => {
        return (

          <tr key={index}>
            <td className="py-2 px-3 border-2 border-2-black">{index + 1}</td>
            <td className="py-2 px-3 border-2 border-2-black">{zyx.keterangan}</td>
            <td className="py-2 px-3 border-2 border-2-black">{zyx.nama_barang}</td>
            <td className="py-2 px-3 border-2 border-2-black">{zyx.qty}</td>
            <td className="py-2 px-3 border-2 border-2-black">Rp {zyx.harga_satuan}</td>
            <td className="py-2 px-3 border-2 border-2-black">Rp {zyx.harga_bruto}</td>
          </tr>
        )
      })}
      <tr >
        <td colSpan={5} className="py-2 px-3 border-2 border-2-black" >
          <p>Nama</p>
        </td>
        <td colSpan={2} className=" border-2 border-2-black">
          <tr>
            <td colSpan={1} className="py-2 px-3 border-2 border-2-black">
              Subtotal
            </td>
            <td colSpan={1} className="py-2 px-3 border-2 border-2-black">
              {Sbt}
            </td>
          </tr>
          <tr>
            <td colSpan={1} className="py-2 px-3 border-2 border-2-black">
              Ongkos Kirim
            </td>
            <td colSpan={1} className="py-2 px-3 border-2 border-2-black">
              Rp {ongkir}
            </td>

          </tr>
          <tr >
            <td colSpan={1} className="py-2 px-3 border-2 border-2-black">
              Diskon
            </td>
            <td colSpan={1} className="py-2 px-3 border-2 border-2-black">
              Rp {diskon}
            </td>
          </tr>
          <tr >
            <td colSpan={1} className="py-2 px-3 border-2 border-2-black">
              Grandtotal
            </td>
            <td colSpan={1} className="py-2 px-3 border-2 border-2-black">
              Rp {grndT}
            </td>
          </tr>
        </td>


      </tr>
    </tbody>
  )
}