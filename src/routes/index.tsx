import authRoutes from './authentication';
import errorsRoutes from './errors';

import privateRoutes from './private';

export const publicRoutes = new Array().concat(authRoutes, errorsRoutes);
export { privateRoutes };