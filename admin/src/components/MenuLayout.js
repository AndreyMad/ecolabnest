import * as React from 'react';
import { Layout } from 'react-admin';

import { Menu } from './Menu';

export const MenuLayout = (props) => <Layout {...props} menu={Menu} />;
