# firehose

An open-source web frontend for link saving and sharing. Allows you to own and share your own content. See an example at [links.codingitwrong.com](https://links.codingitwrong.com)!

To make use of this frontend, you'll need a backend API. [firehose-api](https://github.com/CodingItWrong/firehose-api) is available.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/)
* [Ember CLI](https://ember-cli.com/)

## Installation

* `git clone <repository-url>` this repository
* `cd firehose`
* `yarn install`

## Running / Development

* `ember serve`
* Run your backend API in another terminal.
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `yarn lint`
* `yarn lint:fix`

### Bundle Analysis

Run `ember serve` then visit `http://localhost:4200/_analyze

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

```sh
$ yarn build
```

This saves built frontend assets to the `dist/` directory. Copy these to a static site hosting service.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
