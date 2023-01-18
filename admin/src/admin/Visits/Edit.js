/*eslint-disable*/
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
  TextField,
  useUpdate,
  FormDataConsumer,
} from 'react-admin';
import { VISIT_TYPES } from '../../constants/enums';
import { filterToQueryBuilder } from '../../utils/helpers';

export const Edit = (props) => {
  const redirect = (basePath) => `${basePath}`;
  const [update] = useUpdate();
  const updateHandler = (data) => {
    const editedData = {};
    Object.keys(data).map(el => {
      if (el !== 'equipmentsList') {
        return editedData[el] = data[el];
      }
      return editedData[el] = data[el].map(el => el.equipment);
    });
    console.log(data);

    update('visits', editedData.id, editedData);
    console.log(update);

  };
  return (
    <RaEdit {...props}>
      <SimpleForm save={updateHandler} redirect={redirect}>
        <TextInput source="name" label="Назва" validate={required()} />
        <SelectInput source="visitType" label="Тип візиту" choices={VISIT_TYPES} validate={required()} />
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
            optionText={(entity) => (entity && entity.id ? `${entity.name}` : '')}
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
          source="managerComment"
          label="Коментар менеджера"
          validate={required()}
        />
        <ArrayInput source="equipmentsList" resource="equipments" label="Список обладнання">
          <SimpleFormIterator>
            <FormDataConsumer>
              {({ scopedFormData }) => {
                console.log(scopedFormData);

                return (
                  <ReferenceInput label="Обладнання" source="equipment.id" reference="equipments">
                    <AutocompleteInput
                      fullWidth
                      allowEmpty={false}
                      optionText={(entity) => (entity && entity.id ? `(${entity.id}) ${entity?.name}` : '')}
                    />
                  </ReferenceInput>
                  // <ReferenceInput
                  //   alwaysOn
                  //   label="Обладнання"
                  //   source="equipment.id"
                  //   reference="equipments"
                  //   filterToQuery={filterToQueryBuilder('name')}
                  // >
                  //   <AutocompleteInput
                  //     fullWidth
                  //     allowEmpty={false}
                  //     inputValue={scopedFormData.name}
                  //     optionText={(entity) => (entity && entity.id ? `(${entity.id}) ${entity.name}` : '')}
                  //   />
                  // </ReferenceInput>
                )
              }}
            </FormDataConsumer>

          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </RaEdit>
  );
};
