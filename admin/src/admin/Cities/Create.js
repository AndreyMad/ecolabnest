import React from 'react';
import {
  Create as RaCreate,
  required,
  TextInput,
  SimpleForm,
} from 'react-admin';

export const Create = (props) => {
  const redirect = (basePath) => `${basePath}`;

  return (
    <RaCreate {...props}>
      <SimpleForm redirect={redirect}>
        <TextInput source="name" label="Назва" validate={required()} />
        <TextInput source="region" label="Область" validate={required()} />
      </SimpleForm>
    </RaCreate>
  );
};
