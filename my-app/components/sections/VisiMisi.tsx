import Image from "next/image"

export default function VisiMisi() {
  return (
    <section className="vm-wrap">
      <div className="vm-container">
        <div className="vm-grid">
          <div className="vm-left">
            <h2 className="vm-title">Visi</h2>
            <p className="vm-paragraph">
              Menjadi penyedia solusi digital yang kuat, terpercaya, dan bernilai tinggi, yang mendorong pertumbuhan
              berkelanjutan serta memberikan dampak positif bagi klien melalui teknologi inovatif dan profesionalisme
              yang akurat.
            </p>

            <h2 className="vm-title vm-title-space">Misi</h2>
            <ul className="vm-list">
              <li>
                Menyediakan solusi digital berkualitas tinggi yang relevan dengan kebutuhan klien, berlandaskan teknologi
                mutakhir dan standar profesionalisme.
              </li>
              <li>
                Membangun sistem yang kokoh dan berkelanjutan, layaknya sebuah pohon yang tumbuh bersama klien, mendukung
                perkembangan jangka panjang.
              </li>
              <li>
                Mendorong transformasi digital melalui pengembangan perangkat lunak dan solusi IT yang memberikan nilai
                tambah nyata bagi setiap mitra bisnis.
              </li>
            </ul>
          </div>

          <div className="vm-right" aria-hidden="true">
            <div className="vm-card vm-card-lg">
              <Image src="/assets/visi.jpeg" alt="Visi" fill className="vm-img" />
            </div>

            <div className="vm-card vm-card-sm">
              <Image src="/assets/visi.jpeg" alt="" fill className="vm-img vm-img-alt" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
