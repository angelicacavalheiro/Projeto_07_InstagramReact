export default function Sugestoes(){
  

  let sugestoes = [
    {
      userImage: "./assets/bad.vibes.memes.svg",
      userName: "bad.vibes.memes",
      followStatus: "Segue você",
    },

    {
      userImage: "./assets/chibirdart.svg",
      userName: "chibirdart",
      followStatus: "Segue você",
    },

    {
      userImage: "./assets/razoesparaacreditar.svg",
      userName: "razoesparaacreditar",
      followStatus: "Novo no Instagram",
    },

    {
      userImage: "./assets/adorable_animals.svg",
      userName: "adorable_animals",
      followStatus: "Segue você",
    },

    {
      userImage: "./assets/smallcutecats.svg",
      userName: "smallcutecats",
      followStatus: "Segue você",
    },
  ]

    return (       
        <div class="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>

            {sugestoes.map((Sugestao) => (
              <div class="sugestao">
                <div class="usuario">
                  <img src={Sugestao.userImage} />
                  <div class="texto">
                    <div class="nome">{Sugestao.userName}</div>
                    <div class="razao">{Sugestao.followStatus}</div>
                  </div>
                </div>
                <div class="seguir">Seguir</div>
              </div>
              
            ))}
        </div>
    )
}