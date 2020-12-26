import Model, { attr, hasMany } from '@ember-data/model';
import classic from 'ember-classic-decorator';

@classic
export default class Tag extends Model {
  @attr name;
  @hasMany('bookmark') bookmarks;
}
