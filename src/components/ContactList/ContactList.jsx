import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/contacts/selectors';
import ContactListItem from '../ContactListItem/ContactListItem';
import s from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const FilteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (FilteredContacts) {
    return (
      <ul>
        {FilteredContacts.map(({ id, name, number }) => (
          <li className={s.li} key={id}>
            <ContactListItem id={id} name={name} number={number} />
          </li>
        ))}
      </ul>
    );
  }
}
