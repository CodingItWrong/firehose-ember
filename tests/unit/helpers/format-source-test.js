import { formatSource } from 'firehose/helpers/format-source';
import { module as describe, test as it } from 'qunit';

describe('Unit | Helper | formatSource', () => {
  it('formats URLs as a link', function (assert) {
    let sourceURL = 'https://example.com/page';
    let result = formatSource(sourceURL);
    assert.deepEqual(result, `<a href="${sourceURL}">example.com</a>`);
  });

  it('returns non-URLs as-is', function (assert) {
    const nonURLSource = 'a friend';
    assert.deepEqual(formatSource(nonURLSource), nonURLSource);
  });
});
