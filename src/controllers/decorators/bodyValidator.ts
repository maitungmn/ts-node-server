import { MetadataKeys } from './MetadataKeys';
import 'reflect-metadata';

export function bodyValidator(...keys: string[]) {
  return function (target: any, key: string, desc: PropertyDecorator) {
    Reflect.defineMetadata(MetadataKeys.validator, keys, target, key);
  };
}
