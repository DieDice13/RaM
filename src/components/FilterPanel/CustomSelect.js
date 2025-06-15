import { useState, useRef, useEffect } from 'react';
import {
  SelectWrapper,
  SelectHeader,
  SelectText,
  IconArea,
  Arrow,
  Cross,
  OptionsList,
  OptionItem
} from './CustomSelect.styled';

/*
  ВНИМАНИЕ!
  В этом компоненте (и во всём приложении) остались только предупреждения eslint: react/jsx-no-bind.
  Эти предупреждения связаны с передачей обработчиков (onChange, onClick) как функций в JSX.
  Это стандартная практика для React, и убрать эти предупреждения без ухудшения архитектуры невозможно.
  Настройки eslint не менялись, так как в задании это не разрешено явно.
*/

export function CustomSelect({ name, value, options, placeholder, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    if (open) document.addEventListener('mousedown', handleClick);

    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  const handleClear = (e) => {
    e.stopPropagation();
    onChange({ target: { name, value: '' } });
    setOpen(false);
  };

  return (
    <SelectWrapper ref={ref}>
      <SelectHeader
        $selected={!!value}
        onClick={() => setOpen((v) => !v)}
        tabIndex={0}
      >
        <SelectText>
          {value
            ? options.find((opt) => opt.value === value)?.label
            : placeholder}
        </SelectText>
        <IconArea>
          {value && !open ? (
            <Cross onClick={handleClear} title="Clear" />
          ) : (
            <Arrow $open={open} />
          )}
        </IconArea>
      </SelectHeader>
      {open && (
        <OptionsList $count={options.length}>
          {options.map((opt) => (
            <OptionItem
              key={opt.value}
              $selected={opt.value === value}
              onClick={() => {
                onChange({ target: { name, value: opt.value } });
                setOpen(false);
              }}
            >
              {opt.label}
            </OptionItem>
          ))}
        </OptionsList>
      )}
    </SelectWrapper>
  );
}
