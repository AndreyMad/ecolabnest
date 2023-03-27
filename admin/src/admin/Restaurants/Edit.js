import React from 'react';
import {
  Edit as RaEdit,
  TextInput,
  SimpleForm,
  SelectInput,
  AutocompleteInput,
  ReferenceInput, required,
} from 'react-admin';
import { RESTAURANT_TYPES } from '../../constants/enums';
import { filterToQueryBuilder } from '../../utils/helpers';

export const Edit = (props) => {
  const redirect = (basePath) => `${basePath}`;

  return (
    <RaEdit {...props}>
      <SimpleForm redirect={redirect}>
        <TextInput source="name" label="Назва" />
        <TextInput source="address" label="Адреса" />
        <SelectInput source="type" label="Тип ресторану" choices={RESTAURANT_TYPES} />
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
        <TextInput label="Email" validate={required()} source="email" />
        <TextInput label="Телефон" validate={required()} source="phoneNumber" />
        <TextInput source="latitude" label="Координати широта" />
        <TextInput source="longtitude" label="Координати довгота" />
      </SimpleForm>
    </RaEdit>
  );
};
