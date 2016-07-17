import reporter from 'redux-reporter';

export default reporter(({ type, payload }) => {

    try {
        window._satellite.setVar('payload', payload);
        window._satellite.track(type);
    } catch (err) {
        console.error(err);
    }

}, ({ meta = {} }) => meta.analytics);
