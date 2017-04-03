import { setMeta } from 'walas-meta-api';
import { getSource} from '../utils';

export const ignore = function () {
    return function (target, key, descriptor) {
        let source = getSource(descriptor);
        setMeta(target, `properties.${key}.ignore`, true);
    };
}
