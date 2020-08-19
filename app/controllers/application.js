import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import ENV from 'firehose/config/environment';

export default class ApplicationController extends Controller {
  @service session;

  siteName = ENV.SITE_NAME;
  authorUrl = ENV.AUTHOR_URL;
  collapsed = true;

  @action
  async signOut() {
    this.session.invalidate();

    await this.store.unloadAll('bookmark');
    await this.store.findAll('bookmark');

    this.transitionToRoute('index');
  }
}
