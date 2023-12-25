import { isProd } from '../isProd';
import { onIndexShowHandler } from './eventHandlers/onIndexShowHandler';


const onIndexShow = [
  'app.record.index.show',
  'mobile.app.record.index.show',
];


(async () => {
  console.log(`Running in ${isProd ? 'production' : 'development'}`);
  kintone.events.on(onIndexShow, onIndexShowHandler);

})();
