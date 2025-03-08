export default function Body({ _apsx2, asx_2a, addr }) {
  return (
    <section className="w-full mt-4 h-[340px] border-2 overflow-hidden">
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
  )
}