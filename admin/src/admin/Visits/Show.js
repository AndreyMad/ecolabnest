import React from 'react';
import {
  DeleteButton,
  Show as RaShow,
  SimpleShowLayout,
  TextField,
  ArrayField,
  Datagrid,
} from 'react-admin';
import { Box, Typography } from '@mui/material';

export const Show = (props) => (
  <RaShow {...props}>
    <SimpleShowLayout>
      <Box display="flex">
        <Box flex={1} mr="0.5em">
          <SimpleShowLayout>
            <Typography>Деталі візиту</Typography>
            <TextField source="id" label="Id" />
            <TextField source="name" label="Назва" />
            <TextField source="visitType" label="Тип візиту" />
            <TextField source="engineerComment" label="Коментар інжінера" />
            <TextField source="managerComment" label="Коментар менеджера" />
            <DeleteButton />
          </SimpleShowLayout>
        </Box>
        <Box flex={1} mr="0.5em">
          <SimpleShowLayout>
            <Typography>Ресторан</Typography>
            <TextField source="restourant.id" label="Id" />
            <TextField source="restourant.name" label="Назва" />
            <TextField source="restourant.address" label="Адреса" />
            <TextField source="restourant.type" label="Тип" />
            <TextField source="restourant.latitude" label="Широта" />
            <TextField source="restourant.longtitude" label="Довгота" />
          </SimpleShowLayout>
        </Box>
        <Box flex={1} mr="0.5em">
          <ArrayField source="equipmentsList">
            <Datagrid>
              <TextField source="id" label="Id" />
              <TextField source="article" label="Артикул" />
              <TextField source="name" label="Назва" />
            </Datagrid>
          </ArrayField>
        </Box>
      </Box>
    </SimpleShowLayout>
  </RaShow>
);
