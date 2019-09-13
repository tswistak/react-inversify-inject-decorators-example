import { injectable } from 'inversify';

export interface Provider<T> {
  provide(): T;
}

@injectable()
export class NameProvider implements Provider<string> {
  provide() {
    return 'World';
  }
}
