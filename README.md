# LEARN-HUB <p></>

<p align="center">
  <img src="https://img.shields.io/github/languages/top/SHUBHAMRAJPUT9665/LEARN-HUB?color=brightgreen&style=for-the-badge" alt="Top Language" />
  <img src="https://img.shields.io/github/last-commit/SHUBHAMRAJPUT9665/LEARN-HUB?color=blue&style=for-the-badge" alt="Last Commit" />
  <img src="https://img.shields.io/github/issues/SHUBHAMRAJPUT9665/LEARN-HUB?color=red&style=for-the-badge" alt="Issues" />
  <img src="https://img.shields.io/github/forks/SHUBHAMRAJPUT9665/LEARN-HUB?color=yellow&style=for-the-badge" alt="Forks" />
  <img src="https://img.shields.io/github/stars/SHUBHAMRAJPUT9665/LEARN-HUB?color=purple&style=for-the-badge" alt="Stars" />
  <img src="https://img.shields.io/github/license/SHUBHAMRAJPUT9665/LEARN-HUB?color=orange&style=for-the-badge" alt="License" />
</p>


## Project Description

LEARN-HUB is an innovative educational platform designed to offer a variety of courses that users can subscribe to and access. The platform includes an online classes feature within LEARN-HUB itself. This project integrates ZEGOCLOUD's video conferencing feature to enhance the learning experience Additionally, it includes the Razorpay payment gateway for subscriptions and an Admin dashboard for viewing users, revenue, and graphical data representations. Admin users can also add courses and lectures. All course data is stored on Cloudinary, with respective links to video lectures or any type of media file stored in the database to increase backend performance.

## Table of Contents

- [Motivation](#motivation)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Challenges and Future Features](#challenges-and-future-features)
- [Installation and Setup](#installation-and-setup)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Contributing](#contributing)

## Motivation

The motivation behind LEARN-HUB is to create a seamless and interactive learning environment that bridges the gap between educators and learners, leveraging the power of technology to provide a rich educational experience.

## Features

- Various types of courses that users can subscribe to and access.
- Online classes feature within LEARN-HUB.
- Video conferencing integration using ZEGOCLOUD.
- Razorpay payment gateway for LEARN-HUB subscriptions.
- Admin dashboard for viewing users, revenue, and graphical data.
- Admin capabilities to add courses and lectures.
- User-friendly interface for easy navigation and interaction.
- Comprehensive educational resources.
- Real-time collaboration tools.
- Course data stored on Cloudinary with links stored in the database for increased backend performance.

## Technologies Used

- **Frontend:** React, Daisy-UI, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Deployment:** Vercel, Render
- **Video Conferencing:** ZEGOCLOUD
- **Payment Gateway:** Razorpay
- **Media Storage:** Cloudinary

## Challenges and Future Features

### Challenges
- Integrating the ZEGOCLOUD video conferencing feature.
- Integrating the Razorpay payment gateway.
- Ensuring real-time collaboration with minimal latency.
- Developing a comprehensive Admin dashboard with graphical representations.

### Future Features
- Adding more interactive tools for enhanced collaboration.
- Expanding the resource library.
- Implementing AI-driven features for personalized learning experiences.

## Installation and Setup

### Prerequisites
- Node.js 14.x or higher
- MongoDB
- Windows, macOS, or Linux operating system

### Step-by-Step Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SHUBHAMRAJPUT9665/LEARN-HUB.git


2. **Navigate to the project directory:**
   ```bash 
   cd LEARN-HUB
   

3. **Install the dependencies:**
   ```bash 
   npm i


4. **Set up environment variables:**
    
   Create a .env file in the root directory and add the necessary environment variables.
   ```bash
   NODE_ENV = development
   PORT = 5000
   MONGO_URI = mongodb://127.0.0.1:27017/lms
   JWT_SECRET = <YOUR_LONG_JWT_SECRET>
   JWT_EXPIRY = <JWT_EXPIRY>
   
   CLOUDINARY_CLOUD_NAME = <YOUR_CLOUDINARY_CLOUD_NAME>
   CLOUDINARY_API_KEY = <YOUR_CLOUDINARY_API_KEY>
   CLOUDINARY_API_SECRET = <YOUR_CLOUDINARY_API_SECRET>
   
   SMTP_HOST = <YOUR_SMTP_HOST>
   SMTP_PORT = <YOUR_SMTP_POST>
   SMTP_USERNAME = <YOUR_SMTP_USERNAME>
   SMTP_PASSWORD = <YOUR_SMTP_PASSWORD>
   SMTP_FROM_EMAIL = <YOUR_SMTP_FROM_EMAIL>
   
   RAZORPAY_KEY_ID = <YOUR_RAZORPAY_KEY>
   RAZORPAY_SECRET = <YOUR_RAZORPAY_SECRET>
   RAZORPAY_PLAN_ID = <YOUR_RAZORPAY_PLAN_ID>
   
   FRONTEND_URL = <YOUR_FRONTEND_WEBSITE_URL>
   
   CONTACT_US_EMAIL = <YOUR_CONTACT_US_EMAIL>

5. **Run the project:**
   ```bash 
   npm run dev


## Usage

To use LEARN-HUB:

1. **Sign up or log in to your account.**
2. **Navigate to the  Course Page** to access the resources and tools.
3. **Joint a video conference** or join an existing session created by Instructor.
4. **Utilize the collaborative tools** to enhance your learning experience.
5. **Subscribe to LEARN-HUB** using the Razorpay payment gateway for access the LEARN HUB courses and additional features.
6. **Admin users can view the Admin dashboard** to monitor users, revenue, and graphical data, as well as add courses and lectures.



## Badges

![GitHub contributors](https://img.shields.io/github/contributors/SHUBHAMRAJPUT9665/LEARN-HUB)
![GitHub issues](https://img.shields.io/github/issues/SHUBHAMRAJPUT9665/LEARN-HUB)
![GitHub forks](https://img.shields.io/github/forks/SHUBHAMRAJPUT9665/LEARN-HUB)
![GitHub stars](https://img.shields.io/github/stars/SHUBHAMRAJPUT9665/LEARN-HUB)
![License](https://img.shields.io/github/license/SHUBHAMRAJPUT9665/LEARN-HUB)

   




