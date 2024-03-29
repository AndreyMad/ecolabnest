import React from 'react';
import {
  List as RaList,
  DateField,
  TextField,
  EmailField,
  EditButton,
} from 'react-admin';
import CustomizableDatagrid from 'ra-customizable-datagrid';
import { Filter } from './Filter';
import { CUSTOM_STORAGE } from '../../../constants/list-column-custom-storage';

const DEFAULT_COLUMNS = ['id', 'email', 'firstName', 'lastName', 'role', 'phone', 'telegram', 'createdAt'];

export const List = (props) => (
  <RaList filters={<Filter />} bulkActionButtons={false} {...props}>
    <CustomizableDatagrid
      rowClick="show"
      storage={CUSTOM_STORAGE}
      defaultColumns={DEFAULT_COLUMNS}
    >
      <TextField source="id" />
      <EmailField source="email" />
      <TextField source="firstName" />
      <TextField source="lastName" />
      <TextField source="role" />
      <TextField source="phone" />
      <TextField source="telegram" />
      <DateField source="updatedAt" />
      <EditButton />
    </CustomizableDatagrid>
  </RaList>
);
