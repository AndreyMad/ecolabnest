import React from 'react';
import {
  Create as RaCreate,
  required,
  TextInput,
  SimpleForm,
  SelectInput,
} from 'react-admin';
import { USER_TYPES } from '../../constants/enums';

export const Create = (props) => (
  <RaCreate {...props}>
    <SimpleForm>
      <TextInput source="firstName" label="Ім'я" validate={required()} />
      <TextInput source="lastName" label="Прізвище" validate={required()} />
      <TextInput source="email" validate={required()} />
      <TextInput source="password" label="Пароль" validate={required()} />
      <SelectInput source="role" label="Тип користувача" choices={USER_TYPES} validate={required()} />
      <TextInput source="phone" label="Телефон" validate={required()} />
      <TextInput source="telegram" label="Телеграм" validate={required()} />
    </SimpleForm>
  </RaCreate>
);
