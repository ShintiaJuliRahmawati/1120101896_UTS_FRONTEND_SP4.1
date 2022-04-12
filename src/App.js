import Nav from "./component/Nav";
import Card from "./component/Card";
import ReactState from "./component/ReactState";
import Form from "./component/Form"


const isiCard = [
  { gambar:"/komp1.jpg",
    title : "Anisa Zahra",
    content : "Nomer Kader : IPPNU01001, Domisili : PAC Kecamatan Giri, Jabatan : Ketua IPPNU"
  },

  { gambar:"/komp2.jpg",
  title : "Mohammad Zainul",
  content : "Nomer Kader : IPNU01001, Domisili : PAC Kecamatan Giri, Jabatan : Ketua IPNU"
  },

  { gambar:"/komp3.jpg",
  title : "Maulida Rahmawati",
  content : "Nomer Kader : IPPNU01002, Domisili : PAC Kecamatan Giri, Jabatan : Sekretaris"
  },

  { gambar:"/komp4.jpg",
  title : "Abdul Ghofur",
  content : "Nomer Kader : IPNU01002, Domisili : PAC Kecamatan Giri, Jabatan : Sekretaris"
  },

  { gambar:"/komp5.jpg",
  title : "Akhlakul Karimah",
  content : "Nomer Kader : IPPNU01003, Domisili : PAC Kecamatan Giri, Jabatan : Bendahara"
  },

  { gambar:"/komp6.jpg",
  title : "Saiful Bahri",
  content : "Nomer Kader : IPNU01003, Domisili : PAC Kecamatan Giri, Jabatan : Bendahara"
  },

  { gambar:"/komp7.jpg",
  title : "Miftahul Ulum",
  content : "Nomer Kader : IPNU01004, Domisili : PAC Kecamatan Giri, Jabatan : Kader Kaderisasi"
  },

  { gambar:"/komp8.jpg",
  title : "Khafiluddin Julian",
  content : "Nomer Kader : IPNU01005, Domisili : PAC Kecamatan Giri, Jabatan : Kader Kaderisasi"
  },

  { gambar:"/komp9.jpg",
  title : "Maulina Shinta",
  content : "Nomer Kader : IPPNU01004, Domisili : PAC Kecamatan Giri, Jabatan : Kader Organisasi"
  },

  { gambar:"/komp10.jpg",
  title : "Rizal Mustofa",
  content : "Nomer Kader : IPNU01007, Domisili : PAC Kecamatan Giri, Jabatan : Kader Organisasi"
  },

  { gambar:"/komp11.jpg",
  title : "Naily Lailatul",
  content : "Nomer Kader : IPNU01005, Domisili : PAC Kecamatan Giri, Jabatan : Kader DPOK"
  },
  
  { gambar:"/komp16.jpg",
  title : "Firhadian Rizky",
  content : "Nomer Kader : IPNU01008, Domisili : PAC Kecamatan Giri, Jabatan : Kader DPOK"
  },



];

function App() {
  return (
    <container>
      <Nav />
      <div className="container">
        <Form/>
      </div>

      <div className="row">
        {isiCard.map((agt, indeks) => (
          <div className="col-lg-3 col-md-4 col-sm-6">
            <Card gambar={agt.gambar} title={agt.title} content={agt.content} />
          </div>
        ))}
      </div>
      <hr />
      <h2>State</h2>
      <ReactState />
    </container>
  );
}

export default App;
