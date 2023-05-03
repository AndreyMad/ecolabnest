import React from 'react';
import {
  Create as RaCreate,
  required,
  TextInput,
  SimpleForm,
  AutocompleteInput,
  ReferenceInput,
  SelectInput,
  ImageInput,
  ImageField,
} from 'react-admin';
import { Box } from '@mui/material';
import { filterToQueryBuilder } from '../../utils/helpers';
import { EQUIPMENT_TYPES } from '../../constants/enums';

export const Create = (props) => {
  const redirect = (basePath) => `${basePath}`;

  return (
    <RaCreate {...props}>
      <Box display="flex">
        <Box flex={1} mr="1em">
          <SimpleForm redirect={redirect}>
            <TextInput source="name" label="Назва" validate={required()} />
            <TextInput source="article" label="Артикул" />
            <SelectInput
              source="equipmentType"
              label="Тип обладнання"
              choices={EQUIPMENT_TYPES}
              validate={required()}
            />
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
            <ImageInput
              source="imgFile"
              label="Image"
              accept="image/*"
              // maxSize="100000"
              placeholder="Завантажити зображення"
            >
              <ImageField source="imgUrl" />
            </ImageInput>
          </SimpleForm>
        </Box>
      </Box>
    </RaCreate>
  );
};
