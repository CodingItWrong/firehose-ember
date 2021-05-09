import { action } from '@ember/object';
import Route from '@ember/routing/route';

export default class LoginRoute extends Route {
  @action
  didTransition() {
    // eslint-disable-next-line ember/no-controller-access-in-routes
    this.controller.resetLoginForm();
  }
}
