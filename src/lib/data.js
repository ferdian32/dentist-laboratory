export const columnInvoice = ['tgl_invoice', 'no_invoice', 'nama customer', 'alamat', 'pasien', 'keterangan', 'nama barang', 'qty', 'harga satuan', 'harga bruto', 'net invoice'];

export const columnPrintInvoice = ['no', 'Gigi yang dibuat', 'keterangan', 'jml', 'satuan', 'harga netto']
export const dataTransaksi = [{
    name: "master item",
    path: "/master-item",
  },
  {
    name: "invoice",
    path: "/invoice",
  },
  {
    name: "pembelian",
    path: "/pembelian",
  },
  {
    name: "penjualan",
    path: "/penjualan",
  },
  {
    name: "rekap penjualan",
    path: "/rekap-penjualan",
  },
  {
    name: "Data Penjualan",
    path: "/data-penjualan",
  },
];
export const column = ['no', 'nama barang', 'kode item', 'satuan' , 'harga jual', 'actions'];

export const columnRekap = ['no', 'tgl_invoice', 'No Invoice', 'Nama Customer', 'Alamat', 'Pasien', 'Grand Total'];
export const nax03_ = [{
    name: 'Home',
    path: '/'
  },
  {
    name: 'Master Item',
    path: '/master-item'
  },
  {
    name: 'Invoice',
    path: '/invoice'
  },
  {
    name: 'Rekap',
    path: '/rekapPenjualan'
  }
]