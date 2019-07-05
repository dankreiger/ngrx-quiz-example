import { BaseApiUrl } from './environment.types';

export interface IEnvironment {
  production: boolean;
  baseApiUrl: BaseApiUrl;
}
