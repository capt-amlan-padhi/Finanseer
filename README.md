
# Business Analytics Dashboard

This project is a comprehensive Business Analytics Dashboard built using the MERN stack and Machine Learning. It provides a clear, organized, and visually appealing view of business data, with several sections including a dynamic chart for revenue and expenses, a pie chart for revenue source distribution, a detailed table for sales performance, and a growth graph over time.

![Screenshot 2023-08-30 212942](https://github.com/capt-amlan-padhi/Finanseer/assets/94183639/3181403b-a257-4d1e-a5e3-1b1fa6adc8b5)


## Demo Video

https://github.com/capt-amlan-padhi/Finanseer/assets/94183639/f6e4ef92-e52a-475a-bfeb-b2fcf555e02c


## Features

- Dynamic chart for revenue and expenses
- Pie chart for revenue source distribution
- Detailed table for sales performance
- Growth graph over time
- Predictive analytics and trend identification using Machine Learning

## Tech Stack

- MongoDB
- Express.js
- React.js
- Node.js
- Machine Learning

## File Structure

```
client
│   public
│   │   vite.svg
│   src
│   │   assets
│   │   │   react.svg
│   │   components
│   │   │   BoxHeader.tsx
│   │   │   DashboardBox.tsx
│   │   │   FlexBetween.tsx
│   │   scenes
│   │   │   dashboard
│   │   │   │   Row1.tsx
│   │   │   │   Row2.tsx
│   │   │   │   Row3.tsx
│   │   │   │   index.tsx
│   │   │   navbar
│   │   │   │   index.tsx
│   │   │   predictions
│   │   │   │   index.tsx
│   │   state
│   │   │   App.tsx
│   │   │   expanded-theme.ts
│   │   │   index.css
│   │   │   main.tsx
│   │   │   theme.ts
│   │   │   vite-env.d.ts
│   │   .eslintrc.json
│   │   .gitignore
│   │   index.html
│   │   package-lock.json
│   │   package.json
│   │   tsconfig.json
│   │   tsconfig.node.json
│   │   vite.config.ts
server
│   data
│   │   data.js
│   models
│   │   KPI.js
│   │   Product.js
│   │   Transaction.js
│   routes
│   │   kpi.js
│   │   product.js
│   │   transaction.js
│   .dockerignore
│   .gitignore
│   fly.toml
│   index.js
│   package-lock.json
│   package.json
│   README.md
```

## Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Enter your API in `config.js`
   ```JS
   const API_KEY = 'ENTER YOUR API';
   ```

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.


