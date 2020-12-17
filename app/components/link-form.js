import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import BufferedProxy from 'ember-buffered-proxy/proxy';

export default class LinkFormComponent extends Component {
  @service store;

  get buffer() {
    return (this._buffer ??= BufferedProxy.create({
      content: this.args.link,
    }));
  }

  @action
  async handleSave() {
    const { link, onSave } = this.args;

    this.buffer.applyBufferedChanges();
    await link.save();
    if (link.id) {
      // do not run in tests
      await this.store.findRecord('bookmark', link.id, {
        include: 'tags',
      });
    }
    onSave();
  }

  @action
  handleCancel() {
    this.args.onCancel();
  }
}
