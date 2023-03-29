import carpic from "../assets/carpic.jpg";

const data = [
  {
    url: "https://apollo-singapore.akamaized.net/v1/files/u10tkbvircmj2-ID/image;s=300x600;q=60",
    harga: "Rp 175.000.000",
    desc: "#TDP15jt Accord VTIL 2012 Istimewa Siap Pakai #civic #altis #camry",
    loc: "Mampang Prapatan, Jakarta Selatan",
  },
  {
    url: "https://apollo-singapore.akamaized.net/v1/files/13vcfs5ixn3r2-ID/image;s=300x600;q=60",
    harga: "Rp 151.000.000",
    desc: "[OLX Autos]Toyota Avanza 1.3 E Bensin MT 2018 / NRU",
    loc: "Kemang, Jakarta Selatan",
  },
  {
    url: "https://apollo-singapore.akamaized.net/v1/files/930hcv16tad51-ID/image;s=300x600;q=60",
    harga: "Rp 1.480.000",
    desc: "Kost Murah Jakarta Lokasi Kuningan,Sudirman,Setiabudi (Full fasilitas)",
    loc: "Setia Budi, Jakarta Selatan",
  },
  {
    url: "https://apollo-singapore.akamaized.net/v1/files/txov2g2fzfu93-ID/image;s=300x600;q=60",
    harga: "Rp 90.000.000",
    desc: "015 - [OLX Autos] Toyota Agya 1.0 TRD Sportivo Bensin M/T 2015 Hitam",
    loc: "Pasar Minggu, Jakarta Selatan",
  },
  {
    url: "https://apollo-singapore.akamaized.net/v1/files/9dlsatpu3fsy1-ID/image;s=300x600;q=60",
    harga: "Rp 800.000.000",
    desc: "[Mobil Baru] OPEN INDENT IONIQ 6 READY IONIQ 5",
    loc: "Kebayoran Lama, Jakarta Selatan",
  },
  {
    url: "https://apollo-singapore.akamaized.net/v1/files/g85ax64g1ylw1-ID/image;s=300x600;q=60",
    harga: "Rp 47.000.000",
    desc: "Dijual Suzuki Cool dan Satria Hiu",
    loc: "Setia Budi, Jakarta Selatan",
  },
];

export default function Card() {
  return (
    <div className="container-card">
      <div>
        <h2>Rekomendasi Baru</h2>
      </div>
      <div className="grid-4">
        <Template />
      </div>
    </div>
  );
}

function Template() {
  return data.map((val) => (
    <a href="#" className="card-box">
      <Imgs url={val.url} />
      <div className="border">
        <Harga harga={val.harga} />
        <Desc desc={val.desc} />
        <Loc loc={val.loc} />
      </div>
    </a>
  ));
}

function Imgs(props) {
  return (
    <div className="container-imgs">
      <img src={props.url} alt="ImgJual" />
    </div>
  );
}

function Harga(props) {
  return (
    <div className="container-text harga">
      <div>{props.harga}</div>
    </div>
  );
}
function Desc(props) {
  return (
    <div className="container-text desc">
      <div>{props.desc}</div>
    </div>
  );
}
function Loc(props) {
  return (
    <div className="container-text loc">
      <div>{props.loc}</div>
    </div>
  );
}
