import Setinha from "./Setinha"

export default function Stories(){

  let stories = [
    {src: "./assets/9gag.svg",
    userName: "9gag",},
    {src: "./assets/meowed.svg",
    userName: "meowed",},
    {src: "./assets/barked.svg",
    userName: "barked",},
    {src: "./assets/nathanwpylestrangeplanet.svg",
    userName: "nathanwpylestrangeplanet"},
    {src: "./assets/wawawicomics.svg",
    userName: "wawawicomics",},
    {src: "./assets/respondeai.svg",
    userName: "respondeai",},
    {src: "./assets/filomoderna.svg",
    userName: "filomoderna",},
    {src: "./assets/memeriagourmet.svg",
    userName: "memeriagourmet"}]

    return (
      <div class="stories">                      
        {stories.map((Story) => (
          <div class="story">
          <div class="imagem">
            <img src= {Story.src} /> 
          </div>
          <div class="usuario">{Story.userName} 
          </div>
          </div>
        ))}
      <Setinha />
      </div>
      
    )
}