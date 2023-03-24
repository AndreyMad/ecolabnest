/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import {
  Edit as RaEdit,
  TextInput,
  SimpleForm,
  AutocompleteInput,
  ReferenceInput,
  ArrayInput,
  required,
  SelectInput,
  SimpleFormIterator,
  TextField,
  useUpdate,
  FormDataConsumer,
  Login,
} from 'react-admin';
import { useHistory } from 'react-router-dom';
import { VISIT_TYPES } from '../../constants/enums';
import { filterToQueryBuilder } from '../../utils/helpers';

export const Edit = (props) => {
  const redirect = (basePath) => `${basePath}`;
  const [update] = useUpdate();
  const history = useHistory();

  const updateHandler = async (data) => {
    const editedData = {};
    Object.keys(data).map((el) => {
      if (el === 'equipmentsList') {
        editedData.equipmentsList = data[el].map((el) =>
          el.equipmentsList ? el.equipmentsList : el
        );
      }
      editedData[el] = data[el];
      return;
    });
    update('visits', editedData.id, editedData);
  };

  return (
    <RaEdit {...props}>
      <SimpleForm saving={updateHandler} redirect={redirect}>
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
          source="restourant.id"
          reference="restourants"
          validate={required()}
        >
          <AutocompleteInput
            fullWidth
            allowEmpty={false}
            optionText={(entity) =>
              entity && entity.id ? `${entity.name}` : ''
            }
          />
        </ReferenceInput>
        <TextInput
          multiline
          source="engineerComment"
          label="Коментар інженера"
          validate={required()}
        />
        <TextInput
          multiline
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
    </RaEdit>
  );
};
