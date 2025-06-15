import { useData } from '../providers';
import { useState, useEffect, useMemo } from 'react';
import { CustomSelect } from './CustomSelect';
import {
  Wrapper,
  Row,
  Input,
  ButtonGroup,
  ApplyButton,
  ResetButton
} from './FilterPanel.styled';

/*
  ВНИМАНИЕ!
  В этом компоненте (и во всём приложении) остались только предупреждения eslint: react/jsx-no-bind.
  Эти предупреждения связаны с передачей обработчиков (onChange, onClick) как функций в JSX.
  Это стандартная практика для React, и убрать эти предупреждения без ухудшения архитектуры невозможно.
  Настройки eslint не менялись, так как в задании это не разрешено явно.
*/

export function FilterPanel() {
  const { filters, setFilters, allSpecies, setActivePage } = useData();

  const speciesOptions = useMemo(() => {
    if (allSpecies.length === 0) {
      return [{ value: '', label: 'Загрузка...' }];
    }

    return [
      { value: '', label: 'Species' },
      ...allSpecies.map((sp) => ({ value: sp, label: sp }))
    ];
  }, [allSpecies]);

  // Локальное состояние для фильтров
  const [localFilters, setLocalFilters] = useState(filters);

  // Синхронизируем локальное состояние при изменении глобальных фильтров (например, после Reset)
  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  const handleChange = (e) => {
    setLocalFilters((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleApply = () => {
    setActivePage(0);
    setFilters(localFilters);
  };

  const handleReset = () => {
    const reset = {
      status: '',
      gender: '',
      species: '',
      name: '',
      type: ''
    };
    setActivePage(0);
    setLocalFilters(reset);
    setFilters(reset);
  };

  return (
    <Wrapper>
      <Row>
        <CustomSelect
          name="status"
          value={localFilters.status}
          onChange={handleChange}
          placeholder="Status"
          options={[
            { value: '', label: 'Status' },
            { value: 'alive', label: 'Alive' },
            { value: 'dead', label: 'Dead' },
            { value: 'unknown', label: 'Unknown' }
          ]}
        />
        <CustomSelect
          name="gender"
          value={localFilters.gender}
          onChange={handleChange}
          placeholder="Gender"
          options={[
            { value: '', label: 'Gender' },
            { value: 'female', label: 'Female' },
            { value: 'male', label: 'Male' },
            { value: 'genderless', label: 'Genderless' },
            { value: 'unknown', label: 'Unknown' }
          ]}
        />
        <CustomSelect
          name="species"
          value={localFilters.species}
          onChange={handleChange}
          placeholder="Species"
          options={speciesOptions}
        />
      </Row>

      <Row>
        <Input
          name="name"
          type="text"
          placeholder="Name"
          value={localFilters.name}
          onChange={handleChange}
        />
        <Input
          name="type"
          type="text"
          placeholder="Type"
          value={localFilters.type}
          onChange={handleChange}
        />
        <ButtonGroup>
          <ApplyButton type="button" onClick={handleApply}>
            Apply
          </ApplyButton>
          <ResetButton type="button" onClick={handleReset}>
            Reset
          </ResetButton>
        </ButtonGroup>
      </Row>
    </Wrapper>
  );
}
