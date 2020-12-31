import Route from '@ember/routing/route';

export default class TagIndexDataRoute extends Route {
  model() {
    this.store.unloadAll();
    return this.store.findAll('tag', { reload: true });
  }
}
