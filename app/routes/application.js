import Route from '@ember/routing/route';
import { ALL_COURSES as courses } from '../controllers/application';

export default Route.extend({
    model() {
        return fetch('https://mikenorth-api-stage.herokuapp.com/api/v1/courses')
            .then(response => response.json())
            .then(({data}) => {
                return {
                    courses: data.map(course => Object.assign({id: course.id}, course.attributes))
                }
            })
    },
    model2() {
        return Promise.resolve({
            courses: courses.map((course, id) => Object.assign({id: '' + id}, course))
        });
    }
});
