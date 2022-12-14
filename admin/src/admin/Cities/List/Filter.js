import React from 'react';
import {
  Filter as RaFilter,
  TextInput,
} from 'react-admin';

export const Filter = (props) => (
  <RaFilter {...props}>
    <TextInput label="Назва" source="email||$contL" alwaysOn />
    <TextInput label="Область" source="region||$contL" alwaysOn />
  </RaFilter>
);
