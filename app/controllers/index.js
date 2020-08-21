import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class IndexController extends Controller {
  @service session;

  @action
  async handleAdd() {
    this.send('refreshRoute'); // in case already on page 1
    this.transitionToRoute('index', { queryParams: { pageNumber: 1 } }); // in case not on page 1
  }
}
