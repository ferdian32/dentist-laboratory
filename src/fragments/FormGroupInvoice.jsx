
const FormGroupInvoice = ({ setFormData }) => {
  const changeEvent = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }))
  };
  return (
    <div>
      <input
        onChange={changeEvent}
        className="border border-black w-full rounded-md py-1 px-3 mt-3"
        type="text"
        name="no_invoice"
        id="no_invoice"
        placeholder="Masukan No Invoice"

      />
      <input
        onChange={changeEvent}
        className="border border-black w-full rounded-md py-1 px-3 mt-3"
        type="text"
        name="nama_customer"
        id="nama_customer"
        placeholder="Masukan Nama Doctor"

      />
      <input
        onChange={changeEvent}
        className="border border-black w-full rounded-md py-1 px-3 mt-3"
        type="text"
        name="alamat"
        id="alamat"
        placeholder="Alamat .."
      />
      <input
        onChange={changeEvent}
        className="border border-black w-full rounded-md py-1 px-3 mt-3"
        type="text"
        name="pasien"
        id="pasien"
        placeholder="Pasien"
      />
      <input
        onChange={changeEvent}
        className="border border-black w-full rounded-md py-1 px-3 mt-3"
        type="text"
        name="order_id"
        id="order_id"
        placeholder="Order_id"
      />
    </div>
  )
};
export default FormGroupInvoice;