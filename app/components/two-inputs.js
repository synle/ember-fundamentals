import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    str: null,
    uppercaseStr: computed('str', {
        get() {
            return (this.get('str') || '').toUpperCase();
        },
        set(key, value) {
            this.set('str', value.toLowerCase());
            return value.toUpperCase();
        }
    }),
});
