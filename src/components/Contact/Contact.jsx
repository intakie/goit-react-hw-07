import css from './Contact.module.css';

export default function Contact({ id, name, number, onDeleteContact }) {
  const handleDelete = () => {
    onDeleteContact(id);
  };

  return (
    <li className={css.item}>
      <p>
        {name}: {number}
      </p>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}
