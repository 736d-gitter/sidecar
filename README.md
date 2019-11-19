[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/gitterHQ/sidecar?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge) [![Sidecar on npm](https://img.shields.io/npm/v/gitter-sidecar.svg)](https://www.npmjs.com/gitter-sidecar)

# Sidecar

Gitter embed widget, [sidecar.gitter.im](https://sidecar.gitter.im/)

### [Changelog](https://github.com/gitterHQ/sidecar/blob/master/CHANGELOG.md)


# Usage

```html
<script>
    ((window.gitter = {}).chat = {}).options = {
        room: 'gitterHQ/sidecar-demo'
    };
</script>
<script src="sidecar.js"></script>
```

## Module Usage

There is also a standalone package available on npm [`gitter-sidecar`](https://www.npmjs.com/gitter-sidecar) that doesn't pollute the global scope.

```js
var Sidecar = require('gitter-sidecar');

var myChat = new Sidecar({
  room: 'gitterHQ/sidecar-demo'
});
```

# [API](https://github.com/gitterHQ/sidecar/blob/master/API.md)



# Build

 - Build the Sidecar library: `npm run build`, output: `./dist/sidecar.js`
 - Build Sidecar module/package: `npm run build-module`, output: `./dist/sidecar-module.js`

### Dev

Same as `devbuild` but also watches the directory and rebuilds on any file changes

`npm run devbuild`


# Build Microsite

`npm run build-microsite`

### Dev

This is currently a work in progress. But I hope to have `react-hot-loader` and `webpack-dev-server` working for this:

`npm run devbuild-microsite`


# The release process

1. Before starting, make sure that you configured version prefix to be `v` during running `git flow init`. You can do that by checking your git config (`cat .git/config | grep -A 7 prefix`) If you don't see `versiontag = v`. Configure `git flow init -f` again.
1. Start a release with `git flow release start <new version>`
1. Bump up package version `npm --no-git-tag-version version <new version>`.
1. Push the release branch and create a new MR
1. Finish the release with `git flow release finish <new version>`
1. Push local `develop` and `master` branches to the origin and `git push --tags`.
1. Manually run the deploy step on the tag pipeline in GitLab CI.
1. check out the `v<version>` tag and run `npm publish` to upload the module to https://www.npmjs.com/package/gitter-sidecar

## Validate the release
1. go to https://sidecar.gitter.im/ and check that the downloaded `sidecar.v1.js` is in the new version (using Dev Tools)
    ![Screenshot_2019-11-15_at_4.12.47_PM](/uploads/9ab393daeb0704a8b4f6132463bb124d/Screenshot_2019-11-15_at_4.12.47_PM.png)
1. see the new version published in npm repository https://www.npmjs.com/package/gitter-sidecar


## Manual Deployment

You'll need AWS credentials exported as `AWS_KEY` and `AWS_SECRET`. This command is not meant to be run locally, only by the CircleCI deployment step (on every tag).

`npm run deploy`



# Testing

`npm test`

# Contributing

We use [git-flow](https://danielkummer.github.io/git-flow-cheatsheet/). Merge requests should be made against `develop` not `master`.

Please join us in [gitterHQ/contributing](https://gitter.im/gitterHQ/contributing) for questions or to get in touch.
