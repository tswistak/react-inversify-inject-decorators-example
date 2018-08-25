import { Container } from "inversify";
import getDecorators from "inversify-inject-decorators";
import { IProvider, NameProvider } from "./providers";

const container = new Container();
container.bind<IProvider<string>>("nameProvider").to(NameProvider);

const { lazyInject } = getDecorators(container);

export { lazyInject };
