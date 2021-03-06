import { DECORATORS } from '../constants';
import { createMixedDecorator } from './helpers';

export const ApiConsumes = (...mimeTypes: string[]) => {
    return createMixedDecorator(DECORATORS.API_CONSUMES, mimeTypes);
};