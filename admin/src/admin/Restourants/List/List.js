import React from 'react';
import {
  List as RaList,
  TextField,
  EditButton,
  FunctionField,
} from 'react-admin';
import CustomizableDatagrid from 'ra-customizable-datagrid';
import {
  PriorityHigh,
  DoneAll,
} from '@material-ui/icons';

import { Filter } from './Filter';
import { CUSTOM_STORAGE } from '../../../constants/list-column-custom-storage';
import { ShowIdButton } from '../../../components/ShowIdButton';

const DEFAULT_COLUMNS = ['id', 'name', 'address', 'type', 'city.name'];

export const List = (props) => (
  <RaList filters={<Filter />} bulkActionButtons={false} {...props}>
    <CustomizableDatagrid
      rowClick="show"
      storage={CUSTOM_STORAGE}
      defaultColumns={DEFAULT_COLUMNS}
    >
      <ShowIdButton source="id" />
      <TextField source="name" label="Назва" />
      <TextField source="address" label="Адреса" />
      <TextField source="type" label="Тип ресторана" />
      <TextField source="city.name" label="Місто" />
      <TextField source="equipments" label="Обладнання" />
      <TextField source="latitude" label="Координати широта" />
      <TextField source="longtitude" label="Координати довгота" />
      <FunctionField
        label="Перший візит"
        render={({ isVisited }) => (
          isVisited ? <DoneAll htmlColor="lightGreen" /> : <PriorityHigh htmlColor="red" />
        )}
      />
      <EditButton />
    </CustomizableDatagrid>
  </RaList>
);
