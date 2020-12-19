import Controller from '@ember/controller';
// eslint-disable-next-line ember/no-computed-properties-in-native-classes
import { sort } from '@ember/object/computed';

export default class ShowTagsController extends Controller {
  linkSorting = Object.freeze(['moved_to_list_at:desc']);

  @sort('model.bookmarks', 'linkSorting')
  sortedLinks;
}
