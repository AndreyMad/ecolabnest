import React from 'react';
import {
  Edit as RaEdit,
  TextInput,
  SimpleForm,
  AutocompleteInput,
  ReferenceInput,
} from 'react-admin';
import { filterToQueryBuilder } from '../../utils/helpers';

export const Edit = (props) => {
  const redirect = (basePath) => `${basePath}`;

  return (
    <RaEdit {...props}>
      <SimpleForm redirect={redirect}>
        <TextInput source="name" label="Назва" />
        <TextInput source="article" label="Артикул" />
        <ReferenceInput
          alwaysOn
          label="Ресторан"
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
    </RaEdit>
  );
};
