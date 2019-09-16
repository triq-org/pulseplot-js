# Pulseplot: Pulse Data Plot JS library

Canvas drawing lib to visualize e.g. SDR pulse data.
For an example open https://triq.org/pdv and drop your pulse data text in.

Supported SDR pulse data text files with extensions of:
- .ook
- .fsk
- .ask
- .psk
- .txt

Supported RfRaw text files with extensions of:
- .rfraw

All comments and suggestions very welcome.

If you like to give feedback:
- Is this useful to you? Why not, what is missing?
- Is this bundled in a useful way? Do you want the lib hosted on a CDN?
- Would you like to upload your samples to share by URL?
- Would you like to embed uploaded samples in e.g. a blog?
- Would you like to see more features, like timing guides, ...?

## Getting Started

See [`example.html`](lib/example.html) on how to set up the canvas and load data.

```js
import { Pulseplot } from 'pulseplot'

const pulseplot = new Pulseplot({
  parent: '.pulseplot',
  data: { /*...*/ },
})
```

The API is detailed in [`API.md`](API.md)

## Compiling

- Setup dependencies: `yarn install`
- Compile and hot-reload for development: `yarn run serve`
- Compile and minify for production: `yarn run build`
- Lint and fix files: `yarn run lint`

## Copyright and Licence

Copyright (C) 2019-2021 Christian W. Zuckschwerdt <zany@triq.net>

Unless otherwise noted all sources are:

License: GPL-2+
