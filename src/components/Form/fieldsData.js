const fieldsData = [
  {
    name: "firstname",
    type: "text",
    label: "Имя",
    msgs: {
      error: "Имя указано не верно",
      empty: "Нужно указать имя"
    }
  },
  {
    name: "lastname",
    type: "text",
    label: "Фамилия",
    msgs: {
      error: "Фамилия указана не верно",
      empty: "Нужно указать фамилию"
    }
  },
  {
    name: "password",
    type: "password",
    label: "Пароль",
    msgs: {
      error: "Пароль указан не верно",
      empty: "Нужно указать пароль"
    }
  }
];

export default fieldsData;