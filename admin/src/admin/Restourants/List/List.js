/*eslint-disable*/
import React from 'react';
import {
  List as RaList,
  DateField,
  TextField,
  EmailField,
  EditButton,
  ReferenceField,
} from 'react-admin';
import CustomizableDatagrid from 'ra-customizable-datagrid';
import { Filter } from './Filter';
import { CUSTOM_STORAGE } from '../../../constants/list-column-custom-storage';
import { ShowIdButton } from '../../../components/ShowIdButton';

// const DEFAULT_COLUMNS = ['id', 'email', 'firstName', 'lastName', 'role', 'phone', 'telegram', 'createdAt'];

export const List = (props) => (
  <RaList filters={<Filter />} bulkActionButtons={false} {...props}>
    <CustomizableDatagrid
      rowClick="show"
      storage={CUSTOM_STORAGE}
      // defaultColumns={DEFAULT_COLUMNS}
    >
      <ShowIdButton source="id" />
      <TextField source="name" label="Назва" />
      <TextField source="address" label="Адреса" />
      <TextField source="type" label="Тип ресторана" />
      <TextField source="city.name" label="Місто" />
      <TextField source="equipments" label="Обладнання" />
      <TextField source="latitude" label="Координати широта" />
      <TextField source="longtitude" label="Координати довгота" />
      <EditButton />
    </CustomizableDatagrid>
  </RaList>
);
