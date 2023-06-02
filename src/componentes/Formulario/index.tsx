import { useRef, useState } from 'react';

import { useAdicionarParticipante } from '../../state/hooks/useAdicionarParticipante';
import { useMensagemDeErro } from '../../state/hooks/useMensagemDeErro';
import { Container, FormInput, FormButton, AlertaErro } from './styles';

const Formulario = () => {
  const [nome, setNome] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  const adicionarNaLista = useAdicionarParticipante();

  const mensagemDeErro = useMensagemDeErro();

  const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    adicionarNaLista(nome);

    setNome('');
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={adicionarParticipante}>
      <Container>
        <FormInput
          ref={inputRef}
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type='text'
          placeholder='Insira os nomes dos participantes'
        />
        <FormButton disabled={!nome}>Adicionar</FormButton>
      </Container>

      {mensagemDeErro && <AlertaErro role='alert'>{mensagemDeErro}</AlertaErro>}
    </form>
  );
};

export default Formulario;
