import Filter from './Filter';
import s from './ContactList.module.css';
export default function ContactList({
  contacts,
  contactsFiltered,
  onRemove,
  filter,
  onChange,
}) {
  if (contacts.length === 0) return null;
  return (
    <div className={s.contacts}>
      <h1 className={s.title}>Contacts</h1>
      {contacts.length === 1 ? null : (
        <Filter filter={filter} onChange={onChange} />
      )}
      {contactsFiltered.length !== 0 ? (
        <ul className={s.contactList}>
          {contactsFiltered.map(({ id, name, number }) => (
            <li className={s.contactItem} key={id}>
              <span className={s.name}>{name}: </span>
              <span className={s.number}>{number}</span>
              <button
                type="button"
                className={s.button}
                onClick={() => onRemove(id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Такого контакта в списке нет!</p>
      )}
    </div>
  );
}

// Notification.propTypes = {
//   message: PropTypes.string.isRequired,
// };
