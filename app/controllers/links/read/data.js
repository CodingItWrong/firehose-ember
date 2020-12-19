import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ReadLinksController extends Controller {
  @tracked pageNumber = 1;
  @tracked searchText = '';
  @tracked editedSearchText = '';

  get totalPages() {
    return this.model.meta['page-count'];
  }

  reset() {
    this.pageNumber = 1;

    // causes edited search text to flicker
    // this.set('searchText', '')
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  setSearchTextFromQP() {
    this.editedSearchText = this.searchText;
  }

  @action
  performSearch(e) {
    e.preventDefault();
    this.searchText = this.editedSearchText;
    this.pageNumber = 1;
  }

  @action
  nextPage() {
    this.pageNumber += 1;
    this.scrollToTop();
  }

  @action
  prevPage() {
    this.pageNumber -= 1;
    this.scrollToTop();
  }
}
