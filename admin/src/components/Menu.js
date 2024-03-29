import * as React from 'react';
import { MenuItemLink } from 'react-admin';
import {
  GroupSharp,
  LocationCity,
  LocalCafe,
  Extension,
  TableChart,
} from '@material-ui/icons';

export const Menu = () => (
  <div>
    <MenuItemLink to="/users" primaryText="Користувачі" leftIcon={<GroupSharp />} />
    <MenuItemLink to="/cities" primaryText="Міста" leftIcon={<LocationCity />} />
    <MenuItemLink to="/restaurants" primaryText="Ресторани" leftIcon={<LocalCafe />} />
    <MenuItemLink to="/equipments" primaryText="Обладнання" leftIcon={<Extension />} />
    <MenuItemLink to="/visits" primaryText="Візити" leftIcon={<TableChart />} />
  </div>
);
