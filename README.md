# Motion Coach

<div align="center">

### AI-powered Personal Training Platform with Strava Integration

Train smarter. Recover better. Reach your goals with AI.

![Dashboard](assets/screenshots/dashboard.png)

![Status](https://img.shields.io/badge/status-In%20Development-7C3AED)
![React](https://img.shields.io/badge/React-19-61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Node.js](https://img.shields.io/badge/Node.js-Express-green)

</div>

---

## Overview

Motion Coach is an AI-powered personal training platform that combines Strava activity data with intelligent performance analysis.

The application synchronizes workouts from Strava, analyzes key performance metrics such as pace, heart rate, distance, and training load, and provides personalized coaching recommendations powered by artificial intelligence.

Motion Coach aims to help athletes train more efficiently, prevent overtraining, and continuously improve their performance through data-driven insights. Apart from the AI Trainer, no AI was used in the programming whatsoever.

---

## Features

### Dashboard

- Interactive performance dashboard
- Weekly, monthly, and yearly statistics
- Distance, pace, heart rate, and calorie tracking
- Beautiful charts and data visualizations

### Strava Integration

- Secure OAuth authentication
- Automatic activity synchronization
- Running
- Cycling
- Walking
- Hiking
- Heart rate import
- Elevation data

### AI Coach

- Personalized training recommendations
- Weekly performance summaries
- Recovery analysis
- Load management
- AI-powered chat assistant
- Goal-oriented coaching

### Analytics

- Heart rate zones
- Pace trends
- Training load
- Recovery balance
- Performance progression
- Workout history

### Training Plans

- Personalized AI-generated plans
- Adaptive scheduling
- Workout recommendations
- Goal tracking
- Progress monitoring

---

## Tech Stack

### Frontend

- React
- TypeScript
- Tailwind CSS
- React Router
- Recharts
- Axios

### Backend

- Node.js
- Express
- TypeScript

### Database

- MySQL

### APIs

- Strava API
- OpenAI API


## Project Structure

```
MotionCoach/
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   └── services/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── services/
│   ├── database/
│   └── models/
│
├── assets/
│   ├── screenshots/
│   └── icons/
│
├── docs/
│   ├── architecture.md
│   ├── api.md
│   ├── setup.md
│   └── roadmap.md
│
├── .github/
│   └── workflows/
│
├── README.md
├── LICENSE
└── docker-compose.yml
```

---

## Screenshots

### Dashboard

![Dashboard](assets/screenshots/dashboard.png)

---

## Installation

### Clone the repository

```bash
git clone https://github.com/yourusername/motion-coach.git

cd motion-coach
```

### Install Frontend

```bash
cd frontend

npm install

npm run dev
```

### Install Backend

```bash
cd backend

npm install

npm run dev
```

## Roadmap

### Version 1.0

- [x] Dashboard UI
- [ ] User Authentication
- [ ] Strava OAuth Integration
- [ ] Activity Synchronization
- [ ] AI Coach
- [ ] Training Analytics
- [ ] Personalized Training Plans

### Version 2.0

- [ ] Garmin Integration
- [ ] Apple Health Integration
- [ ] Polar Integration
- [ ] Nutrition Tracking
- [ ] Race Prediction
- [ ] Injury Risk Detection
- [ ] Mobile App

---

## Contributing

Contributions are welcome.

Feel free to open an Issue or submit a Pull Request.

---

## License

This project is licensed under the MIT License.

---

## Author

**Stefan Ganswint**

Master's Student in Computer Science

Technische Hochschule Mittelhessen (THM)

---

## Disclaimer

Motion Coach is intended for educational and personal fitness purposes only. It is not a medical device and should not replace professional medical advice.
