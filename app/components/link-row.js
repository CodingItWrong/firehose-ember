import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class LinkRow extends Component {
  @service session;

  @tracked editing = false;

  get showLink() {
    const { showIfRead, link } = this.args;
    if (typeof showIfRead === 'undefined') {
      return true;
    }
    return showIfRead === link.read;
  }

  @action
  edit() {
    this.editing = true;
  }

  @action
  finishEditing() {
    this.editing = false;
  }
}
