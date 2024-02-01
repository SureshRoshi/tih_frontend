# Torry Insight Hub - Internal Knowledge Sharing Platform

Torry Insight Hub is our internal knowledge-sharing platform, aiming to facilitate seamless exchange of insights, experiences, and knowledge among our employees through blogs and articles. This platform is designed to foster collaboration within the organization, providing a dedicated space for internal blogging and information exchange.

## Features

- **Internal Blogging:** Empower our team to share insights, experiences, and knowledge through a user-friendly blogging interface.

- **Collaborative Environment:** Cultivate a collaborative culture by encouraging team members to actively contribute and engage with each other's content.

- **Simplified Platform:** Torry Insight Hub is a straightforward, internal blogging platform tailored specifically for our organizational use.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/SureshRoshi/tih_frontend.git
```

```bash
cd tih_frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

```
Your React App
│
└── src
    │
    └── util
        │
        └── config.js
```

In the `config.js` file, find and update the `backend_url`:

```javascript
// config.js

module.exports = {
  backend_url: "http://your_backend_server_ip:port",
  // Other settings...
};

export default config;
```

Replace `'http://your_backend_server_ip:port'` with your actual backend server's IP and port.

4. Open your browser and navigate to http://localhost:3000 to access Torry Insight Hub.

### Usage

1. **Internal Blogging:**

   - Team members can create and publish blogs and articles directly on the platform.

2. **Collaborative Environment:**

   - Encourage team members to engage with each other's content through comments and discussions.

### Build for Production

To build the production version of Torry Insight Hub, run the following command:

```bash
npm run build
```

This command will generate an optimized production build in the `build` directory.

---

Facilitate collaboration and knowledge sharing within Torry Harris with Torry Insight Hub! 🌐🧠

---
