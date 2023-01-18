import React from 'react';
import {
  List as RaList,
  TextField,
  EditButton,
} from 'react-admin';
import CustomizableDatagrid from 'ra-customizable-datagrid';

import { Filter } from './Filter';
import { CUSTOM_STORAGE } from '../../../constants/list-column-custom-storage';
import { ShowIdButton } from '../../../components/ShowIdButton';

const DEFAULT_COLUMNS = ['id', 'name', 'visitType', 'createdAt', 'restourant.name'];

export const List = (props) => {
  console.log(props);
  return (
    <RaList filters={<Filter />} bulkActionButtons={false} {...props}>
      <CustomizableDatagrid
        rowClick="show"
        storage={CUSTOM_STORAGE}
        defaultColumns={DEFAULT_COLUMNS}
      >
        <ShowIdButton source="id" />
        <TextField source="name" label="Назва" />
        <TextField source="createdAt" label="Створено" />
        <TextField source="visitType" label="Тип візиту" />
        <TextField source="restourant.name" label="Ресторан" />
        <EditButton />
      </CustomizableDatagrid>
    </RaList>
  );
};
