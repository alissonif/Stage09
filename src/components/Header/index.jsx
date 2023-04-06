import {RiShutDownLine} from "react-icons/ri"
import { Container, Profile, Logout } from "./styles";

export function Header(){
    return(
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/alissonif.png" alt="Foto do usuario" />
            <div>
                <span>
                    Bem-vindo
                </span>
                <strong>
                    José Alisson
                </strong>
            </div>
            </Profile>
            <Logout>
                <RiShutDownLine/>
            </Logout>
        </Container>
    )
} 