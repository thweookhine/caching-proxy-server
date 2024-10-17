# Caching Proxy Server

Simple Command Line Interface (CLI) Application to start a caching proxy server. It will forward requests to the actual server and cache the responses. If the same request is made again, it will return the cached response instead of forwarding the request to the server.

## Prerequisites

- Node.js installed on your system.

## Installation

**Clone the Repository**

```bash
git clone https://github.com/thweookhine/caching-proxy-server.git
# Navigate to the project Directory
cd caching-proxy-server
```

## Usage

- **Show All Commands**

```bash
# Showing All Commands
node index.js help
#OR
node index.js -h
#OR
node index.js --help
```

- **Command to Start Caching Proxy Server**

```bash
# Adding a new task
node index.js --port <number> --origin <url>
```

- **Command to clear all caches**

```bash
node index.js --clear-cache"
```
