import { Actor } from './Actor';
import { Payload } from './Payload';
import { Repo } from './Repo';

export interface Action {
  id: string;
  type: string;
  actor: Actor;
  repo: Repo;
  payload: Payload;
  public: boolean;
  created_at: string;
}
