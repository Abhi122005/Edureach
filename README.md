# Edureach – College Intelligence Platform

Edureach is a full-stack web application designed to provide intelligent college guidance and information discovery. Built with modern technologies including React, TypeScript, Vite, Node.js, MongoDB, and LangChain integration with Google Generative AI.

## 📋 Project Overview

Edureach leverages AI-powered capabilities to help students and educators discover, explore, and make informed decisions about colleges. The platform combines a responsive frontend with a robust backend powered by large language models (LLMs).

## 🏗️ Project Structure

```
Edureach/
├── client/               # React + TypeScript frontend
│   ├── src/             # Source code
│   ├── public/          # Static assets
│   ├── package.json
│   ├── vite.config.ts   # Vite configuration
│   ├── tsconfig.json    # TypeScript configuration
│   └── eslint.config.js # ESLint rules
│
├── server/              # Node.js + Express backend
│   ├── src/             # Source code
│   ├── package.json
│   └── tsconfig.json    # TypeScript configuration
│
└── .gitignore          # Git ignore rules
```

## 🚀 Tech Stack

### Frontend
- **React** 19.1.0 - UI library
- **TypeScript** ~5.8.3 - Type-safe JavaScript
- **Vite** 6.3.2 - Modern build tool
- **Tailwind CSS** 4.1.3 - Utility-first CSS framework
- **React Router** 7.6.1 - Client-side routing
- **Axios** 1.9.0 - HTTP client
- **React Hot Toast** 2.5.2 - Toast notifications
- **Lucide React** 0.503.0 - Icon library
- **ESLint** 9.25.0 - Code linting

### Backend
- **Node.js** 24 - JavaScript runtime
- **Express** 5.2.1 - Web framework
- **TypeScript** 5.9.3 - Type-safe JavaScript
- **MongoDB** - Database (via Mongoose)
- **Mongoose** 9.2.1 - MongoDB ODM
- **LangChain** 1.2.26 - LLM integration framework
- **Google Generative AI** 2.1.20 - AI/ML capabilities
- **JWT** 9.0.3 - Authentication
- **Bcrypt** 3.0.3 - Password hashing
- **CORS** 2.8.6 - Cross-origin resource sharing

## 📦 Installation

### Prerequisites
- Node.js 24+
- npm or yarn package manager
- MongoDB (local or cloud instance)
- Google Generative AI API key

### Client Setup

```bash
cd client
npm install
npm run dev      # Start development server
npm run build    # Production build
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

### Server Setup

```bash
cd server
npm install
npm run dev      # Start development server with watch mode
npm run start    # Start production server
npm run build    # Build TypeScript
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the `server` directory with the following variables:

```env
# Database
MONGODB_URI=your_mongodb_connection_string

# Authentication
JWT_SECRET=your_jwt_secret_key

# Google Generative AI
GOOGLE_API_KEY=your_google_generative_ai_key

# Server
PORT=5000
NODE_ENV=development
```

Create a `.env` file in the `client` directory if needed for API endpoints:

```env
VITE_API_URL=http://localhost:5000
```

## 🎯 Features

- **AI-Powered Search** - Intelligent college discovery using LangChain and Google Generative AI
- **User Authentication** - Secure JWT-based authentication with bcrypt password hashing
- **Responsive Design** - Mobile-first approach using Tailwind CSS
- **Real-time Notifications** - Toast notifications for user feedback
- **Type Safety** - Full TypeScript support across frontend and backend
- **Modern UI** - Clean, intuitive interface with Lucide icons

## 📝 Scripts

### Frontend Scripts
- `npm run dev` - Start Vite dev server with HMR
- `npm run build` - TypeScript compilation + Vite build
- `npm run lint` - ESLint code quality checks
- `npm run preview` - Preview production build locally

### Backend Scripts
- `npm run dev` - Start with Node watch mode (requires .env file)
- `npm run start` - Production start with experimental transform types
- `npm run build` - TypeScript compilation to JavaScript

## 🔐 Security

- Passwords are hashed using bcryptjs
- JWT tokens for secure authentication
- CORS configured for safe cross-origin requests
- Environment variables for sensitive configuration

## 📚 API Integration

The backend integrates with:
- **Google Generative AI** - LLM capabilities for intelligent responses
- **MongoDB** - Persistent data storage
- **LangChain** - Framework for building LLM applications

## 🚦 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Abhi122005/Edureach.git
   cd Edureach
   ```

2. **Set up the server**
   ```bash
   cd server
   npm install
   # Configure .env file
   npm run dev
   ```

3. **Set up the client** (in a new terminal)
   ```bash
   cd client
   npm install
   npm run dev
   ```

4. **Access the application**
   - Frontend: `http://localhost:5173` (default Vite port)
   - Backend API: `http://localhost:5000` (default Express port)

## 🔄 Development Workflow

- The client uses Vite's Hot Module Replacement (HMR) for instant updates
- The server watches TypeScript files for automatic restarts
- ESLint enforces code quality standards in the frontend

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Abhi122005** - [GitHub Profile](https://github.com/Abhi122005)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For issues, questions, or suggestions, please open a GitHub issue on the [repository](https://github.com/Abhi122005/Edureach/issues).

---

**Last Updated:** May 3, 2026
