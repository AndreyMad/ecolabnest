import React from 'react';
import {
  Create as RaCreate,
  required,
  TextInput,
  SimpleForm,
  AutocompleteInput,
  ReferenceInput,
  SelectInput,
  SimpleFormIterator,
  ArrayInput,
} from 'react-admin';
import { filterToQueryBuilder } from '../../utils/helpers';
import { VISIT_TYPES } from '../../constants/enums';

export const Create = (props) => {
  const redirect = (basePath) => `${basePath}`;

  return (
    <RaCreate {...props}>
      <SimpleForm redirect={redirect}>
        <TextInput source="name" label="Назва" validate={required()} />
        <SelectInput
          source="visitType"
          label="Тип візиту"
          choices={VISIT_TYPES}
          validate={required()}
        />
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
            optionText={(entity) => (
              entity && entity.id ? `${entity.name}` : ''
            )}
          />
        </ReferenceInput>
        <TextInput
          multiline
          source="engineerComment"
          label="Коментар інжинера"
          validate={required()}
        />
        <TextInput
          multiline
          sx={{ minHeight: '200px' }}
          source="managerComment"
          label="Коментар менеджера"
          validate={required()}
        />
        <ArrayInput source="equipmentsList" label="Список обладнання">
          <SimpleFormIterator>
            <ReferenceInput
              alwaysOn
              label="Обладнання"
              source="id"
              reference="equipments"
              allowEmpty={false}
              validate={required()}
              filterToQuery={filterToQueryBuilder('id', 'name')}
            >
              <AutocompleteInput
                fullWidth
                optionText={(entity) => `(${entity.id}) ${entity.name}`}
              />
            </ReferenceInput>
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </RaCreate>
  );
};
