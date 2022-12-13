import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import englishMessages from 'ra-language-english';
import httpClient from './httpClient';
import { server } from './config/server';
import crudProvider from './providers/crudProvider';
import authProvider from './providers/authProvider';
import users from './admin/User';
import { MenuLayout } from './components/MenuLayout';

const App = () => {
  const i18nProvider = polyglotI18nProvider(() => englishMessages, 'en', {
    allowMissing: true,
    onMissingKey: (key, _, __) => key, // eslint-disable-line
  });

  return (
    <Admin
      i18nProvider={i18nProvider}
      layout={MenuLayout}
      authProvider={authProvider}
      dataProvider={crudProvider(server.apiUrl, httpClient)}
    >
      <Resource name="users" {...users} />
    </Admin>
  );
};

export default App;
