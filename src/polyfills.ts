import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

import { IsProduction } from './environments/environment';

if (IsProduction) {

} else {
  Error['stackTraceLimit'] = Infinity;
  require('zone.js/dist/long-stack-trace-zone');
}
