import React from 'react';
import './App.css';
import Musica from './Musica';
import Playlist from './Playlist';

function App() {
  const [musicas, setMusicas] = React.useState([ 
    {
      id: "top_1", 
      artista: "Gusttavo Lima", 
      titulo: "Bloqueado", 
      foto: "https://ac24horas.com/wp-content/uploads/2021/11/Gusttavo-Lima-Divulgacao.jpg",
      execucao: 0
    },
    {
      id: "top_2", 
      artista: "Dua Lipa", 
      titulo: "One Kiss", 
      foto: "https://classic.exame.com/wp-content/uploads/2022/05/GettyImages-1369738887.jpg?quality=70&strip=info&w=1024",
      execucao: 0,
    },
    {
      id: "top_3", 
      artista: "Thiaguinho", 
      titulo: "Falta você", 
      foto: "https://s2.glbimg.com/6tAfD5yCAhWp54eNJsKorBshbsg=/0x0:1280x842/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/k/k/IxN06NTB2FjrXMcXBdag/thiaguinho.jpg",
      execucao: 0,
    },
    {
      id: "top_4", 
      artista: "Coldplay", 
      titulo: "Paradise", 
      foto: "https://midias.agazeta.com.br/2022/04/07/coldplay-fara-tres-shows-no-brasil-em-outubro-738800.jpg",
      execucao: 0,
    },
    {
      id: "top_5", 
      artista: "Demi Lovato", 
      titulo: "Confident", 
      foto: "https://www.diariodepernambuco.com.br/static/app/noticia_127983242361/2018/02/15/741669/20180215104215123397i.jpg",
      execucao: 0,
    },
    {
      id: "top_6", 
      artista: "Jota Quest", 
      titulo: "Dias Melhores", 
      foto: "https://soubh.uai.com.br/uploads/event/image/17173/main_174238_JotaQuest_FotoJpsofrans.jpg",
      execucao: 0,
    },
   
   ]);

   const top = {
    borderBottom: "2px solid #fff", 
    paddingBottom: "14px", 
    margin: "10px",
  };

  const handleExecucao = (id) => 
  setMusicas((anterior) => 
  anterior.map((item) => 
  (item.id === id ? {...item, execucao: item.execucao + 1} : item))
  );

  const nro = Math.floor(Math.random() * musicas.length) + 1;
  const destaque = musicas[nro];

 return (
  <div className="App">
  <main className="App-header">
    <header>
    <h2 style={top}>🎵 Serratec Music 🎵</h2>
    </header>

    <h2>Destaque</h2>
    <Musica key={destaque.id} item={destaque} />

    <Playlist musicas={musicas} handleExecucao={handleExecucao}/>
    </main>
  </div>
 );
}

export default App;
