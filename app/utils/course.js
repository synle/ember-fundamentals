// solution 1
import EmberObject from '@ember/object';

// old
// const Course = EmberObject.extend({
//     title: 'No Title',
//     description: '',
//     // tags: [],
//     // languages: [],x
//     init() {
//       this._super(...arguments);
//       this.set('tags', []);
//       this.set('languages', []);
//     },
// });

// Course.reopenClass({
//   languageName(lang){
//     switch(lang){
//       case 'js':
//         return 'JavaScript';
//       default:
//         return 'Unknown';
//     }
//   },
// });


class Course extends EmberObject {
  constructor() {
    super();
    this.tags = [];
    this.languages = [];
  }
  static languageName(lang) {
    switch(lang){
      case 'js':
        return 'JavaScript';
      default:
        return 'Unknown';
    }
  }
}

Course.prototype.title = 'No Title';
Course.prototype.description = '';

export default Course;
