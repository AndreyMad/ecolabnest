import React from 'react';
import {
  Edit as RaEdit,
  TextInput,
  SimpleForm,
  required,
} from 'react-admin';

export const Edit = (props) => {
  const redirect = (basePath) => `${basePath}`;

  return (
    <RaEdit {...props}>
      <SimpleForm redirect={redirect}>
        <TextInput source="name" label="Назва" validate={required()} />
      </SimpleForm>
    </RaEdit>
  );
};
