// Validasi Form Register
const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const password = document.getElementById("password").value;
        const kelas = document.getElementById("kelas").value;

        // Validasi password minimal 8 karakter
        if (password.length < 8) {
            alert("Password minimal 8 karakter!");
            return;
        }

        // Validasi pilihan kelas
        if (kelas === "") {
            alert("Silakan pilih kelas!");
            return;
        }

        alert("Registrasi berhasil!");

    });
}


// Function tampilkanPesan
function tampilkanPesan() {
    alert("Selamat belajar JavaScript!");
}


// Logika nilai
let nilai = 75;

if (nilai >= 75) {
    console.log("Lulus");
} else {
    console.log("Belum Lulus");
}