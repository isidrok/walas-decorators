import { MyDbContext} from './mydbcontext';
import { Foo } from './foo';
let context = new MyDbContext();
let foo = new Foo();
context.Foo.add(foo);
context.configuration();
