import React from 'react';
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
  useUpdate,
  useGetIdentity,
} from 'react-admin';
import { VISIT_TYPES, USER_TYPE } from '../../constants/enums';
import { filterToQueryBuilder } from '../../utils/helpers';

export const Edit = (props) => {
  const redirect = (basePath) => `${basePath}`;
  const [update] = useUpdate();
  const identity = useGetIdentity();
  console.log('identity', identity);

  const updateHandler = async (data) => {
    const editedData = {};
    Object.keys(data).map((el) => {
      if (el === 'equipmentsList') {
        editedData.equipmentsList = data[el].map((key) => (
          key.equipmentsList ? key.equipmentsList : key
        ));
      }
      editedData[el] = data[el];
      return null;
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
          reference="restaurants"
          validate={required()}
        >
          <AutocompleteInput
            fullWidth
            allowEmpty={false}
            optionText={(entity) => (entity && entity.id ? `${entity.name}` : '')}
          />
        </ReferenceInput>
        <ReferenceInput
          alwaysOn
          label="Інженер"
          source="user.id"
          reference="users"
          filter={{ role: USER_TYPE.INGENEER }}
          filterToQuery={filterToQueryBuilder('id', 'firstName', 'lastName')}
        >
          <AutocompleteInput
            fullWidth
            optionText={(entity) => (entity && entity.id
              ? `${entity.firstName} ${entity.lastName}`
              : '')}
          />
        </ReferenceInput>
        <TextInput
          multiline
          source="engineerComment"
          label="Коментар інженера"
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
