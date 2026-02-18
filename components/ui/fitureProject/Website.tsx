import CardFitur from "../CardFitur";


export default function Website() {
return (
<div>
<div className="projects-grid">
    <CardFitur
    type="website"
    url="/foto/sitavo.png"
    title="Sitavo - Sistem Tugas Akhir Fakultas Vokasi"
    description="Sitavo adalah sistem yang memfasilitasi manajemen tugas akhir mahasiswa
    Fakultas Vokasi. Sistem ini memungkinkan mahasiswa untuk mengajukan
    proposal, dosen untuk memberikan bimbingan, serta admin untuk
    mengelola data tugas akhir secara efisien. Webiste dapat di akases di https://sitavo.vokasium.app"
    tags={["WEBSITE", "LARAVEL 10", "BOOTSTRAP", "MYSQL"]}
    UrlApps="https://sitavo.vokasium.app"
    />
    <CardFitur
    type="website"
    url="/foto/old-porto.png"
    title="Old Portfolio - Personal Portfolio Website"
    description="Old Portfolio adalah website portofolio pribadi yang menampilkan proyek-proyek, pengalaman, dan keterampilan saya. 
    Website ini dirancang untuk memberikan gambaran lengkap tentang perjalanan karier saya, dengan fokus pada teknologi yang saya kuasai dan proyek-proyek yang telah saya kerjakan."
    tags={["HTML", "CSS", "JS"]}
    />

    <CardFitur
    type="website"
    url="/foto/do-dhikir.png"
    title="Do-Dhikir - Aplikasi Pengingat Dzikir dan Doa Harian"
    description="Do-Dhikir adalah sistem berbasis wesbite yang dirancang untuk membantu
    pengguna dalam dzikir serta doa harian.
    Aplikasi ini menyediakan fitur pengingat otomatis, koleksi doa dan
    dzikir lengkap, serta statistik harian untuk memantau konsistensi
    ibadah pengguna. Website dapat di akses di https://do-dzikir.vercel.app/. Website ini masih dalam proses pengembangan yang berbasis opensource."
    tags={["WEBSITE", "NEXT JS", "TAILWIND", "MYSQL"]}
    UrlApps="https://do-dzikir.vercel.app/"
    />
    <CardFitur
    type="website"
    url="/foto/teman-cemas.png"
    title="Teman Cemas - Website untuk Kesehatan Mental"
    description="Teman Cemas adalah website yang dirancang untuk memberikan dukungan dan sumber daya bagi individu yang mengalami kecemasan.
    Website ini menyediakan artikel informatif, pengecekan Anxiety menggunakan teknik DASS42, Tracking Habits, Tempat Cerita, dan Unkown Text."
    tags={["Laravel", "MySql", "Bootstrap"]}
    // UrlApps="https://teman-cemas.vercel.app/"
    />
    <CardFitur
    type="website"
    url="/foto/dfriends.png"
    title="D'friends.site - Website untuk Kesehatan Mental"
    description="dfriends.site adalah pengembangan lanjutan dari Teman Cemas, sebuah website yang dirancang untuk memberikan dukungan dan sumber daya bagi individu yang mengalami kecemasan.
    selain fitur yang sudah ada di Teman Cemas, dfriends.site juga menyediakan fitur tambahan seperti Chat AI, Deprision Test, dan Test Stress Interaktif untuk membantu pengguna dalam mengelola kecemasan mereka dengan lebih efektif. Serta pada website ini 
    juga memiliki pembaruan pada tampilan yang lebih modern dan user-friendly."
    tags={["Laravel", "MySql", "Bootstrap"]}
    // UrlApps="https://teman-cemas.vercel.app/"
    />
    <CardFitur
    type="website"
    url="/foto/Siepam.png"
    title="Siepam - Sistem Informasi Ahmad Masfi"
    description="Siepam adalah sebuah website yang dirancang untuk mengelola informasi terkait Pembelajaran, baik dari sisi mahasiswa dan dosen. Website ini menyediakan fitur seperti Tugas dan Penyesuaian CPL, CPMK dan Sub CPMK untuk memfasilitasi proses pembelajaran yang lebih terstruktur dan interaktif."
    tags={["Laravel", "MySql", "Bootstrap"]}
    // UrlApps="https://teman-cemas.vercel.app/"
    />
    <CardFitur
    type="website"
    url="/foto/digiboard.png"
    title="Digiboard Math Game - Landing Page "
    description="Digiboard Math Game adalah sebuah game board berbasis android. Pada portfolio ini saya menampilkan landing page untuk game tersebut. Game ini dirancang untuk memberikan pengalaman belajar matematika untuk anak-anak penyandang disabilitas yang menyenangkan dan interaktif .
    Dengan berbagai tantangan dan level yang menarik, Digiboard Math Game membantu meningkatkan keterampilan matematika sambil menjaga kesenangan bermain."
    tags={["html", "css", "js"]}
    UrlApps="https://dimzsardiminda.github.io/digiBoard/"
    />
    <CardFitur
    type="website"
    url="/foto/gdgoc.png"
    title="Digiboard Math Game - Landing Page "
    description="Teman Cemas adalah website yang dirancang untuk memberikan dukungan dan sumber daya bagi individu yang mengalami kecemasan.
    Website ini menyediakan artikel informatif, pengecekan Anxiety menggunakan teknik DASS42, Tracking Habits, Tempat Cerita, dan Unkown Text."
    tags={["html", "css", "js"]}
    // UrlApps="https://dimzsardiminda.github.io/digiBoard/"
    />
    <CardFitur
    type="website"
    url="/foto/sinusi.png"
    title="Sinusi - NU "
    description="Sinusi adalah sebuah website yang dihasilkan antara kerjasama UM dengan LP MA'ARIF NU.
    Website ini dirancang untuk memberikan informasi Bimbingan karir, Konsultasi Psikolog, Penasihat Pernikahan, Konsultasi Parenting, dan Konsutlasi kesehatan."
    tags={["LARAVEL", "MYSQL", "BOOTSTRAP"]}
    UrlApps="https://sinusi-nu.com/"
    />
</div>
<div className="w-full text-end mt-8">
    <a href="/website" className="text-end">
    More
    </a>
</div>
</div>
);
}
