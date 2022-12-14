import React from 'react';
import {
  Filter as RaFilter,
  TextInput,
  SelectInput,
} from 'react-admin';
import { RESTOURANT_TYPES } from '../../../constants/enums';

export const Filter = (props) => (
  <RaFilter {...props}>
    <TextInput label="Назва" source="name||$contL" alwaysOn />
    <TextInput label="Адреса" source="address||$contL" alwaysOn />
    <TextInput label="Місто" source="city.name||$contL" alwaysOn />
    <SelectInput label="Тип" source="type||$eq" choices={RESTOURANT_TYPES} alwaysOn />
  </RaFilter>
);
