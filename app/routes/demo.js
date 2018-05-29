import Route from '@ember/routing/route';
import { ALL_COURSES as courses } from '../controllers/application';

export default Route.extend({
    model() {
        return Promise.resolve({ courses });
    }
});
