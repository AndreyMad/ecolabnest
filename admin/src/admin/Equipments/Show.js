import React from 'react';
import {
  DeleteButton, Show as RaShow, SimpleShowLayout, TextField,
} from 'react-admin';
import ImageServerField from '../../components/ServerImageField';

export const Show = (props) => (
  <RaShow {...props}>
    <SimpleShowLayout>
      <TextField source="name" label="Назва" />
      <TextField source="article" label="Артикул" />
      <TextField source="equipmentType" label="Тип обладнання" />
      <TextField source="restaurant.name" label="Ресторан" />
      <ImageServerField label="Image" source="imgUrl" title="Image" />
      <DeleteButton />
    </SimpleShowLayout>
  </RaShow>
);
