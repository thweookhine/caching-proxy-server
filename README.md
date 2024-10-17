# Caching Proxy Server

Simple Command Line Interface (CLI) Application to start a caching proxy server. It will forward requests to the actual server and cache the responses. If the same request is made again, it will return the cached response instead of forwarding the request to the server.

## Prerequisites

- Node.js installed on your system.

## Installation

**Clone the Repository**

```bash
git clone https://github.com/thweookhine/caching-proxy-server.git
### 1. Navigate to the project Directory
cd caching-proxy-server

### 2. Install Packages

```

npm install

```

### 3. Set up Environment variables

```

touch .env
Note: refer env_sample for environment variables

```

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
# Starting caching-proxy server
node index.js --port <number> --origin <url>
```

- **Command to clear all caches**

```bash
# Clearing all caches
node index.js --clear-cache"
```
