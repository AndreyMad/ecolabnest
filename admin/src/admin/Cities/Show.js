import React from 'react';
import {
  DeleteButton, Show as RaShow, SimpleShowLayout, TextField,
} from 'react-admin';

export const Show = (props) => (
  <RaShow {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="fullName" />
      <TextField source="email" />
      <TextField source="password" />
      <DeleteButton />
    </SimpleShowLayout>
  </RaShow>
);
