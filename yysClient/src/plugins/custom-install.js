import Vue2TouchEvents from 'vue2-touch-events'
import Vue3TouchEvents from "vue3-touch-events";

export function install(app) {
        app.use(Vue2TouchEvents, {
            disableClick: true,
            touchClass: '',
            tapTolerance: 10,
            touchHoldTolerance: 400,
            swipeTolerance: 30,
            longTapTimeInterval: 400,
            namespace: 'touch'
        });
        app.use(Vue3TouchEvents);
    }
