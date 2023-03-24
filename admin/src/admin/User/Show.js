import React from 'react';
import {
  DeleteButton, Show as RaShow, SimpleShowLayout, TextField,
} from 'react-admin';

export const Show = (props) => (
  <RaShow {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="firstName" label="Ім'я" />
      <TextField source="lastName" label="Прізвище" />
      <TextField source="email" />
      <TextField source="phone" label="Телефон" />
      <TextField source="telegram" label="Телеграм" />
      <TextField source="role" label="Тип користувача" />
      <DeleteButton />
    </SimpleShowLayout>
  </RaShow>
);
