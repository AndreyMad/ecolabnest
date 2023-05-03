import React from 'react';
import { ImageField } from 'react-admin';
import { server as serverConfig } from '../config/server';

const ImageServerField = ({ record = {}, source, ...props }) => {
  if (record[source] && !record[source].includes('http')) {
    record[source] = `${serverConfig.apiUrl}${record[source]}`;
  }
  console.log('record', record);
  console.log('source', source);
  return (
    <ImageField
      {...props}
      record={record}
      source={source}
      label="Image"
      title="Image"
    />
  );
};

export default ImageServerField;
