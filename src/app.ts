import {onIndexShowHandler} from './eventHandlers/onIndexShowHandler';

const onIndexShow = [
	'app.record.index.show',
	'mobile.app.record.index.show',
];

(() => {
	console.log(`Running in ${process.env.NODE_ENV}`);
	kintone.events.on(onIndexShow, onIndexShowHandler);
})();
