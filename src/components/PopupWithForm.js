export default function PopupWithForm({ name, title, buttonText, onClose, isOpen, children}) {
  return (
    <div className={`popup popup_form popup_${name} ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <form className={`form form_${name}`}
          name={`${name}-form`}
          noValidate>
          <h2 className="heading form__heading form__heading_type_input">{title}</h2>
          {children}
          <button type="submit"
            className="button form__submit text">{buttonText}</button>
        </form>
        <button type="button"
          className="button button_focus popup__close-button"
          aria-label="закрыть"
          onClick={onClose}></button>
      </div>
    </div>)
}