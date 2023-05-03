import React from 'react';
import {
  AutocompleteInput,
  Filter as RaFilter,
  ReferenceInput,
  TextInput,
  SelectInput,
} from 'react-admin';
import { filterToQueryBuilder } from '../../../utils/helpers';
import { EQUIPMENT_TYPES } from '../../../constants/enums';

export const Filter = (props) => (
  <RaFilter {...props}>
    <TextInput label="Назва" source="name||$contL" alwaysOn />
    <TextInput label="Артикул" source="address||$contL" />
    <SelectInput label="Тип обладнання" source="equipmentType||$eq" choices={EQUIPMENT_TYPES} alwaysOn />
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
