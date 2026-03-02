// Meminta input nama dan umur (gunakan variabel langsung, tidak perlu input dari user).
// Menampilkan pesan seperti: "Halo [nama], tahun depan umurmu [umur+1] tahun."

function greet(name: string, umur: number): string {
    return `ni hǎo ${name}, míng nián nǐ ${umur + 1} suì`;
}

const namaRen = "vio";
const umurSui: number = 18;

console.log(greet(namaRen, umurSui));