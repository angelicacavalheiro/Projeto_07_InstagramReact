export default function Posts(){

  let posts = [
    {
      userImage: "./assets/meowed.svg",
      userName: "meowed",
      postImage: "./assets/gato-telefone.svg",
      likeImage: "./assets/respondeai.svg",
      firstLike: "respondeai",
      othersLike: "outras 101.523 pessoas"
    },

    {
      userImage: "./assets/barked.svg",
      userName: "barked",
      postImage: "./assets/dog.svg",
      likeImage: "./assets/adorable_animals.svg",
      firstLike: "adorable_animals",
      othersLike: "outras 99.159 pessoas"
    } 
  ];
    return (
        <div class="posts">
          {posts.map((Post) => (            
            <div class="post">
              <div class="topo">
                <div class="usuario">
                  <img src={Post.userImage} />
                  {Post.userName}
                </div>
                <div class="acoes">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
              </div>

              <div class="conteudo">
                <img src={Post.postImage} />
              </div>

              <div class="fundo">
                <div class="acoes">
                  <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                  </div>
                  <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                  </div>
                </div>

                <div class="curtidas">
                  <img src={Post.likeImage} />
                  <div class="texto">
                    Curtido por <strong>{Post.firstLike}</strong> e <strong>{Post.othersLike}</strong>
                  </div>
                </div>
              </div>
            </div>
          ))}              
        </div>
    )
}