import { Link } from "react-router-dom";

function Courses() {
  const courses = [
    {
      id: 1,
      name: "React Development",
      description: "Learn React components, props, state and hooks.",
    },
    {
      id: 2,
      name: "Python Programming",
      description: "Learn Python programming and data analysis.",
    },
  ];

  return (
    <div>
      <h1>Available Courses</h1>

      {courses.map((course) => (
        <div key={course.id}>
          <h3>{course.name}</h3>

          <Link to={`/course/${course.id}`}>
            View Course Details
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Courses;
