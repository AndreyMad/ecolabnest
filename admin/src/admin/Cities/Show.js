import React from 'react';
import {
  DeleteButton, Show as RaShow, SimpleShowLayout, TextField,
} from 'react-admin';

export const Show = (props) => (
  <RaShow {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" label="Назва" />
      <TextField source="region" label="Назва" />
      <DeleteButton />
    </SimpleShowLayout>
  </RaShow>
);
