import CardFitur from '@/components/ui/CardFitur'
import React from 'react'

export default function page() {
  return (
    <section
      className="section"
      id="projects"
      style={{ background: "var(--bg-secondary)" }}
    >
      <h2 className="section-title fade-in">[ Featured Projects - Website ]</h2>
      <div className="projects-grid">
        <CardFitur
            type="website"
            url="/foto/sidoc.png"
            title="SIMADUN - Sistem Informasi Doctoral "
            description="Simadun adalah sebuah website yang bertujuan untuk menghandle adminstrasi mahasiswa doktoral di Universitas Negeri Malang Khususnya Departemen Teknik Elektro dan Infromatika. Website ini dirancang untuk memberikan kemudahan bagi mahasiswa doktoral dalam mengelola data akademik, jadwal bimbingan, dan administrasi lainnya yang terkait dengan program doktoral."
            tags={["LARAVEL", "MYSQL", "BOOTSTRAP"]}
            UrlApps="https://tei.um.ac.id/simadun"
        />
        <CardFitur
            type="website"
            url="/foto/ruang-konseling.png"
            title="Ruang Konseling - Website untuk Kesehatan Mental"
            description="Ruang Konseling adalah sebuah website yang dirancang untuk memberikan pelayanan kepada mahasiswa UM yang mengalami masalah kesehatan mental. Website ini menyediakan fitur seperti Konsultasi Online, Artikel Kesehatan Mental, Jadwal Konsultasi dan lain sebagainya untuk membantu mahasiswa dalam mengelola kesehatan mental mereka dengan lebih baik."
            tags={["LARAVEL", "MYSQL", "BOOTSTRAP"]}
          // UrlApps="https://tei.um.ac.id/simadun"
        />
      </div>
    </section>
  );
}
