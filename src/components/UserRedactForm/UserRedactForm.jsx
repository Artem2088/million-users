import "./UserRedactForm.scss";

const UserRedactForm = ({user}) => {

  return (
    <section className={user.length > 1 ? "user-redact" : "user-redact.open"}>
      <div className="user-redact__container">
        <form
          className="user-redact__form redact-form"
          name=""
        >
          <h3 className="user-redact__title">
            Редактирование информации сотрудника
          </h3>
          <fieldset className="user-redact__fieldset">
            <input
              className="redact-form__input"
              id="place-name"
              name="name"
              placeholder="Имя"
              minLength="2"
              maxLength="30"
              autoComplete="off"
              value={user.name}
            />
            <input
              className="redact-form__input"
              id="place-department"
              name="department"
              placeholder="Подразделение"
              minLength="2"
              maxLength="30"
              autoComplete="off"
              value={user.department}
            />
            <input
              className="redact-form__input"
              id="place-company"
              name="company"
              placeholder="Компания"
              minLength="2"
              maxLength="30"
              autoComplete="off"
              value={user.company}
            />
            <input
              className="redact-form__input"
              id="place-jobTitle"
              name="jobTitle"
              placeholder="Должность"
              minLength="2"
              maxLength="30"
              autoComplete="off"
              value={user.jobTitle}
            />
          </fieldset>
          <button className="redact-form__submit" type="submit" title="Создать" disabled="">
            Редактировать
          </button>
        </form>
      </div>
    </section>
  );
};

export default UserRedactForm;
