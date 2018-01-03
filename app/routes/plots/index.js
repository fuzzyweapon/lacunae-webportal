import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { inject as service } from '@ember/service';

export default Route.extend({
    ajax: service(),
    titleToken: 'Plots',
    
    model: function() {
        let aj = this.get('ajax');
        return aj.queryMany('plots', {});
    }
});