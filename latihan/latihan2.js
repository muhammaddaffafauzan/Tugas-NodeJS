var gaji = 4500000;
var transport = 10000*24;
var infak = 50000;
var bpjs = 250000;
var potongan = gaji*2.5/100;
var totalpotongan = bpjs + infak + potongan;
var hasil = gaji - totalpotongan + transport

// perhitungan
console.log('Gaji kotor : Rp.'+gaji);
console.log('==================================');
console.log('Potongan pajak 2,5% :Rp.'+potongan);
console.log('Potongan BPJS : Rp.'+bpjs);
console.log('Potongan Infak : Rp.'+infak);
console.log('==================================');
console.log('Total Potongan : Rp.'+totalpotongan);
console.log('==================================');
console.log('tunjangan transport : Rp.10000');
console.log('Total 24 hari berkerja');
console.log('==================================');
console.log('Total Tunjangan: Rp.'+transport);
console.log('==================================');
console.log('Perhitungan Gaji:');
console.log('(Gaji kotor - Potongan + Tunjangan)');
console.log('(4500000-412500) + 240000');
console.log('==================================');
console.log('Gaji bersih : Rp.'+hasil);


