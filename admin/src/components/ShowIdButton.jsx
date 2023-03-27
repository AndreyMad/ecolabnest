import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'ra-ui-materialui';

export const ShowIdButton = ({ source, record = {}, ...rest }) => (
  <Button
    size="small"
    variant="outlined"
    color="primary"
    component={Link}
    to={`${rest.basePath}/${record.id}/show`}
    label={record[source]}
    title="Show"
  >
    {`${record.id}`}
  </Button>
);
