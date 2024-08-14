import { ApiTags } from '@nestjs/swagger';
import { ZodValidationPipe } from 'nestjs-zod';
import { applyDecorators, Controller, UsePipes } from '@nestjs/common';
import { Utils } from '@/common/utils';

/**
 * @param {string} [path] - receive a path to define controller (optional).
 * @example
 * .@DefineController('any-route')
 * class AnyRoute {
 *    ...
 * }
 */
export const DefineController = (path?: string) => {
  const label = Utils.labelize(path);
  const controller = path?.toLowerCase() || '';

  return applyDecorators(ApiTags(label), Controller(controller), UsePipes(ZodValidationPipe));
};
