import Route from '@ember/routing/route';

export default Route.extend({
    model({slug}){
        const { courses } = this.modelFor('application');
        const matchedCourse = courses.filter(course => course.attributes.slug === slug);
        return matchedCourse.length > 0 ? matchedCourse[0].attributes.title : 'No item matched';
    }
});
