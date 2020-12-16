import JSONAPIAdapter from '@ember-data/adapter/json-api';
import { inject as service } from '@ember/service';
// eslint-disable-next-line ember/no-mixins
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import ENV from '../config/environment';

export default class ApplicationAdapter extends JSONAPIAdapter.extend(
  DataAdapterMixin,
) {
  @service session;

  host = ENV.apiHost;
  namespace = 'api';

  get headers() {
    const headers = {};
    if (this.session.isAuthenticated) {
      headers.Authorization = `Bearer ${this.session.data.authenticated.access_token}`;
    }
    return headers;
  }
}
