import React from 'react';
import {
  List as RaList,
  TextField,
  EditButton,
} from 'react-admin';
import CustomizableDatagrid from 'ra-customizable-datagrid';
import { Filter } from './Filter';
import { CUSTOM_STORAGE } from '../../../constants/list-column-custom-storage';

export const List = (props) => (
  <RaList filters={<Filter />} bulkActionButtons={false} {...props}>
    <CustomizableDatagrid
      rowClick="show"
      storage={CUSTOM_STORAGE}
    >
      <TextField source="id" />
      <TextField source="name" label="Назва" />
      <TextField source="region" label="Область" />
      <EditButton />
    </CustomizableDatagrid>
  </RaList>
);
