# Gym Management System

A modern, full-stack gym management system built with React and Vite. This application provides a comprehensive solution for managing gym operations, including user management, reports, notifications, and settings.

## Features

- 🔐 **Authentication System**

  - User login and registration
  - Protected routes with authentication guards
  - Session management using localStorage

- 👥 **User Management**

  - View and manage gym members
  - User profiles and information

- 📊 **Reports & Analytics**

  - Generate and view various reports
  - Data visualization with Chart.js

- ⚙️ **Settings Management**

  - General settings
  - Security settings
  - Billing configuration

- 🔔 **Notifications**

  - Real-time notification system

- 🎨 **Modern UI**
  - Responsive design with Tailwind CSS
  - Dark mode support
  - Component-based architecture with Radix UI

## Tech Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.2
- **Routing**: React Router 7.9.6
- **Styling**: Tailwind CSS 4.1.17
- **UI Components**: Radix UI
- **Charts**: Chart.js 4.5.1 & React Chart.js 2
- **Icons**: Lucide React
- **Code Quality**: ESLint

## Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd gym-management-system
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal)

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
gym-management-system/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and other assets
│   ├── components/        # Reusable UI components
│   │   └── ui/           # UI component library
│   ├── hooks/            # Custom React hooks
│   │   └── useAuth.js    # Authentication hook
│   ├── layouts/          # Layout components
│   │   ├── authentication/
│   │   │   ├── PrivateLayout.jsx  # Protected route layout
│   │   │   └── PublicLayout.jsx   # Public route layout
│   │   ├── Layout.jsx    # Main application layout
│   │   ├── Navbar.jsx    # Navigation bar
│   │   └── Sidebar.jsx   # Sidebar navigation
│   ├── lib/              # Utility functions
│   ├── pages/            # Page components
│   │   ├── authentication/
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   ├── settings/
│   │   │   ├── General.jsx
│   │   │   ├── Security.jsx
│   │   │   └── Billing.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Home.jsx
│   │   ├── Users.jsx
│   │   ├── Reports.jsx
│   │   └── Notifications.jsx
│   ├── App.jsx           # Main application component
│   ├── routes.jsx        # Route configuration
│   └── main.jsx          # Application entry point
├── package.json
└── vite.config.js        # Vite configuration
```

## Authentication Flow

The application uses a custom authentication system:

1. **Authentication Hook** (`useAuth.js`):

   - Checks for authentication token in localStorage
   - Returns authentication status (null = loading, true = authenticated, false = not authenticated)

2. **Protected Routes** (`PrivateLayout.jsx`):

   - Wraps all private routes
   - Redirects to `/login` if user is not authenticated
   - Shows loading state while checking authentication

3. **Public Routes** (`PublicLayout.jsx`):
   - Wraps public routes (login, register)
   - Redirects to `/` if user is already authenticated

## Routes

### Public Routes

- `/login` - User login page
- `/register` - User registration page

### Protected Routes (Require Authentication)

- `/` - Home/Dashboard
- `/users` - User management
- `/reports` - Reports and analytics
- `/notifications` - Notifications center
- `/settings/general` - General settings
- `/settings/security` - Security settings
- `/settings/billing` - Billing settings

## Development

### Adding New Pages

1. Create a new component in `src/pages/`
2. Import and add the route in `src/routes.jsx`
3. Add navigation links in `Sidebar.jsx` or `Navbar.jsx` if needed

### Adding New Components

1. Create reusable components in `src/components/`
2. UI components should go in `src/components/ui/`
3. Import and use them in your pages

## Building for Production

```bash
npm run build
```

The production build will be created in the `dist/` directory, ready to be deployed to any static hosting service.

## Environment Variables

Currently, the application uses localStorage for authentication. For production, you may want to:

1. Create a `.env` file for environment variables
2. Configure API endpoints
3. Set up proper authentication with a backend service

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and not licensed for public use.

## Future Enhancements

- [ ] Backend API integration
- [ ] Database connectivity
- [ ] Payment processing
- [ ] Email notifications
- [ ] Advanced reporting features
- [ ] Mobile app support
- [ ] Multi-gym support
- [ ] Member check-in system
- [ ] Equipment management
- [ ] Class scheduling

---

Built with ❤️ using React and Vite
