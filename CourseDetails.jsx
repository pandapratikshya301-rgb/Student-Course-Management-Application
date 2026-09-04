import { useParams } from "react-router-dom";

function CourseDetails() {
  const { id } = useParams();

  const courses = {
    1: {
      name: "React Development",
      description:
        "Learn components, props, state, hooks and React Router.",
    },
    2: {
      name: "Python Programming",
      description:
        "Learn Python basics, functions, OOP and data analysis.",
    },
  };

  const course = courses[id];

  if (!course) {
    return <h2>Course Not Found</h2>;
  }

  return (
    <div>
      <h1>Course Details</h1>

      <p>
        <strong>Course ID:</strong> {id}
      </p>

      <p>
        <strong>Course Name:</strong> {course.name}
      </p>

      <p>
        <strong>Description:</strong> {course.description}
      </p>
    </div>
  );
}

export default CourseDetails;
