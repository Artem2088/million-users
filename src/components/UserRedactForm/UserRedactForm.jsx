import "./UserRedactForm.scss";

const UserRedactForm = () => {
  return (
    <section className="user-redact">
      <div className="user-redact__container">
        <h3>Редактирование информации сотрудника</h3>
        <form action="" className="user-redact__form redact-form">
          <label htmlFor="">Имя</label>
          <input type="text" placeholder="Имя" className="redact-form__input"/>
          <label htmlFor="">Подразделение</label>
          <input type="text" placeholder="Подразделение" className="redact-form__input"/>
          <label htmlFor="">Компания</label>
          <input type="text" placeholder="Компания" className="redact-form__input"/>
          <label htmlFor="">Должность</label>
          <input type="text" placeholder="Должность" className="redact-form__input"/>
          <button>Отправить</button>
        </form>
      </div>
    </section>
  );
};

export default UserRedactForm;
