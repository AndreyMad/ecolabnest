import React from 'react';
import {
  Edit as RaEdit,
  TextInput,
  SimpleForm,
} from 'react-admin';

export const Edit = (props) => {
  const redirect = (basePath) => `${basePath}`;

  return (
    <RaEdit {...props}>
      <SimpleForm redirect={redirect}>
        <TextInput source="name" label="Назва" />
        <TextInput source="region" label="Область" />
      </SimpleForm>
    </RaEdit>
  );
};
