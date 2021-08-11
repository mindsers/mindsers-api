![Repo header image](https://repository-images.githubusercontent.com/189204408/ea286180-8cf2-11e9-9c88-ad7a2517c8f8)

# @mindsers/api

"Mindsers API" handles the logic behind the whole Mindsers Platform. It is based on [NestJS][nestjs.com].

This repo hosts the backend that powers mindsers.blog, mindsers.live, mindsers.shop, mindsers.it, and nathanaelcherrier.dev.

All the public repositories part of the Mindsers Platform:

- [@mindsers/website](https://github.com/mindsers/personal-website)
- [@mindsers/blog](https://github.com/mindsers/mindsers-blog)
- [@mindsers/api](https://github.com/mindsers/mindsers-api)

## Getting started

As a requirement, do not forget to install the dependencies: `pnpm install`.

### Start the project

- `pnpm start`

or

- `pnpm run start:dev` starts the app in watch mode

or

- `pnpm run start:debug` starts the app in watch and debug mode

or

- `pnpm run start:prod` starts the app from the output of the build command

### Build for production

- `pnpm run build`

### Run tests

- `pnpm test`

or

- `pnpm run test:watch` runs jest tests while coding

or

- `pnpm run test:cov` calculate test covarage

or

- `pnpm run test:debug` run jest test in debug mode

or

- `pnpm run test:e2e` runs end-to-end tests

## License

MIT License

**Copyright (c) 2021 Nathanaël CHERRIER**

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
