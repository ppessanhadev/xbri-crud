import { ApiOperation, ApiParam, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { applyDecorators, Get, Post, Put, Delete, HttpCode } from '@nestjs/common';
import { UseRouteOptions } from '@/common/types/UseRouteOptions';

/**
 * @param {UseRouteOptions} [option] - receive an object with DefineRouteOptions (all are optional).
 * @example
 * class AnyRoute {
 *    .@UseRoute({
 *      method: 'GET', // default
 *      route: '/more-info',
 *      summary: 'This is an example',
 *      queries: [{ name: 'search', example: 'something' }],
 *      response: { type: ExampleDTO },
 *      code: 200,  // default
 *    })
 *    async index() {}
 * }
 */
export const UseRoute = (option: UseRouteOptions) => {
  const { method, summary, response, queries, params, description } = option;
  const route = option?.route || '';
  const code = option.code || 200;

  const methods = {
    GET: Get,
    POST: Post,
    UPDATE: Put,
    DELETE: Delete,
  };

  const applyQueries = () => {
    if (!queries) return [];
    return queries.map((query) => ApiQuery(query));
  };

  const applyParams = () => {
    if (!params) return [];
    return params.map((param) => ApiParam(param));
  };

  return applyDecorators(
    methods[method || 'GET'](route),
    HttpCode(code),
    ApiOperation({ summary, description }),
    ApiResponse({ ...(response || {}), status: code }),
    ...applyQueries(),
    ...applyParams(),
  );
};
