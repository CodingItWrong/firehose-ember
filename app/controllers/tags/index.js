import Controller from '@ember/controller';
import sortBy from 'lodash/sortBy';

export default class TagsIndexController extends Controller {
  get sortedTags() {
    return sortBy(this.model.toArray(), ['name']);
  }
}
