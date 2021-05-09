import { domain } from 'firehose/helpers/domain';
import { module as describe, test as it } from 'qunit';

describe('Unit | Helper | domain', () => {
  it('retrieves just the domain', function (assert) {
    let result = domain('https://example.com/my-blog-post');
    assert.deepEqual(result, 'example.com');
  });

  it('removes www', function (assert) {
    let result = domain('https://www.example.com/my-blog-post');
    assert.deepEqual(result, 'example.com');
  });

  it('does not remove subdomains other than www', function (assert) {
    let result = domain('https://subdomain.example.com/my-blog-post');
    assert.deepEqual(result, 'subdomain.example.com');
  });
});
