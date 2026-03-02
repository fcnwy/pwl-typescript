function sapaan(input: string | number): string {
    if (typeof input === "string") {
        return `Halo, ${input}`;
    } else {
        // number case
        return `Umur: ${input} tahun`;
    }
}

// contoh penggunaan
console.log(sapaan("Budi"));
console.log(sapaan(25));