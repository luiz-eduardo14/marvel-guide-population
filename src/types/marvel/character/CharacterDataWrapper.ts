import { CharacterContainer } from './DataContainer';

export interface CharacterDataWrapper {
  code?: number;
  status?: string;
  data?: CharacterContainer;
  etag?: string;
  copyright?: string;
  attributionText?: string;
  attributionHTML?: string;
}