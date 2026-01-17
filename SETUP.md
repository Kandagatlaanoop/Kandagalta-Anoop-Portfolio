# 🚀 Local Development Setup Guide

## Clone and Run Locally in VS Code

### 1. Clone the Repository
```bash
git clone https://github.com/Kandagatlaanoop/ai-portfolio.git
cd ai-portfolio
```

### 2. Open in VS Code
```bash
code .
```

### 3. Install Frontend Dependencies
```bash
cd frontend
yarn install
```

### 4. Install Backend Dependencies
```bash
cd ../backend
python -m venv venv

# On Windows:
venv\Scripts\activate

# On macOS/Linux:
source venv/bin/activate

pip install -r requirements.txt
```

### 5. Setup Environment Variables

**Frontend (.env):**
```bash
cd frontend
cp .env.example .env
```
Edit `frontend/.env`:
```
REACT_APP_BACKEND_URL=http://localhost:8001
```

**Backend (.env):**
```bash
cd backend
cp .env.example .env
```
Edit `backend/.env`:
```
MONGO_URL=mongodb://localhost:27017/
DB_NAME=portfolio
```

### 6. Install MongoDB (if not installed)

**On Windows:**
- Download from https://www.mongodb.com/try/download/community
- Install and start MongoDB service

**On macOS:**
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

**On Linux:**
```bash
sudo apt-get install -y mongodb
sudo systemctl start mongodb
```

### 7. Run the Application

**Terminal 1 - Backend:**
```bash
cd backend
source venv/bin/activate  # or venv\Scripts\activate on Windows
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

**Terminal 2 - Frontend:**
```bash
cd frontend
yarn start
```

### 8. Access the Application
- Frontend: http://localhost:3000
- Backend API: http://localhost:8001/api

---

## 🎨 Design Features

✅ Reduced brightness RGB borders  
✅ Electric blue + cyan color scheme  
✅ JetBrains Mono & Roboto Mono fonts  
✅ Smooth hover transitions  
✅ Professional AI/ML project showcase  
✅ Fully responsive design  

## 🛠️ Tech Stack

- **Frontend:** React 19, TailwindCSS, Shadcn UI
- **Backend:** FastAPI, MongoDB, Motor
- **Styling:** Custom CSS with RGB animations

## 📝 Notes

- All .env files are gitignored for security
- No hardcoded secrets or API keys
- Resume PDF link is embedded in the code
- Contact form currently stores data in browser (backend integration ready)

---

**Need help?** Contact: 23eg105n25@anurag.edu.in
