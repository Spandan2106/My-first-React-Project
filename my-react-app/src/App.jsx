import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      {/* Main Title */}
      <header>
        <h1 className="title">Hello,Everyone</h1>
        <p className="subtitle">Welcome to your first React application.very happy to see you here!
        </p>
      </header>

      {/* Description Section */}
      <main>
        <p className="description">
          This is a simple app to demonstrate the structure of a React component.The CSS styles are applied to various elements to enhance the visual appearance. The react app is set up to be responsive and user-friendly.
          The react is a JavaScript library for building user interfaces, maintained by Facebook and a community of individual developers and companies. I am currently learning React to build dynamic web applications.
        </p>

        <section className="large-section">
          <h1 className="large-title">Large Title Example</h1>
          <p className="large-description">
            This paragraph uses a larger font size to showcase the large text styles defined in the CSS. The css styles help in making the text more readable and visually appealing.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <p className="footer">© 2025 My React App.</p>
        <p className="footer">Spandan Das</p>
        <p className="footer">© 2025 My React App.</p>
      </footer>
    </div>
  );
}

export default App;