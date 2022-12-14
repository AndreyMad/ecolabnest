import React from 'react';
import {
  Create as RaCreate,
  required,
  TextInput,
  SimpleForm,
  SelectInput,
  AutocompleteInput,
  ReferenceInput,
} from 'react-admin';
import { RESTOURANT_TYPES } from '../../constants/enums';
import { filterToQueryBuilder } from '../../utils/helpers';

export const Create = (props) => {
  const redirect = (basePath) => `${basePath}`;

  return (
    <RaCreate {...props}>
      <SimpleForm redirect={redirect}>
        <TextInput source="name" label="Назва" validate={required()} />
        <TextInput source="address" label="Адреса" validate={required()} />
        <SelectInput source="type" label="Тип ресторана" choices={RESTOURANT_TYPES} validate={required()} />
        <ReferenceInput
          alwaysOn
          label="Місто"
          defaultValue=""
          source="city.id"
          reference="cities"
          validate={required()}
          filterToQuery={filterToQueryBuilder('name')}
        >
          <AutocompleteInput
            fullWidth
            allowEmpty={false}
            optionText={(entity) => (entity && entity.id ? `${entity.name}` : '')}
          />
        </ReferenceInput>
        <TextInput source="equipments" label="Обладнання" />
        <TextInput source="latitude" label="Координати широта" />
        <TextInput source="longtitude" label="Координати довгота" />
      </SimpleForm>
    </RaCreate>
  );
};
