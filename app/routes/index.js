import { action } from '@ember/object';
import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  @action
  refreshRoute() {
    this.refresh();
  }
}
