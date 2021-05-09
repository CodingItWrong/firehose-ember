import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class AddLinkFormComponent extends Component {
  @service store;

  @tracked url;
  @tracked isSaving = false;
  @tracked error = null;

  @action
  async handleAdd(event) {
    event.preventDefault();
    let link = this.store.createRecord('bookmark', { url: this.url });

    this.error = null;
    this.isSaving = true;
    try {
      await link.save();
      this.resetForm();
    } catch (e) {
      this.error = 'An error occurred saving the link.';
    }
    this.isSaving = false;

    const { onAdd } = this.args;
    onAdd();
  }

  resetForm() {
    this.url = '';
  }
}
