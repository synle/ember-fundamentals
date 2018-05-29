import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return fetch('https://mikenorth-api-stage.herokuapp.com/api/v1/courses')
            .then(response => response.json())
            .then(({data}) => ({courses: data}))
    }
});
