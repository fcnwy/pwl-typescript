"use strict";
// src/index.ts
Object.defineProperty(exports, "__esModule", { value: true });
function greet(name) {
    return `ni hao, ${name}! da jia hao.`;
}
const namaMahasiswa = "vio";
console.log(greet(namaMahasiswa));
//Fungsi greet menerima parameter name bertipe string dan mengembalikan nilai string.
//Kita menggunakan template string (backtick) untuk menyusun pesan.
//Variabel namaMahasiswa dideklarasikan dengan tipe string (secara otomatis diinfer dari nilainya).
// manual : npx tsc
// 
//# sourceMappingURL=index.js.map