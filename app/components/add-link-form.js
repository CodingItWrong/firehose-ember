import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class AddLinkFormComponent extends Component {
  @service store;

  @tracked url;
  @tracked isSaving = false;

  @action
  async handleAdd(event) {
    event.preventDefault();
    let link = this.store.createRecord('bookmark', { url: this.url });

    this.isSaving = true;
    await link.save();
    this.isSaving = false;

    this.resetForm();

    const { onAdd } = this.args;
    onAdd();
  }

  resetForm() {
    this.url = '';
  }
}
