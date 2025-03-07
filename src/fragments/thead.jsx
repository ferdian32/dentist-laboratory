export function Thead({ columnPrintInvoice }) {
  return (
    <thead className="border-2 border-2-red" >
      <tr >

        {columnPrintInvoice && columnPrintInvoice.map((col, index) => {
          return <th className="px-3 border-l-3 border-l-3-black" key={index}>{col}</th>
        })}
      </tr>
    </thead>
  )
}