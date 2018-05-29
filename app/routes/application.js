import Route from '@ember/routing/route';
import { ALL_COURSES as courses } from '../controllers/application';

export default Route.extend({
    async model() {
        const response = await fetch('https://mikenorth-api-stage.herokuapp.com/api/v1/courses');
        const { data: responseData } = await response.json();
        return {
            courses: responseData.map(course => Object.assign({id: course.id}, course.attributes))
        }
    },
    model2() {
        return Promise.resolve({
            courses: courses.map((course, id) => Object.assign({id: '' + id}, course))
        });
    }
});
