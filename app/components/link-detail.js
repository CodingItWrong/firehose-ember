import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';

export default class LinkDetail extends Component {
  @service session;

  @action
  async markRead(event) {
    const { link } = this.args;

    if (event) {
      event.preventDefault();
    }
    link.read = true;
    await link.save();
  }

  @action
  async markUnread(event) {
    const { link } = this.args;

    if (event) {
      event.preventDefault();
    }
    link.read = false;
    await link.save();
  }

  @action
  edit(event) {
    if (event) {
      event.preventDefault();
    }
    this.args.onEdit();
  }

  @action
  async delete(event) {
    if (event) {
      event.preventDefault();
    }
    await this.args.link.destroyRecord();
  }
}
