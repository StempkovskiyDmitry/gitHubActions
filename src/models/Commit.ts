import { Author } from './Author';

export interface Commit {
  sha: string;
  author: Author;
  message: string;
  distinct: boolean;
  url: string;
}
