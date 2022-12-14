import React from 'react';
import {
  Edit as RaEdit,
  TextInput,
  SimpleForm,
  SelectInput,
} from 'react-admin';
import { USER_TYPES } from '../../constants/enums';

export const Edit = (props) => (
  <RaEdit {...props}>
    <SimpleForm>
      <TextInput source="firstName" label="Ім'я" />
      <TextInput source="lastName" label="Прізвище" />
      <TextInput source="email" />
      <TextInput source="password" label="Пароль" />
      <SelectInput source="role" label="Тип користувача" choices={USER_TYPES} />
      <TextInput source="phone" label="Телефон" />
      <TextInput source="telegram" label="Телеграм" />
    </SimpleForm>
  </RaEdit>
);
