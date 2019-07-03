import { BaseApiUrl } from '../types/BaseApiUrl.types';

export interface IEnvironment {
  production: boolean;
  baseApiUrl: BaseApiUrl;
}
