export const USER_TYPE = {
  ADMIN: 'ADMIN',
  INGENEER: 'INGENEER',
  RESTAURANT: 'RESTAURANT',
};

export const USER_TYPES = [
  { id: USER_TYPE.ADMIN, name: USER_TYPE.ADMIN },
  { id: USER_TYPE.INGENEER, name: USER_TYPE.INGENEER },
  { id: USER_TYPE.RESTAURANT, name: USER_TYPE.RESTAURANT },
];

export const RESTAURANT_TYPE = {
  MCDONALDS: 'MCDONALDS',
  KFC: 'KFC',
  HESBURGER: 'HESBURGER',
  SLOWFOODS: 'SLOWFOODS',
  CINNABONE: 'CINNABONE',
  OTHER: 'OTHER',
};

export const RESTAURANT_TYPES = [
  { id: RESTAURANT_TYPE.MCDONALDS, name: RESTAURANT_TYPE.MCDONALDS },
  { id: RESTAURANT_TYPE.KFC, name: RESTAURANT_TYPE.KFC },
  { id: RESTAURANT_TYPE.HESBURGER, name: RESTAURANT_TYPE.HESBURGER },
  { id: RESTAURANT_TYPE.SLOWFOODS, name: RESTAURANT_TYPE.SLOWFOODS },
  { id: RESTAURANT_TYPE.CINNABONE, name: RESTAURANT_TYPE.CINNABONE },
  { id: RESTAURANT_TYPE.OTHER, name: RESTAURANT_TYPE.OTHER },
];

export const VISIT_TYPE = {
  SERVICE_VISIT: 'SERVICE_VISIT',
  NEW_RESTAURANT: 'NEW_RESTAURANT',
  REQUEST_VISIT: 'REQUEST_VISIT',
};

export const VISIT_TYPES = [
  { id: VISIT_TYPE.SERVICE_VISIT, name: VISIT_TYPE.SERVICE_VISIT },
  { id: VISIT_TYPE.NEW_RESTAURANT, name: VISIT_TYPE.NEW_RESTAURANT },
  { id: VISIT_TYPE.REQUEST_VISIT, name: VISIT_TYPE.REQUEST_VISIT },
];
