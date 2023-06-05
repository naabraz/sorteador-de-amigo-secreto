import { useNavigate } from 'react-router-dom';

import { useListaDeParticipantes } from '../../state/hooks/useListaDeParticipantes';
import { Button, Footer, Picture } from './styles';
import { useSorteador } from '../../state/hooks/useSorteador';

const Rodape = () => {
  const participantes = useListaDeParticipantes();
  const navegarPara = useNavigate();

  const sortear = useSorteador();

  const iniciar = () => {
    sortear();
    navegarPara('/sorteio');
  };

  return (
    <Footer>
      <Button disabled={participantes.length < 3} onClick={iniciar}>
        Iniciar brincadeira!
      </Button>
      <Picture src='/sacolas.png' alt='Sacolas de compras' />
    </Footer>
  );
};

export default Rodape;
