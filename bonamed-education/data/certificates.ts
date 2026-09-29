export type Certificate = {
  id: string;
  name: string;
  course: string;
  hours: string;
  date: string;
  organization: string;
  status: "valid" | "revoked" | "expired";
};

export const certificates: Certificate[] = [
  {
    id: "BMD-2026-001",
    name: "Иванов Иван Иванович",
    course: "QADAM 2030: Современные методы преподавания в медицинском вузе",
    hours: "24 академических часа",
    date: "29 сентября 2026",
    organization: "ТОО «Бонамед»",
    status: "valid"
  },
  {
    id: "BMD-2026-002",
    name: "Петрова Анна Сергеевна",
    course: "QADAM 2030: Искусственный интеллект в медицинском образовании",
    hours: "24 академических часа",
    date: "29 сентября 2026",
    organization: "ТОО «Бонамед»",
    status: "valid"
  }
];
