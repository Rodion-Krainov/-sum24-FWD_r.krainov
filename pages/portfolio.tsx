const PortfolioPage = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold text-center my-4">Portfolio</h1>
      <section>
        <h2 className="text-xl font-semibold my-3">My Projects</h2>
        <ul>
          <li className="mb-4">
            <h3 className="text-lg font-semibold">
              Project 1: Personal Portfolio Website
            </h3>
            <p>
              This is a personal portfolio website to showcase my skills,
              projects, and contact information.
            </p>
            <p>
              <strong>Technologies:</strong> HTML, CSS, JavaScript
            </p>
            <p>
              <a
                href="https://example.com/portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>{" "}
              |{" "}
              <a
                href="https://github.com/Rodion-Krainov/portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repository
              </a>
            </p>
          </li>
          <li className="mb-4">
            <h3 className="text-lg font-semibold">
              Project 2: E-commerce Website
            </h3>
            <p>
              An e-commerce website with a full-featured shopping cart, product
              listings, and checkout process.
            </p>
            <p>
              <strong>Technologies:</strong> React, Node.js, Express, MongoDB
            </p>
            <p>
              <a
                href="https://example.com/ecommerce"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>{" "}
              |{" "}
              <a
                href="https://github.com/Rodion-Krainov/ecommerce"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repository
              </a>
            </p>
          </li>
          <li className="mb-4">
            <h3 className="text-lg font-semibold">
              Project 3: Blogging Platform
            </h3>
            <p>
              A blogging platform where users can create, edit, and delete
              posts. It also includes user authentication.
            </p>
            <p>
              <strong>Technologies:</strong> Django, Python, PostgreSQL
            </p>
            <p>
              <a
                href="https://example.com/blog"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>{" "}
              |{" "}
              <a
                href="https://github.com/Rodion-Krainov/blog"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repository
              </a>
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default PortfolioPage;
