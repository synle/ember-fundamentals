import Route from '@ember/routing/route';

export default Route.extend({
    model({course_index}){
        const { courses } = this.modelFor('courses');
        return Promise.resolve(courses[course_index] ? courses[course_index].title : 'No item matched');
    }
});
