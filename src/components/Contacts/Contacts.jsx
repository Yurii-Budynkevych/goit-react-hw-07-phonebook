import PropTypes from 'prop-types';
import ListItem from './Item/Item';
import './Contacts.css';

const ContactList = ({ arr }) => {
  return (
    <ul>
      {arr.map(el => (
        <ListItem key={el.id} name={el.name} value={el.phone} id={el.id} />
      ))}
    </ul>
  );
};
export default ContactList;

ContactList.propTypes = {
  arr: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
