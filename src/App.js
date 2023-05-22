import logo from './images/logo.svg';
// import card from './images';
import './index.css';

function App() {
  return (
    <div className="page">
      <header className="header page__content">
        <img
          src={logo}
          className="logo" alt="logo" />
      </header>
      <main>
        <section className="profile page__content page__content_narrow"
          aria-label="профиль пользователя">
          <div className="profile__cover">
            <img className="profile__avatar"
              src="<%=require('./images/kusto.jpg')%>"
              alt="фотография пользователя" />
            <button className="button profile__avatar-button"
              type="button"
              aria-label="редактировать аватар"></button>
          </div>
          <div className="profile__info">
            <div className="profile__group">
              <h1 className="heading profile__name">Жак-Ив Кусто</h1>
              <button className="button button_focus profile__edit-button"
                type="button"
                aria-label="редактировать профиль"></button>
            </div>
            <p className="text profile__profession">Исследователь океана</p>
          </div>
          <button className="button button_focus profile__add-button"
            type="button"
            aria-label="добавить место в галерею"></button>
        </section>
        <section className="elements page__content page__content_narrow"
          aria-label="галерея посещённых мест]">
          <ul className="elements__gallery">
            {/* место для карточек */}
          </ul>
        </section>
      </main>
      <footer className="footer page__content page__content_narrow">
        <p className="text footer__text">&copy; 2023 Mesto Russia</p>
      </footer>
      <div className="popup popup_form popup_avatar">
        <div className="popup__container">
          <form className="form form_avatar"
            name="avatar-form"
            aria-label="Обновить аватар"
            noValidate>
            <h2 className="heading form__heading form__heading_type_input">Обновить
              аватар</h2>
            <fieldset className="form__field form__field_profile-avatar">
              <input className="form__input form__input_el_avatar"
                id="avatar-input"
                name="avatar"
                aria-label="Аватар"
                placeholder="Ссылка на изображение"
                autoComplete="off"
                type="url"
                minLength="2"
                maxLength="200"
                required />
              <span className="avatar-input-error form__input-error"></span>
              <button type="submit"
                className="button form__submit text">Сохранить</button>
            </fieldset>
          </form>
          <button type="button"
            className="button button_focus popup__close-button"
            aria-label="закрыть"></button>
        </div>
      </div>
      {/* <!-- popup remove card --> */}
      <div className="popup popup_form popup_remove-card">
        <div className="popup__container">
          <form className="form form_remove-card"
            name="remove-card-form"
            aria-label="Удалить карточку"
            noValidate>
            <h2 className="heading form__heading form__heading_type_confirm">Вы
              уверены?</h2>
            <button type="submit"
              className="button form__submit text">Да</button>
          </form>
          <button type="button"
            className="button button_focus popup__close-button"
            aria-label="закрыть"></button>
        </div>
      </div>
      {/* <!-- popup profile --> */}
      <div className="popup popup_form popup_profile">
        <div className="popup__container">
          <form className="form form_profile"
            name="profile-form"
            aria-label="Заполните профиль"
            noValidate>
            <h2 className="heading form__heading form__heading_type_input">
              Редактировать профиль</h2>
            <fieldset className="form__field form__field_profile-info">
              <input className="form__input form__input_el_name"
                id="name-input"
                type="text"
                name="name"
                aria-label="Имя"
                placeholder="Иван Иванов"
                autoComplete="off"
                minLength="2"
                maxLength="40"
                required />
              <span className="name-input-error form__input-error"></span>
              <input className="form__input form__input_el_profession"
                id="profession-input"
                type="text"
                name="about"
                aria-label="Профессия"
                placeholder="Строитель кораблей"
                autoComplete="off"
                minLength="2"
                maxLength="200"
                required />
              <span className="profession-input-error form__input-error"></span>
              <button type="submit"
                className="button form__submit text">Сохранить</button>
            </fieldset>
          </form>
          <button type="button"
            className="button button_focus popup__close-button"
            aria-label="закрыть"></button>
        </div>
      </div>
      {/* <!-- popup - elements --> */}
      <div className="popup popup_form popup_elements">
        <div className="popup__container">
          <form className="form form_elements"
            name="card-form"
            aria-label="Создание карточки"
            noValidate>
            <h2 className="heading form__heading form__heading_type_input">Новое
              место</h2>
            <fieldset className="form__field form__field_profile-info">
              <input className="form__input form__input_el_heading"
                id="heading-input"
                type="text"
                name="name"
                aria-label="Название"
                placeholder="Название"
                autoComplete="off"
                minLength="2"
                maxLength="30"
                required />
              <span className="heading-input-error form__input-error"></span>
              <input className="form__input form__input_el_image"
                id="image-input"
                type="url"
                name="link"
                aria-label="Ссылка на картинку"
                placeholder="Ссылка на картинку"
                autoComplete="off"
                required />
              <span className="image-input-error form__input-error"></span>
              <button type="submit"
                className="button form__submit form__submit_inactive text">Создать</button>
            </fieldset>
          </form>
          <button type="button"
            className="button button_focus popup__close-button"
            aria-label="закрыть"></button>
        </div>
      </div>
      {/* <!-- popup увеличенная фотография --> */}
      <div className="popup popup_scale-image">
        <div className="popup__image-container">
          <figure className="scale-image">
            <img className="scale-image__image"
              src="#"
              alt="#" />
            <figcaption className="scale-image__figcaption"></figcaption>
          </figure>
          <button type="button"
            className="button button_focus popup__close-button"
            aria-label="закрыть"></button>
        </div>
      </div>
      {/* <!-- template - добавить карточку --> */}
      <template className="card-template">
        <li className="elements__item">
          <img className="elements__image"
            src='#'
            alt="#" />
          <div className="elements__group">
            <h2 className="heading elements__heading"></h2>
            <div className="elements__like-group">
              <button className="button elements__like-button"
                type="button"
                aria-label="отметить: нравится"></button>
              <span className="elements__like-count">0</span>
            </div>
          </div>
          <button className="button elements__remove-item"
            type="button"
            aria-label="удалить карточку"></button>
        </li>
      </template>
    </div>
  );
}

export default App;
