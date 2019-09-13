import { Container } from 'inversify';
import getDecorators from 'inversify-inject-decorators';
import { Provider, NameProvider } from './providers';

const container = new Container();
container.bind<Provider<string>>('nameProvider').to(NameProvider);

const { lazyInject } = getDecorators(container);

export { lazyInject };
