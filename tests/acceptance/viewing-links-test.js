import { click, visit } from '@ember/test-helpers';
import { module as describe, test as it } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import { authenticateSession } from 'ember-simple-auth/test-support';

describe('Acceptance | viewing links', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  it('displays read and unread links', async function (assert) {
    let tag = server.create('tag', { name: 'my-tag' });
    let unreadLink = server.create('bookmark', {
      title: 'My Unread Link',
      read: false,
      tags: [tag],
    });
    let readLink = server.create('bookmark', {
      title: 'My Read Link',
      read: true,
    });

    await authenticateSession({ access_token: 'ABC123' });
    await visit('/');

    assert.dom('[data-test-links]').includesText(unreadLink.title);
    assert.dom('[data-test-links]').doesNotIncludeText(readLink.title);

    await click('[data-test-read-link]');

    assert.dom('[data-test-links]').includesText(readLink.title);
    assert.dom('[data-test-links]').doesNotIncludeText(unreadLink.title);

    await click('[data-test-unread-link]');

    assert.dom('[data-test-links]').includesText(unreadLink.title);
    assert.dom('[data-test-links]').doesNotIncludeText(readLink.title);
    assert.dom('[data-test-links]').includesText('my-tag');
  });
});
