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

const DEFAULT_COLUMNS = ['id', 'name', 'address', 'type', 'city.name'];

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
        <TextField source="equipmentType" label="Тип обладнання" />
        <TextField source="article" label="Артикул" />
        <TextField source="restaurant.name" label="Ресторан" />
        <EditButton />
      </CustomizableDatagrid>
    </RaList>
  );
};
