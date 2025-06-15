import { ReactComponent as Male } from '../../assets/genders/male.svg';
import { ReactComponent as Female } from '../../assets/genders/female.svg';
import { ReactComponent as Genderless } from '../../assets/genders/genderless.svg';
import {
  CardTitleContainer,
  StyledCardTitle,
  IconContainer
} from './Card.styled';

export function CardTitle({ name, gender, className }) {
  let Icon = null;
  if (gender === 'Male')
    Icon = <Male width={20} height={20} fill="#33b3c8" title="Male" />;
  else if (gender === 'Female')
    Icon = <Female width={24} height={24} fill="pink" title="Female" />;
  else if (gender === 'unknown' || gender === 'Genderless')
    Icon = <Genderless width={24} height={24} fill="#999" title="Genderless" />;

  return (
    <CardTitleContainer className={className}>
      <StyledCardTitle className="card-title">{name}</StyledCardTitle>
      <IconContainer>{Icon}</IconContainer>
    </CardTitleContainer>
  );
}
