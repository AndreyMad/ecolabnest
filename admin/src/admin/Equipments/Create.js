import React from 'react';
import {
  Create as RaCreate,
  required,
  TextInput,
  SimpleForm,
  AutocompleteInput,
  ReferenceInput,
  SelectInput,
} from 'react-admin';
import { filterToQueryBuilder } from '../../utils/helpers';
import { EQUIPMENT_TYPES } from '../../constants/enums';

export const Create = (props) => {
  const redirect = (basePath) => `${basePath}`;

  return (
    <RaCreate {...props}>
      <SimpleForm redirect={redirect}>
        <TextInput source="name" label="Назва" validate={required()} />
        <TextInput source="article" label="Артикул" />
        <SelectInput source="equipmentType" label="Тип обладнання" choices={EQUIPMENT_TYPES} validate={required()} />
        <ReferenceInput
          alwaysOn
          label="Ресторан"
          defaultValue={null}
          source="restaurant.id"
          reference="restaurants"
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
