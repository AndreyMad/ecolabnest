import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'ra-ui-materialui';

export const ShowEquipmentButton = ({ source, record }) => {
  if (record.equipments.length < 1) {
    return <span>Немає обладнання</span>;
  }
  const getLinkUrl = () => {
    const filter = {
      restaurant: {
        'id||$eq': record.id,
      },
    };

    return {
      pathname: '/equipments',
      search: `filter=${JSON.stringify(filter)}`,
    };
  };

  return (
    <Button
      size="small"
      variant="outlined"
      color="primary"
      component={Link}
      to={getLinkUrl()}
      label={record[source]}
      title="Show"
      target="_blank"
    >
      Обладнання
    </Button>
  );
};
