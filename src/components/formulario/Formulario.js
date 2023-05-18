import "./Formulario.css";
import CampoTexto from "../campoTexto"
import ListaSuspensa from "../listaSuspensa";
import Botao from "../botao";
import { useState } from "react";

export const Formulario = (props) => {

  const aoSalvar = (evento) => {
    evento.preventDefault()
    props.aoColaboradorCadastrado(
      {nome: nome,
      cargo: cargo,
      imagem: imagem,
      time: time}
    )
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  }

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          label="Nome"
          placeholder="Digite o seu nome"
          obrigatorio={true}
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <CampoTexto
          label="Cargo"
          placeholder="Digite o seu Cargo"
          obrigatorio={true}
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Digite o endereço da Imagem"
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        />
        <ListaSuspensa
          label="Time"
          itens={props.times}
          obrigatorio={true}
          valor={time}
          aoAlterado={setTime}
        />
        <Botao>
          Criar Card
        </Botao>
      </form>
    </section>
  );
};
