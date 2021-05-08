import { click, fillIn, visit } from '@ember/test-helpers';
import { module as describe, test as it } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import { authenticateSession } from 'ember-simple-auth/test-support';

describe('Acceptance | editing links', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  it('allows adding links', async function (assert) {
    await authenticateSession({ access_token: 'ABC123' });
    await visit('/');

    // add
    await fillIn('[data-test-url]', 'https://www.example.com');
    await click('[data-test-add-button]');

    assert.dom('[data-test-links]').includesText('My Link Title');

    // mark read
    await click('[data-test-button-mark-read]');
    assert.dom('[data-test-links]').doesNotIncludeText('My Link Title');

    await click('[data-test-read-link]');
    assert.dom('[data-test-links]').includesText('My Link Title');

    // mark unread
    await click('[data-test-button-mark-unread]');

    await click('[data-test-unread-link]');
    assert.dom('[data-test-links]').includesText('My Link Title');

    // edit
    const title = 'Updated Title';

    await click('[data-test-button-edit]');
    await fillIn('[data-test-title] input', title);
    await fillIn('[data-test-tags] input', 'foo bar');
    await click('[data-test-save-button]');

    assert.dom('[data-test-links]').includesText(title);

    // would require mirage wizardry to test
    // expect(link).to.contain.text('foo')
    // expect(link).to.contain.text('bar')

    // cancelling edit
    await click('[data-test-button-edit]');
    await fillIn('[data-test-title] input', 'Title Update to Cancel');
    await click('[data-test-cancel-button]');

    assert.dom('[data-test-links]').includesText(title);

    // delete
    await click('[data-test-button-delete]');
    assert.dom('[data-test-links]').doesNotIncludeText(title);
  });
});
