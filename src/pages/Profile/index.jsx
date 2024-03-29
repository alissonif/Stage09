import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";
import { Container, Form, Avatar } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
      </header>

      <Form>

        <Avatar>
          <img src="https://github.com/alissonif.png" alt="Foto do usuário" />
        <label htmlFor="avatar">
          <FiCamera/>
          <input type="file" name="" id="avatar" />
        </label>
        </Avatar>
        <Input placeholder="Nome" type="text" icon={FiUser} />

        <Input placeholder="E-mail" type="e-mail" icon={FiMail} />

        <Input placeholder="Senha atual" type="password" icon={FiLock} />
        
        <Input placeholder="Nova Senha" type="password" icon={FiLock} />

        <Button title="Salvar" />
      </Form>
    </Container>
  );
}
