Single Spa PDP Proof Of Concept
===============================

Some very janky test code to use Single Spa to get components from a bunch of different technologies talking together.

# Installation

This will install all the `node_modules` required for the React and Vue apps.

```
$ install.sh
```

# Running

In one process:

```
$ run-components.sh
```

In another process:

```
$ python -m SimpleHTTPServer 8000
```

You may have to `killall node` to clear out the port space for all the servers. There are servers at 3010 (header), 3020 (footer), 3030 (buy-tools) and 8000 (host page).
