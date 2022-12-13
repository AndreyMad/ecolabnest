import React from 'react';
import {
  Edit as RaEdit,
  required,
  TextInput,
  SimpleForm,
} from 'react-admin';

export const Edit = (props) => (
  <RaEdit {...props}>
    <SimpleForm>
      <TextInput source="fullName" validate={required()} />
      <TextInput source="email" validate={required()} />
      <TextInput source="password" />
    </SimpleForm>
  </RaEdit>
);
