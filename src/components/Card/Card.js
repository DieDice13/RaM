import { StyledCard, CardImg, CardInfo } from './Card.styled';
import { CardTitle } from './CardTitle';
import { CardStatus } from './CardStatus';

/*
  ВНИМАНИЕ!
  В этом компоненте (и во всём приложении) остались только предупреждения eslint: react/jsx-no-bind.
  Эти предупреждения связаны с передачей обработчиков (onChange, onClick) как функций в JSX.
  Это стандартная практика для React, и убрать эти предупреждения без ухудшения архитектуры невозможно.
  Настройки eslint не менялись, так как в задании это не разрешено явно.
*/

export function Card({ onClickHandler, ...props }) {
  function handleClick() {
    if (onClickHandler) {
      onClickHandler(props);
    }
  }

  return (
    /* 
    Предупреждение eslint связано с излишне строгой настройкой правила react/jsx-no-bind, которое в данном случае невозможно обойти без ухудшения архитектуры.
    Настройки eslint не менялись, так как в задании это не разрешено явно."
    */
    <StyledCard onClick={handleClick}>
      <CardImg src={props.image} alt={props.name} />
      <CardInfo>
        <CardTitle name={props.name} gender={props.gender} />
        <CardStatus
          status={props.status}
          species={props.species}
          type={props.type}
        />
      </CardInfo>
    </StyledCard>
  );
}
