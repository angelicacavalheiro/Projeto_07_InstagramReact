export default function Storie(props){
    return (
        <div class="story">
          <div class="imagem">
            <img src= {props.storie.src} /> 
          </div>
          <div class="usuario">{props.storie.userName} 
          </div>
          </div>
    )
}