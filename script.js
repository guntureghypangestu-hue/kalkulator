function hitung(operator) {
  const angka1 = parseFloat(document.getElementById('angka1').value);
  const angka2 = parseFloat(document.getElementById('angka2').value);
  const hasilElement = document.getElementById('hasil');
  let hasil;

  // Hapus class error dan hasil-nilai setiap kalkulasi baru
  hasilElement.classList.remove('error-text', 'hasil-nilai');

  if (isNaN(angka1) || isNaN(angka2)) {
    hasilElement.innerText = 'Input tidak valid. Harap masukan angka yang benar';
    hasilElement.classList.add('error-text');
    return;
  }

  switch (operator) {
    case '+':
      hasil = angka1 + angka2;
      break;
    case '-':
      hasil = angka1 - angka2;
      break;
    case '*':
      hasil = angka1 * angka2;
      break;
    case '/':
      if (angka2 === 0) {
        hasilElement.innerText = 'Tidak bisa dibagi nol!';
        hasilElement.classList.add('error-text');
        return;
      } else {
        hasil = angka1 / angka2;
      }
      break;
    default:
      hasil = 'Operasi tidak dikenal';
  }

  hasilElement.innerText = hasil;
  hasilElement.classList.add('hasil-nilai');
}
