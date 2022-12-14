import React from 'react';
import {
  DeleteButton, Show as RaShow, SimpleShowLayout, TextField,
} from 'react-admin';

export const Show = (props) => (
  <RaShow {...props}>
    <SimpleShowLayout>
      <TextField source="name" label="Назва" />
      <TextField source="address" label="Адреса" />
      <TextField source="type" label="Тип ресторана" />
      <TextField label="Місто" source="city.name" />
      <TextField source="equipments" label="Обладнання" />
      <TextField source="latitude" label="Координати широта" />
      <TextField source="longtitude" label="Координати довгота" />
      <DeleteButton />
    </SimpleShowLayout>
  </RaShow>
);
