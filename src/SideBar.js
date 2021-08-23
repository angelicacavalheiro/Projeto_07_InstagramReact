import Usuario from "./Usuario"
import Sugestoes from "./Sugestoes"
import Links from "./Links"
import Copyright from "./Copyright"

export default function SideBar(){
    return(
        <div class="sidebar">
            <Usuario userName="catanacomics" name="Catana" src="./assets/catanacomics.svg"/>
            <Sugestoes />
            <Links />
            <Copyright />
        </div>
    )
}