import React from 'react';
import {
  Edit as RaEdit,
  TextInput,
  SimpleForm,
  SelectInput,
  AutocompleteInput,
  ReferenceInput,
} from 'react-admin';
import { RESTOURANT_TYPES } from '../../constants/enums';
import { filterToQueryBuilder } from '../../utils/helpers';

export const Edit = (props) => {
  const redirect = (basePath) => `${basePath}`;

  return (
    <RaEdit {...props}>
      <SimpleForm redirect={redirect}>
        <TextInput source="name" label="Назва" />
        <TextInput source="address" label="Адреса" />
        <SelectInput source="type" label="Тип ресторана" choices={RESTOURANT_TYPES} />
        <ReferenceInput
          alwaysOn
          label="Місто"
          source="city.id"
          reference="cities"
          filterToQuery={filterToQueryBuilder('id', 'name')}
          allowEmpty={false}
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
    </RaEdit>
  );
};
