import React from 'react';
import {
  List as RaList,
  TextField,
  EditButton, FunctionField,
} from 'react-admin';
import CustomizableDatagrid from 'ra-customizable-datagrid';
import dayjs from 'dayjs';
import { Filter } from './Filter';
import { CUSTOM_STORAGE } from '../../../constants/list-column-custom-storage';
import { ShowIdButton } from '../../../components/ShowIdButton';

const DEFAULT_COLUMNS = ['id', 'name', 'visitType', 'createdAt', 'restaurant.name'];

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
        <FunctionField
          source="createdAt"
          label="Створено"
          render={(record) => <span>{dayjs(record.createdAt).format('DD-MM-YYYY HH:MM')}</span>}
        />
        <FunctionField
          source="user"
          label="Інженер"
          render={(record) => {
            console.log(record);
          }}
        />
        <TextField source="visitType" label="Тип візиту" />
        <TextField source="restaurant.name" label="Ресторан" />
        <EditButton />
      </CustomizableDatagrid>
    </RaList>
  );
};
