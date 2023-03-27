import React from 'react';
import {
  Filter as RaFilter,
  TextInput,
  SelectInput,
} from 'react-admin';
import { RESTAURANT_TYPES } from '../../../constants/enums';

export const Filter = (props) => (
  <RaFilter {...props}>
    <TextInput label="Назва" source="name||$contL" alwaysOn />
    <TextInput label="Адреса" source="address||$contL" alwaysOn />
    <TextInput label="Місто" source="city.name||$contL" alwaysOn />
    <TextInput label="Email" source="email||$contL" alwaysOn />
    <TextInput label="Телефон" source="phoneNumber||$contL" alwaysOn />
    <SelectInput label="Тип" source="type||$eq" choices={RESTAURANT_TYPES} alwaysOn />
  </RaFilter>
);
