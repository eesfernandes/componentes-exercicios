import React from 'react';
import InfoUsuario from './InfoUsuario';

function CardVideo() {
    const titulo = "Título do vídeo";

    const reproduzVideo = () => {
      alert("O vídeo está sendo reproduzido");
    }

    return (
      <div className="box-pagina-principal" onClick={reproduzVideo}>
        <img src="https://picsum.photos/400/400?a=1 " alt="" />
        <h4>{titulo}</h4>
        <InfoUsuario />
      </div>     
    );
}

export default CardVideo;