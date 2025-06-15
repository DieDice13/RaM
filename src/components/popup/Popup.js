import { PopupEpisodes } from './PopupEpisodes';
import { PopupHeader } from './PopupHeader';
import { PopupInfo } from './PopupInfo';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { PopupContainer, StyledPopup, CloseIcon } from './Popup.styled';

export function Popup({ settings: { visible, content = {} }, setSettings }) {
  const {
    name,
    gender,
    image,
    status,
    species,
    type,
    origin,
    location,
    episode: episodes
  } = content;

  // Запретить прокрутку при открытом попапе
  useEffect(() => {
    if (visible) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [visible]);

  // Закрыть попап при клике на Esc на клавиатуре
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        setSettings((prev) => ({ ...prev, visible: false }));
      }
    }

    if (visible) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [visible, setSettings]);

  const togglePopup = useCallback(
    (e) => {
      if (e.currentTarget !== e.target) {
        return;
      }

      setSettings((prevState) => ({
        ...prevState,
        visible: !prevState.visible
      }));
    },
    [setSettings]
  );

  return (
    <PopupContainer visible={visible} onClick={togglePopup}>
      <StyledPopup>
        <CloseIcon onClick={togglePopup} />

        <PopupHeader
          name={name}
          gender={gender}
          image={image}
          status={status}
          species={species}
          type={type}
        />

        <PopupInfo origin={origin} location={location} />

        <PopupEpisodes episodes={episodes} />
      </StyledPopup>
    </PopupContainer>
  );
}
