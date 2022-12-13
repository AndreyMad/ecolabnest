import React from 'react';
import {
  Filter as RaFilter,
  TextInput,
} from 'react-admin';

export const Filter = (props) => (
  <RaFilter {...props}>
    <TextInput label="Email" source="email||$contL" alwaysOn />
    <TextInput label="FullName" source="fullName||$contL" alwaysOn />
  </RaFilter>
);
