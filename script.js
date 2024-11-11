document.addEventListener("DOMContentLoaded", function() {
    // Setelah 10 detik, sembunyikan teks typingText dan tampilkan teks helloText
    setTimeout(function() {
        document.getElementById("typingText").style.display = "none";
        document.getElementById("helloText").style.display = "block";
    }, 4500);

    setTimeout(function() {
        window.location.href = "page/index.html"; // Ganti dengan URL halaman tujuan
    }, 12000);
});
