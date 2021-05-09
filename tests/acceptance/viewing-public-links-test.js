import { visit } from '@ember/test-helpers';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import { setupApplicationTest } from 'ember-qunit';
import { module as describe, test as it } from 'qunit';

describe('Acceptance | viewing public links', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  it('displays all public links', async function (assert) {
    let unreadLink = server.create('bookmark', {
      title: 'My Unread Link',
      read: false,
    });
    let readLink = server.create('bookmark', {
      title: 'My Read Link',
      read: true,
    });
    let linkModels = [unreadLink, readLink];

    await visit('/');

    for (let link of linkModels) {
      assert.dom('[data-test-links]').includesText(link.title);
    }
  });
});
