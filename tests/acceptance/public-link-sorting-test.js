import { click, findAll, fillIn, visit } from '@ember/test-helpers';
import { module as describe, test as it } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import {
  authenticateSession,
  invalidateSession,
} from 'ember-simple-auth/test-support';

describe('Acceptance | public link sorting', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  it('sorts public lists in the order published', async function (assert) {
    await authenticateSession({ access_token: 'ABC123' });
    await visit('/');

    // added links go to top
    await fillIn('[data-test-url]', 'https://www.first.com');
    await click('[data-test-add-button]');

    await fillIn('[data-test-url]', 'https://www.second.com');
    await click('[data-test-add-button]');

    await click('[data-test-button-edit]');
    await click('[data-test-public]');
    await click('[data-test-save-button]');

    let editButtons = findAll('[data-test-button-edit]');
    await click(editButtons[1]);
    await click('[data-test-public]');
    await click('[data-test-save-button]');

    await invalidateSession();

    assert.dom('[data-test-links]').hasText(/first[\s\S]+second/);
  });
});
