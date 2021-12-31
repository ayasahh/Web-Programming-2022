function tiket(){
    var nama = document.getElementById('nama').value;
    var email = document.getElementById('email').value;
    var jam = document.getElementById('jam').value;
    var tujuan = document.getElementById('tujuan').value;
    var tiket = document.getElementById('tiket').value;
    

    hasil.innerHTML = "TIKET"
    hasil_nama.innerHTML = "Nama Pelanggan : " + nama;
    hasil_email.innerHTML = "Email : " + email;
    hasil_jam.innerHTML = "Jam Keberangkatan : " + jam;
    hasil_tujuan.innerHTML = "Tujuan Keberangkatan : " + tujuan;
    hasil_tiket.innerHTML = "Jumlah Tiket : " + tiket;

    return false
}