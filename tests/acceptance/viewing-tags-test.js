import { click, visit, currentURL } from '@ember/test-helpers';
import { module as describe, test as it } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import { authenticateSession } from 'ember-simple-auth/test-support';

describe('Acceptance | viewing tags', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  it('displays all tags returned by the backend', async function (assert) {
    let fooTag = server.create('tag', { name: 'foo' });
    let barTag = server.create('tag', { name: 'bar' });
    server.create('bookmark', {
      title: 'My Foo Link',
      tags: [fooTag],
    });
    server.create('bookmark', {
      title: 'My Bar Link',
      tags: [barTag],
    });

    await authenticateSession({ access_token: 'ABC123' });
    await visit('/');

    await click('[data-test-tags-link]');

    assert.dom('[data-test-tags]').includesText('foo');
    assert.dom('[data-test-tags]').includesText('bar');

    await click('[data-test-tag="foo"]');
    assert.deepEqual(currentURL(), '/tags/foo');

    assert.dom('[data-test-links]').includesText('foo');
    assert.dom('[data-test-links]').doesNotIncludeText('bar');
  });
});
