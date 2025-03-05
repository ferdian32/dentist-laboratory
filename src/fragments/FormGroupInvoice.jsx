
const FormGroupInvoice = ({ setFormData }) => {
// const changeEventHandler = (event) => {
  //   setFormData((prev) => ({
  //     ...prev,
  //     [event.target.name]: event.target.value
  //   }))
  // }
  return (
    <div>
      <input
        onChange={changeEvent}
        className="border border-black w-full rounded-md py-1 px-3 mt-3"
        label="nama customer"
        type="text"
        name="nama_customer"
        id="nama_customer"
        placeholder="Masukan Nama Customer"

      />
      <input
        onChange={changeEvent}
        className="border border-black w-full rounded-md py-1 px-3 mt-3"
        label="alamat"
        type="text"
        name="alamat"
        id="alamat"
        placeholder="Alamat .."
      />
      <input
        onChange={changeEvent}
        className="border border-black w-full rounded-md py-1 px-3 mt-3"
        label="pasien"
        type="text"
        name="pasien"
        id="pasien"
        placeholder="Pasien"
      />
    </div>
  )
};
export default FormGroupInvoice;