
# Electricity Board Management System

This project is a React-based web application developed for electricity board. It allows staff to view, edit, and manage electricity connection requests, complete with data validation and visualized charts.

## Features

- Grid view for electricity connection requests.
- Search functionality.
- Add/Edit/Delete users (with restrictions).
- Data validation (e.g., load applied limit, uneditable fields).
- Charts to visualize connection request statuses (pending, approved, etc.).
- Local storage for data persistence.
- React router for routing

# Projct Structure
my-electricity-app/
├── public/
│   ├── index.html                  # Main HTML file, entry point for the app
│   ├── manifest.json               # Metadata for Progressive Web Apps (optional)
│   ├── favicon.ico                 # Favicon for the app
│   └── images                      # images
│        └── logo.png               # logo
│
├── src/
│   ├── components/                 # Reusable UI components
│   │   ├── AddUserForm.jsx         # Component 1: Form for adding new connections
│   │   ├── Dashboard.jsx           # Component 2: Chart displaying connection statuses
│   │   ├── DateFilter.jsx          # Component 3: For filtering user connections on basis of end and start date
│   │   ├── EditUserForm.jsx        # Component 4: For editting info of existing users
│   │   ├── UserList.jsx            # Component 5: Displays all the users of the board
│   │   ├── UserDetails.jsx         # Component 6: It shows the details about specific user with id in url
│   │   └── Header.jsx              # Component 7: Header for all pages
│   ├── styles/                     # Stylesheets for components
│   │   ├── AddUserForm.css         
│   │   ├── Dashboard.css           
│   │   ├── DateFilter.css          
│   │   ├── EditUserForm.css        
│   │   ├── UserList.css            
│   │   ├── UserDetails.css         
│   │   └── Header.css
│   ├── App.js                      # Main app component
│   ├── index.js                    # Entry point of the React app
│   └── reportWebVitals.js          # Performance reporting (optional)
│
├── .gitignore                      # Files to be ignored by Git
├── package.json                    # Project dependencies and scripts
├── package-lock.json               # Locks versions of project dependencies
└── README.md                       # Project documentation


## Prerequisites

Before running the project, ensure you have the following installed:

- **Node.js** (>= v14)
- **npm** (Comes with Node.js)
- **Git** (for version control)

## Installation

1. **Clone the repository:**

# After cloning navigate to project directory
cd electricity-board-management

# Install all the packages by below command
npm install

# For using charts
npm i recharts

# now start the application at local server
npm start

# url
http://localhost:3000



