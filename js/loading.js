document.addEventListener("DOMContentLoaded", function () {
    // Menampilkan animasi loading
    document.querySelector(".loader-wrapper").style.display = "flex";

    // Menghilangkan animasi loading setelah dokumen selesai dimuat
    window.addEventListener("load", function () {
        document.querySelector(".loader-wrapper").style.display = "none";
    });
});
