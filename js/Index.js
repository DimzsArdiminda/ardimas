function updateClock() {
    var currentTime = new Date();
    var currentHours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();
    var currentSeconds = currentTime.getSeconds();
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
    var timeOfDay = (currentHours < 12) ? "AM" : "PM";
    currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;
    currentHours = (currentHours == 0) ? 12 : currentHours;
    var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
    document.getElementById("clock").innerHTML = currentTimeString;

    var days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    var months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober',
        'November', 'Desember'
    ];
    var day = days[currentTime.getUTCDay()];
    var date = currentTime.getUTCDate();
    var month = months[currentTime.getUTCMonth()];
    var year = currentTime.getUTCFullYear();
    var dateString = day + ', ' + date + ' ' + month + ' ' + year;
    document.getElementById("date").innerHTML = dateString;
}
setInterval(updateClock, 1000);

// pop up message
let chatPopup = document.getElementById("chat-popup");

function toggleChat() {
    chatPopup.style.display = (chatPopup.style.display === "block") ? "none" : "block";
}

function sendMessage() {
    let inputElement = document.querySelector("#chat-input input");
    let question = inputElement.value.trim();

    if (question !== "") {
        addMessage("sent", question);
        inputElement.value = "";

        if (faq.hasOwnProperty(question.toLowerCase())) {
            let answer = faq[question.toLowerCase()];
            addMessage("received", answer);
        } else {
            handleCustomQuestion(question);
        }
    }
}
// PESAN
function handleCustomQuestion(question) {
    if (question.toLowerCase() === "apa kabar?") {
        addMessage("received", "alhamdulillah Saya baik, terima kasih!");
    } else if (question.toLowerCase() === "siapa nama anda?") {
        setTimeout(() => {
            addMessage("received", "Nama saya Dimas ardiminda ep");
        }, 1000); // Sesuaikan delay sesuai keinginan
    } else if (question.toLowerCase() === "bagaimana saya bisa menghubungi anda?") {
        setTimeout(() => {
            addMessage("received", "Silahkan hubungi saya di @penggalan.reformasi");
        }, 1000); // Sesuaikan delay sesuai keinginan
    } else if (question.toLowerCase() === " hai" || question.toLowerCase() === "hey" || question.toLowerCase() === "hai") {
        setTimeout(() => {
            addMessage("received", "Haloooooo...");
        }, 1000); // Sesuaikan delay sesuai keinginan
    } else if (question.toLowerCase() === "selamat pagi") {
        setTimeout(() => {
            addMessage("received", "Selamat pagi juga");
        }, 1000); // Sesuaikan delay sesuai keinginan
    } else if (question.toLowerCase() === "selamat siang") {
        setTimeout(() => {
            addMessage("received", "Selamat siang juga");
        }, 1000); // Sesuaikan delay sesuai keinginan
    } else if (question.toLowerCase() === "selamat sore") {
        setTimeout(() => {
            addMessage("received", "Selamat sore juga");
        }, 1000); // Sesuaikan delay sesuai keinginan
    } else if (question.toLowerCase() === "selamat malam") {
        setTimeout(() => {
            addMessage("received", "Selamat malam juga");
        }, 1000); // Sesuaikan delay sesuai keinginan
    } else if (question.toLowerCase() === "assalamualaikum") {
        setTimeout(() => {
            addMessage("received", "Waalaikumsalam");
        }, 1000); // Sesuaikan delay sesuai keinginan
    } else if (question.toLowerCase() === "halo") {
        setTimeout(() => {
            addMessage("received", "Haiiiii....");
        }, 1000); // Sesuaikan delay sesuai keinginan
    } else if (question.toLowerCase() === "sudah mengenal bahasa pemrograman apa saja?") {
        setTimeout(() => {
            addMessage("received", "Start dari Python, PHP, C/C++, SQL, Java, Dart, HTML, CSS, JS(tahap pembelajaran),");
        }, 1000); // Sesuaikan delay sesuai keinginan
    } else {
        setTimeout(() => {
            addMessage("received", "Mungkin kita bisa bicarakan lewat email, silahkan hubungi saya di dimasardiminda@gmail.com");
        }, 1000); // Sesuaikan delay sesuai keinginan
    }
}
// TAMPILAN PESAN
function addMessage(type, text) {
    let chatContent = document.getElementById("chat-content");
    let messageElement = document.createElement("div");
    messageElement.className = "message " + type + " animate__animated animate__fadeIn";
    messageElement.textContent = text;
    chatContent.appendChild(messageElement);

    // Auto scroll ke bawah
    chatContent.scrollTop = chatContent.scrollHeight;

    // Jika pesan yang ditambahkan adalah dari pengirim, tambahkan delay sebelum menampilkan pesan jawaban
    if (type === "sent") {
        // Tambahkan logika untuk mengecek apakah pesan dikirim oleh pengguna atau tidak sebelum memicu pengiriman pesan otomatis
        if (text.trim() !== "") {
            setTimeout(() => {
                sendMessage(); // Fungsi untuk menampilkan pesan jawaban dari bot
            }, 5000); // Sesuaikan delay sesuai keinginan
        }
    }
}


const faq = {

};


// toogle 2
// Toggle Popup Utama
function togglePopup() {
    var popupContainer = document.getElementById('popup-container');
    popupContainer.style.display = popupContainer.style.display === 'flex' ? 'none' : 'flex';
}

// Tutup Popup Utama
function closePopup() {
    var popupContainer = document.getElementById('popup-container');
    popupContainer.style.display = 'none';
}

// Tampilkan Popup Konten
function showPopupContent(menuId) {
    var popupContainer = document.getElementById('popup-container-' + menuId);
    popupContainer.style.display = 'flex';
    closePopup(); 
}

// Tutup Popup Konten
function closePopupContent(menuId) {
    var popupContainer = document.getElementById('popup-container-' + menuId);
    popupContainer.style.display = 'none';
    // Tutup popup utama setelah menutup popup konten
}

// Tampilkan Konten
function showContent(menuId) {
    var contents = document.querySelectorAll('.content');
    contents.forEach(function (content) {
        content.style.display = 'none';
    });

    var selectedContent = document.getElementById(menuId);
    selectedContent.style.display = 'block';
}







// zoom
window.onload = () => {
    // (A) GET LIGHTBOX & ALL .ZOOMD IMAGES
    let all = document.getElementsByClassName("zoomD"),
        lightbox = document.getElementById("lightbox");

    // (B) CLICK TO SHOW IMAGE IN LIGHTBOX
    // * SIMPLY CLONE INTO LIGHTBOX & SHOW
    if (all.length > 0) {
        for (let i of all) {
            i.onclick = () => {
                let clone = i.cloneNode();
                clone.className = "";
                lightbox.innerHTML = "";
                lightbox.appendChild(clone);
                lightbox.className = "show";
            };
        }
    }

    // (C) CLICK TO CLOSE LIGHTBOX
    lightbox.onclick = () => lightbox.className = "";
};