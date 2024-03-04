const webDevelopmentSkills = [
  {
    title: "HTML",
    desc: " Learn the foundation of web development with HTML. Structure your content for the web.",
  },
  {
    title: "CSS",
    desc: "Build dynamic and interactive user interfaces with React. Dive into modern web development.",
  },
  {
    title: "React",
    desc: " Build dynamic and interactive user interfaces with React. Dive into modern web development.",
  },
];
const coursesExplanation = [
  {
    title: "HTML Course",
    desc: "Get started with HTML, the backbone of the web. Here's a simple example:",
    code: [
      "<!DOCTYPE html>",
      "<head>",
      "<title>My HTML Page</title>",
      "</head>",
      "<body>",
      "<h1>Hello, World!</h1>",
      "<p>This is a basic HTML page.</p>",
      "</body>",
      "</html>",
    ],
  },
  {
    title: "CSS Course",
    desc: "Dive into CSS to make your pages visually appealing. Sample CSS code:",
    code: [
      "body{",
      "font-family: 'Arial', sans-serif;",
      "background-color: #f4f4f4;",
      "}",
    ],
  },
  {
    title: "React Course",
    desc: "Explore React and build dynamic UIs. A simple React component example:",
    code: [
      "import React from 'react'",
      "const Home = () => {",
      " return (",
      "  <div>Hello world</div>",
      ")",
      "}",
      "export default Home",
    ],
  },
];

const page = () => {
  return (
    <div className="wrapper">
      <header className="bg-blue-500 text-white text-center py-8">
        <h1 className="text-4xl font-bold">Learn Web Development</h1>
        <p className="mt-2">
          Master the art of building websites and applications
        </p>
      </header>
      {/* <!-- Skills Section --> */}
      <section className="container mx-auto my-8 p-4">
        <h2 className="text-2xl font-bold mb-4">Skills You'll Learn</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {webDevelopmentSkills.map((item, index) => (
            <div className="bg-white p-6 rounded shadow-md" key={index}>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* <!-- Course Explanation Section --> */}
      <section className="container mx-auto my-8 p-4">
        <h2 className="text-2xl font-bold mb-4">Explore Our Courses</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesExplanation?.map((item, index) => (
            <div className="bg-white p-6 rounded shadow-md" key={index}>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.desc}</p>
              <p className="bg-gray-100 p-4 rounded">
                <code className=" flex flex-col">
                  {item.code.map((code, index) => (
                    <span key={index}>{code}</span>
                  ))}
                </code>
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* <!-- Importance of Web Development Section --> */}
      <section className="container mx-auto my-8 p-4">
        <h2 className="text-2xl font-bold mb-4">Why Learn Web Development?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* <!-- Section 1 --> */}
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-xl font-semibold mb-2">
              Endless Opportunities
            </h3>
            <p>
              Web development opens the door to a world of opportunities. From
              building websites and applications for businesses to creating your
              own projects, the possibilities are endless.
            </p>
          </div>

          {/* <!-- Section 2 --> */}
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-xl font-semibold mb-2">In-Demand Skills</h3>
            <p>
              Web development skills are highly sought after in today's job
              market. Companies across various industries are constantly looking
              for developers to enhance their online presence and create
              engaging user experiences.
            </p>
          </div>

          {/* <!-- Section 3 --> */}
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-xl font-semibold mb-2">Empower Your Ideas</h3>
            <p>
              Learning web development empowers you to turn your ideas into
              reality. Whether you have a startup concept, a personal blog, or a
              creative project in mind, web development skills allow you to
              bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Unlock the World of Web Development with Us
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Experience a transformative journey in web development through our
            comprehensive learning platform and insightful blog.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-blue-500 text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl font-semibold mb-4">
                Web Development Learning Platform
              </h3>
              <p className="text-lg mb-4">
                Discover a hands-on learning experience designed to elevate your
                skills. From mastering HTML and CSS to diving into advanced
                frameworks like React, our platform is tailored for learners at
                every stage.
              </p>
              <a
                href="#your-learning-platform-page"
                className="inline-block bg-white text-blue-500 py-2 px-4 rounded-full hover:bg-blue-100"
              >
                Explore Courses
              </a>
            </div>
            <div className="bg-green-500 text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl font-semibold mb-4">
                Web Development Blog
              </h3>
              <p className="text-lg mb-4">
                Immerse yourself in the world of web development with our
                insightful blog. Our articles, crafted by industry experts and
                enthusiasts, cover the latest trends, best practices, and
                practical tips to keep you ahead of the curve.
              </p>
              <a
                href="#your-blog-page"
                className="inline-block bg-white text-green-500 py-2 px-4 rounded-full hover:bg-green-100"
              >
                Read Latest Posts
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Importance of Learning from Our Platform Section --> */}
      <section className="container mx-auto my-8 p-4">
        <h2 className="text-2xl font-bold mb-4 text-[hsla(0,0%,100%,.7)]">
          Why Learn from Our Platform?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* <!-- Section 1 --> */}
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-xl font-semibold mb-2 ">Expert Instructors</h3>
            <p className="">
              Our courses are led by experienced and passionate instructors who
              are experts in the field. Learn from professionals who bring
              real-world insights and practical knowledge to your learning
              journey.
            </p>
          </div>

          {/* <!-- Section 2 --> */}
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-xl font-semibold mb-2">Hands-On Projects</h3>
            <p>
              We believe in learning by doing. Our platform provides hands-on
              projects and exercises to reinforce your skills. Apply what you
              learn in real-world scenarios and build a strong foundation for
              your web development career.
            </p>
          </div>

          {/* <!-- Section 3 --> */}
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-xl font-semibold mb-2">Community Support</h3>
            <p>
              Join our thriving community of learners. Connect with fellow
              students, ask questions, and collaborate on projects. Our platform
              fosters a supportive environment where you can grow your skills
              and network with like-minded individuals.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Discover the Ultimate Web Development Hub
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Your premier destination for comprehensive learning and staying
            ahead in the ever-evolving world of web development.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded shadow-md">
              <h3 className="text-2xl font-semibold mb-4">
                Web Development Learning Platform
              </h3>
              <p>
                Embark on an enriching learning journey with our
                state-of-the-art platform. Our courses, ranging from
                foundational HTML and CSS to advanced React development, cater
                to every skill level, ensuring a seamless and rewarding learning
                experience.
              </p>
              <a
                href="#your-learning-platform-page"
                className="text-blue-500 hover:underline"
              >
                Discover Courses
              </a>
            </div>
            <div className="bg-white p-6 rounded shadow-md">
              <h3 className="text-2xl font-semibold mb-4">
                Web Development Blog
              </h3>
              <p>
                Stay at the forefront of the industry with insights, tutorials,
                and the latest trends from our Web Development Blog. Authored by
                industry professionals and enthusiasts, our articles provide
                valuable knowledge and keep you informed about the rapidly
                evolving landscape of web development.
              </p>
              <a
                href="#your-blog-page"
                className="text-blue-500 hover:underline"
              >
                Read Latest Posts
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Call to Action Section --> */}
      <section className="bg-gray-800 text-white text-center py-12">
        <h2 className="text-3xl font-bold mb-4">
          Ready to start your journey in web development?
        </h2>
        <p className="text-lg mb-6">
          Join our platform and unlock a world of opportunities!
        </p>
        <a
          href="#your-signup-page"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Get Started
        </a>
      </section>
    </div>
  );
};

export default page;
