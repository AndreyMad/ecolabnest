import React from 'react';
import {
  DeleteButton, Show as RaShow, SimpleShowLayout, TextField,
} from 'react-admin';

export const Show = (props) => (
  <RaShow {...props}>
    <SimpleShowLayout>
      <TextField source="name" label="Назва" />
      <TextField source="article" label="Артикул" />
      <TextField source="restourant.name" label="Ресторан" />
      <DeleteButton />
    </SimpleShowLayout>
  </RaShow>
);
