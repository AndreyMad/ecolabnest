import React from 'react';
import {
  Edit as RaEdit,
  TextInput,
  SimpleForm,
  AutocompleteInput,
  ReferenceInput,
  SelectInput,
  required,
  ImageInput,
  ImageField,
} from 'react-admin';
import { filterToQueryBuilder } from '../../utils/helpers';
import { EQUIPMENT_TYPES } from '../../constants/enums';
import ImageServerField from '../../components/ServerImageField';

export const Edit = (props) => {
  const redirect = (basePath) => `${basePath}`;

  return (
    <RaEdit {...props}>
      <SimpleForm redirect={redirect}>
        <TextInput source="name" label="Назва" />
        <TextInput source="article" label="Артикул" />
        <SelectInput source="equipmentType" label="Тип обладнання" choices={EQUIPMENT_TYPES} validate={required()} />
        <ReferenceInput
          alwaysOn
          label="Ресторан"
          source="restaurant.id"
          reference="restaurants"
          filterToQuery={filterToQueryBuilder('name')}
        >
          <AutocompleteInput
            fullWidth
            resettable
            allowEmpty={false}
            optionText={(entity) => (entity && entity.id ? `${entity.name}` : '')}
          />
        </ReferenceInput>
        <ImageServerField label="Image" source="imgUrl" title="Image" />
        <ImageInput
          source="imgFile"
          label="Image"
          accept="image/*"
          placeholder="Завантажити зображення"
        >
          <ImageField source="imgUrl" />
        </ImageInput>
      </SimpleForm>
    </RaEdit>
  );
};
