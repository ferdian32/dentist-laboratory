export function Thead({ columnPrintInvoice }) {
  return (
    <thead>
      <tr >

        {columnPrintInvoice && columnPrintInvoice.map((col, index) => {
          return <th className="py-2 px-3 border-2 border-2-black" key={index}>{col}</th>
        })}
      </tr>
    </thead>
  )
}