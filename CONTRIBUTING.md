# Contribution to OpenPress
A little things you should know before starting contribution.

## Reviews
Every pull requests, or members changes needs to be **reviewed**.

## Branchs
Make your pull requests to the **master** branch.

## Versioning
OpenPress follows [Semantic Versioning](http://semver.org/) for it's version process.

Every changes will be logged to [CHANGELOG.md](https://github.com/OpenPress/openpress/blob/master/CHANGELOG.md).

## Bugs
OpenPress uses [GitHub Issues](https://github.com/OpenPress/openpress/issues) to track it's issues, recommendation, .... file your issue and be easy to say anything. (first make sure the issue not exists)

## Proposing Change
If you intend to propose an API change you should first make a [new issue](https://github.com/OpenPress/openpress/issues/new) (it let us to get agreement on your proposal) then create it.

## Proposing Bug
If you intend to fix a bug you can make a pull request, but it is better to make a [new issue](https://github.com/OpenPress/openpress/issues/new) to explain what bug you are fixing.

## Sending Pull Request
We always waiting for your changes and pull requests.

Please make sure you have done the following process before making a pull request:
1. Fork [OpenPress](https://github.com/OpenPress/openpress) and create your branch from `master`.
2. Write your code in latest ecma script version in the `src` directory. (currently es7)
3. If your code needs tests add it!
4. If your code needs documentation add it! (also if your code changed api change the documentation.)
5. Ensure the test suite passes.
6. Make sure your code lints.
7. Format your code with any library you like.
8. Use babel to transpile your code to `dist` directory.
9. At end, make your pull request. :rocket:

## License Agreement
There is no need to any licenses. be free to change.

## Requirements
There requirements to contribute to OpenPress:
- You should have node installed and is latest version.
- You should have npm installed and is latest version.
- For developers: Be Familiar with `git` and `npm`. if you are not familiar learn about [git](https://try.github.io/) and [npm](https://docs.npmjs.com/getting-started/what-is-npm)

## Codebase Overview
Top Level Folders (TLF):
- `src`: The Source code of OpenPress.
- `dist`: The Distributed version of OpenPress. (You can call it Build version)
- `docs`: The Documentaion of OpenPress.

## Development and Production
Use __DEV__ to determine development environment.

Use __PRO__ to determine production environment.

These are concated version of `global.__DEV__ = process.env.NODE_ENV !== 'production'` for development and `global.__PRO__ process.env.NODE_ENV !== 'production'` for production code.

## Comments
You documentation comments should follow [OPDoc](https://github.com/OpenPress/opdoc) rules. (OPDoc is a extensive version of JSDoc)

### More Explantation comming soon. ;)

## License
MIT @ Bayat :rocket:

Thanks.
