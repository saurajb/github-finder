# GitHub Finder

GitHub Finder is a simple React application that allows users to search for GitHub profiles and view their public information, including their repositories. This project was built as a practice project while I was learning React.

## Features

- Search for GitHub users by their username.
- View user profiles, including details like:
  - Profile picture
  - Username
  - Bio
  - Location
  - Website link
  - Hireable status
- List of user’s public repositories:
  - Repository name
  - Description
  - Link to the repository
- Responsive and user-friendly interface.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **GitHub API**: To fetch the user data and repositories from GitHub.
- **Axios**: For making HTTP requests to the GitHub API.
- **Vercel**: Used for deployment of the application.

## How to Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/github-finder.git
   ```

2. Navigate into the project directory:

   ```bash
   cd github-finder
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your GitHub API token:

   ```
   REACT_APP_GITHUB_TOKEN=your_github_token_here
   ```

5. Start the development server:

   ```bash
   npm start
   ```

6. Open your browser and go to `http://localhost:3000` to view the app.

## Deployment

The project is deployed on Vercel. You can check out the live version [here](https://github-finder-orpin-eight.vercel.app/).

## Learning Objectives

This project was created as part of my journey to learn and practice React. It helped me improve my skills in:

- Working with APIs using Axios.
- Managing component state and props.
- React Hooks (useState, useEffect).
- Building a responsive UI with CSS.
- Deploying a React app to Vercel.

## License

This project is open-source and available under the [MIT License](LICENSE).

## Acknowledgements

- GitHub API for providing data.
- React community for its rich resources and tutorials.

---

Feel free to fork the project and contribute or use it as a reference for your own GitHub-related applications!
