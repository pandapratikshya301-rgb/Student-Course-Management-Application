import { createContext, useState } from "react";

export const StudentContext = createContext();

export function StudentProvider({ children }) {
  const [student] = useState({
    name: "Pratikshya Panda",
    course: "B.Tech CSE - Data Science",
    college: "GIET University",
  });

  return (
    <StudentContext.Provider value={student}>
      {children}
    </StudentContext.Provider>
  );
}
