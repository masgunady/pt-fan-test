function hitungJumlahPasangKaosKaki(kaosKaki) {
    let jumlahKaoskaki = {};
    for (let i = 0; i < kaosKaki.length; i++) {
      let angka = kaosKaki[i];
    if (jumlahKaoskaki[angka]) {
        jumlahKaoskaki[angka]++;
    } else {
        jumlahKaoskaki[angka] = 1;
    }
}

let jumlahPasang = 0;
    for (let key in jumlahKaoskaki) {
      if (jumlahKaoskaki.hasOwnProperty(key)) {
        jumlahPasang += Math.floor(jumlahKaoskaki[key] / 2);
      }
    }
  
    return console.log(jumlahPasang);
  }
  

  hitungJumlahPasangKaosKaki([10, 20, 20, 10, 10, 30, 50, 10, 20]);
  hitungJumlahPasangKaosKaki([6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5]);
  hitungJumlahPasangKaosKaki([1, 1, 3, 1, 2, 1, 3, 3, 3, 3]);
  