import { CardComponent } from './styles';

type Props = {
  children: JSX.Element;
};

const Card = ({ children }: Props) => {
  return <CardComponent>{children}</CardComponent>;
};

export default Card;
