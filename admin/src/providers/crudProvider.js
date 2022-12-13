import { CondOperator, RequestQueryBuilder } from '@nestjsx/crud-request';
import { fetchUtils } from 'ra-core';
import { stringify } from 'querystring';

const toBase64 = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onload = () => resolve({ file: reader.result, name: file.rawFile.name });
  reader.onerror = reject;
  reader.readAsDataURL(file.rawFile);
});

const splitFilters = (paramsFilter) => {
  const orFilters = {};
  const andFilters = {};
  Object.keys(paramsFilter).forEach((k) => {
    const key = Number(k);
    if (Number.isNaN(key)) {
      andFilters[k] = paramsFilter[k];
    } else {
      orFilters[k] = paramsFilter[k];
    }
  });

  return { orFilters, andFilters };
};

const composeFilter = (paramsFilter, isOr) => {
  if (isOr) {
    paramsFilter = Object.values(paramsFilter).reduce((res, el) => ({ ...res, ...el }), {});
  }
  if (paramsFilter === '' || (typeof paramsFilter.q !== 'undefined' && paramsFilter.q === '')) {
    paramsFilter = {};
  }

  const flatFilter = fetchUtils.flattenObject(paramsFilter);
  return Object.keys(flatFilter).map((key) => {
    const splitKey = key.split('||');
    const ops = splitKey[1] ? splitKey[1] : CondOperator.EQUALS;
    let field = splitKey[0];

    if (field.indexOf('_') === 0 && field.indexOf('.') > -1) {
      // eslint-disable-next-line prefer-destructuring
      field = field.split(/\.(.+)/)[1];
    }
    return { field, operator: ops, value: flatFilter[key] };
  });
};

const composeQueryParams = (queryParams) => stringify(fetchUtils.flattenObject(queryParams));

const mergeEncodedQueries = (...encodedQueries) => encodedQueries.map((query) => query).join('&');

export default (apiUrl, httpClient = fetchUtils.fetchJson) => ({
  getList: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { q: queryParams } = params.filter || {};
    const { orFilters, andFilters } = splitFilters(params.filter);
    const encodedQueryParams = composeQueryParams(queryParams);
    const encodedQueryFilter = RequestQueryBuilder.create({
      or: composeFilter(orFilters, true),
      filter: composeFilter(andFilters, false),
    })
      .setLimit(perPage)
      .setPage(page)
      .sortBy(params.sort)
      .setOffset((page - 1) * perPage)
      .query();

    const query = mergeEncodedQueries(encodedQueryParams, encodedQueryFilter);

    const url = `${apiUrl}/${resource}?${query}`;

    return httpClient(url).then(({ json }) => ({
      data: json.data,
      total: json.total,
    }));
  },

  getOne: (resource, params) => httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
    data: json,
  })),

  getMany: (resource, params) => {
    const query = RequestQueryBuilder.create()
      .setFilter({
        field: 'id',
        operator: CondOperator.IN,
        value: `${params.ids}`,
      })
      .query();

    const url = `${apiUrl}/${resource}?${query}`;

    return httpClient(url).then(({ json }) => ({ data: json }));
  },

  getManyReference: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { q: queryParams, ...otherFilters } = params.filter || {};
    const filter = composeFilter(otherFilters);

    filter.push({
      field: params.target,
      operator: CondOperator.EQUALS,
      value: params.id,
    });

    const encodedQueryParams = composeQueryParams(queryParams);
    const encodedQueryFilter = RequestQueryBuilder.create({
      filter,
    })
      .sortBy(params.sort)
      .setLimit(perPage)
      .setOffset((page - 1) * perPage)
      .query();

    const query = mergeEncodedQueries(encodedQueryParams, encodedQueryFilter);

    const url = `${apiUrl}/${resource}?${query}`;

    return httpClient(url).then(({ json }) => ({
      data: json.data,
      total: json.total,
    }));
  },

  update: async (resource, params) => {
    try {
      if (params.data.imgFile) {
        params.data.imgFile = await toBase64(params.data.imgFile);
      }
      if (params.data.imgFileEn) {
        params.data.imgFileEn = await toBase64(params.data.imgFileEn);
      }
    } catch (err) {
      params.data.imgFile = null;
      params.data.imgFileEn = null;
    }
    return httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: 'PATCH',
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json }));
  },

  updateMany: (resource, params) => Promise.all(
    params.ids.map((id) => httpClient(`${apiUrl}/${resource}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(params.data),
    })),
  ).then((responses) => ({
    data: responses.map(({ json }) => json),
  })),

  create: async (resource, params) => {
    try {
      if (params.data.imgFile) {
        params.data.imgFile = await toBase64(params.data.imgFile);
      }
      if (params.data.imgFileEn) {
        params.data.imgFileEn = await toBase64(params.data.imgFileEn);
      }
    } catch (err) {
      params.data.imgFile = null;
      params.data.imgFileEn = null;
    }
    return httpClient(`${apiUrl}/${resource}`, {
      method: 'POST',
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({
      data: { ...params.data, id: json.id },
    }));
  },

  delete: (resource, params) => httpClient(`${apiUrl}/${resource}/${params.id}`, {
    method: 'DELETE',
  }).then(({ json }) => ({ data: { ...json, id: params.id } })),

  deleteMany: (resource, params) => Promise.all(
    params.ids.map((id) => httpClient(`${apiUrl}/${resource}/${id}`, {
      method: 'DELETE',
    })),
  ).then((responses) => ({ data: responses.map(({ json }) => json) })),
});
