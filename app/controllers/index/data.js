import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { sort } from '@ember/object/computed';
import { tracked } from '@glimmer/tracking';
import sortBy from 'lodash/sortBy';
import reverse from 'lodash/reverse';

export default class IndexDataController extends Controller {
  @service session;

  loggedOutLinkSorting = Object.freeze(['published_at:desc']);

  @tracked pageNumber = 1;

  get loggedInSortedLinks() {
    return reverse(sortBy(this.model.toArray(), ['moved_to_list_at']));
  }

  @sort('model', 'loggedOutLinkSorting')
  loggedOutSortedLinks;

  get totalPages() {
    return this.model.meta['page-count'];
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  @action
  nextPage() {
    this.incrementProperty('pageNumber');
    this.scrollToTop();
  }

  @action
  prevPage() {
    this.decrementProperty('pageNumber');
    this.scrollToTop();
  }
}
