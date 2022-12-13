import React from 'react';
import {
  Create as RaCreate,
  required,
  TextInput,
  SimpleForm,
} from 'react-admin';

export const Create = (props) => (
  <RaCreate {...props}>
    <SimpleForm>
      <TextInput source="fullName" validate={required()} />
      <TextInput source="email" validate={required()} />
      <TextInput source="password" validate={required()} />
    </SimpleForm>
  </RaCreate>
);
