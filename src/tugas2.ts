interface Buku {
    judul: string;
    pengarang: string;
    tahunTerbit: number;
    tersedia: boolean;
}

const buku1: Buku = {
    judul: "Ronggeng Dukuh Paruk",
    pengarang: "Ahmad Tohari",
    tahunTerbit: 1982,
    tersedia: true,
};

// tampilkan semua properti
console.log("Judul:", buku1.judul);
console.log("Pengarang:", buku1.pengarang);
console.log("Tahun Terbit:", buku1.tahunTerbit);
console.log("Tersedia:", buku1.tersedia);