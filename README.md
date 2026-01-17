# AI Engineer Portfolio - Kandagatla Anoop

A modern, professional portfolio website showcasing AI/ML projects with clean RGB effects and technical aesthetics.

## 🚀 Tech Stack

**Frontend:**
- React 19
- TailwindCSS
- Shadcn UI Components
- Lucide React Icons
- JetBrains Mono & Roboto Mono Fonts

**Backend:**
- FastAPI
- MongoDB (Motor)
- Python 3.x

## 📦 Installation

### Prerequisites
- Node.js (v16+)
- Python (v3.8+)
- MongoDB
- Yarn

### Setup Instructions

1. **Clone the repository:**
```bash
git clone https://github.com/Kandagatlaanoop/ai-portfolio.git
cd ai-portfolio
```

2. **Frontend Setup:**
```bash
cd frontend
yarn install
cp .env.example .env
# Edit .env and add your backend URL
yarn start
```

3. **Backend Setup:**
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
# Edit .env and add your MongoDB URL
python server.py
```

## 🔧 Environment Variables

### Frontend (.env)
```
REACT_APP_BACKEND_URL=http://localhost:8001
```

### Backend (.env)
```
MONGO_URL=mongodb://localhost:27017/
DB_NAME=portfolio
```

## 🎨 Features

- ✨ Clean RGB border effects with subtle animations
- 🎯 Responsive design for all devices
- 📱 Mobile-friendly navigation
- 🖼️ Project showcase with real images
- 📧 Contact form with toast notifications
- 📄 Resume download functionality
- 🌐 Social media integration (GitHub, LinkedIn)

## 🏗️ Project Structure

```
/app
├── frontend/          # React frontend
│   ├── src/
│   │   ├── components/   # UI components
│   │   ├── pages/        # Page components
│   │   ├── utils/        # Mock data & utilities
│   │   └── App.js
│   └── package.json
├── backend/           # FastAPI backend
│   ├── server.py      # Main server file
│   └── requirements.txt
└── README.md
```

## 🚀 Deployment

The app is containerized and ready for deployment on any platform that supports Docker or standard Node/Python deployments.

## 📝 License

© 2025 Kandagatla Anoop. All rights reserved.

## 🤝 Contact

- **Email:** 23eg105n25@anurag.edu.in
- **LinkedIn:** [kandagatlaanoop](https://www.linkedin.com/in/kandagatlaanoop/)
- **GitHub:** [Kandagatlaanoop](https://github.com/Kandagatlaanoop)

---

Built with React • Designed by Kandagatla Anoop
