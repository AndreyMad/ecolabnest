import React from 'react';
import {
  AutocompleteInput,
  Filter as RaFilter,
  ReferenceInput,
  TextInput,
} from 'react-admin';
import { filterToQueryBuilder } from '../../../utils/helpers';

export const Filter = (props) => (
  <RaFilter {...props}>
    <TextInput label="Назва" source="name||$contL" alwaysOn />
    <TextInput label="Артикул" source="address||$contL" />
    <ReferenceInput
      allowEmpty={false}
      source="restaurant.id||$eq"
      reference="restaurants"
      filterToQuery={filterToQueryBuilder('id', 'name')}
      label="Ресторан"
      alwaysOn
    >
      <AutocompleteInput
        resettable
        optionText={(a) => `(${a.id}) ${a.name}`}
      />
    </ReferenceInput>
  </RaFilter>
);
