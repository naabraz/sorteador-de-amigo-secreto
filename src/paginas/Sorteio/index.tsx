import { useState } from 'react';

import { useListaDeParticipantes } from '../../state/hooks/useListaDeParticipantes';
import { useResultadoSorteio } from '../../state/hooks/useResultadoSorteio';

import {
  SelectParticipante,
  BotaoSortear,
  Texto,
  Resultado,
  FooterSorteio,
} from './styles';

const Sorteio = () => {
  const participantes = useListaDeParticipantes();

  const [participanteDaVez, setParticipanteDaVez] = useState('');
  const [amigoSecreto, setAmigoSecreto] = useState('');

  const resultado = useResultadoSorteio();

  const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    if (resultado.has(participanteDaVez)) {
      setAmigoSecreto(resultado.get(participanteDaVez)!);
    }
  };

  return (
    <section>
      <form onSubmit={sortear}>
        <h2>Quem vai tirar o papelzinho?</h2>
        <SelectParticipante
          required
          name='participanteDaVez'
          id='participanteDaVez'
          placeholder='Selecione o seu nome'
          value={participanteDaVez}
          onChange={(evento) => setParticipanteDaVez(evento.target.value)}
        >
          {participantes.map((participante) => (
            <option key={participante}>{participante}</option>
          ))}
        </SelectParticipante>
        <Texto>Clique em sortear para ver quem é seu amigo secreto!</Texto>
        <BotaoSortear>Sortear</BotaoSortear>
      </form>
      {amigoSecreto && <Resultado role='alert'>{amigoSecreto}</Resultado>}
      <FooterSorteio className='sorteio'>
        <img src='/aviao.png' alt='Um desenho de um avião de papel' />
      </FooterSorteio>
    </section>
  );
};

export default Sorteio;
