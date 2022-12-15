import React from 'react';
import {
  Create as RaCreate,
  required,
  TextInput,
  SimpleForm,
  AutocompleteInput,
  ReferenceInput,
} from 'react-admin';
import { filterToQueryBuilder } from '../../utils/helpers';

export const Create = (props) => {
  const redirect = (basePath) => `${basePath}`;

  return (
    <RaCreate {...props}>
      <SimpleForm redirect={redirect}>
        <TextInput source="name" label="Назва" validate={required()} />
        <TextInput source="article" label="Артикул" />
        <ReferenceInput
          alwaysOn
          label="Ресторан"
          defaultValue={null}
          source="restourant.id"
          reference="restourants"
          filterToQuery={filterToQueryBuilder('name')}
        >
          <AutocompleteInput
            fullWidth
            allowEmpty={false}
            optionText={(entity) => (entity && entity.id ? `${entity.name}` : '')}
          />
        </ReferenceInput>
      </SimpleForm>
    </RaCreate>
  );
};
