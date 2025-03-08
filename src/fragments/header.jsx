export default function Header({ _axs2 }) {
  return (
    <section className="grid grid-cols-2">
      <div>

        <h6 className="capitalize font-bold mb-3">{_axs2}</h6>
        <p>Dengan Hormat, <br />
          Dengan ini kami beritahukan tagihan invoice pesanan gigi dokter selama bulan : <br />
          Sebagai Berikut,
        </p>
      </div>
      <div>
        <h1 className="text-xl text-end"><strong><span className="text-3xl">King</span></strong> Dental Laboratory</h1>
      </div>
    </section>
  )
}