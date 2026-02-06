import React from "react";
import CardFitur from "./ui/CardFitur";

export default function FitureProject() {
  return (
    <section
      className="section"
      id="projects"
      style={{ background: "var(--bg-secondary)" }}
    >
      <h2 className="section-title fade-in">[ Featured Projects ]</h2>
      <div className="projects-grid">
        <CardFitur
          url="/foto/sitavo.png"
          title="Sitavo - Sistem Tugas Akhir Fakultas Vokasi"
          description="Sitavo adalah sistem yang memfasilitasi manajemen tugas akhir mahasiswa
          Fakultas Vokasi. Sistem ini memungkinkan mahasiswa untuk mengajukan
          proposal, dosen untuk memberikan bimbingan, serta admin untuk
          mengelola data tugas akhir secara efisien. Webiste dapat di akases di https://sitavo.vokasium.app"
          tags={["WEBSITE","LARAVEL 10", "BOOTSTRAP", "MYSQL"]}
        />

        <CardFitur
          url="/foto/do-dhikir.png"
          title="Do-Dhikir - Aplikasi Pengingat Dzikir dan Doa Harian"
          description="Do-Dhikir adalah sistem berbasis wesbite yang dirancang untuk membantu
          pengguna dalam dzikir serta doa harian.
          Aplikasi ini menyediakan fitur pengingat otomatis, koleksi doa dan
          dzikir lengkap, serta statistik harian untuk memantau konsistensi
          ibadah pengguna. Website dapat di akses di https://do-dhikir.vercel.app. Website ini masih dalam proses pengembangan yang berbasis opensource."
          tags={["WEBSITE", "NEXT JS", "TAILWIND", "MYSQL"]}
        />

        

        

        
      </div>
    </section>
  );
}
