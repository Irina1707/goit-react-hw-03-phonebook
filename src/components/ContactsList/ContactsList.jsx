import React from 'react';
import PropTypes from 'prop-types';
import { ButtonList, List, ContactItem } from './ContactsList.styled'

const ContactList = ({ contacts, onDeleteContact }) => (
    
    <List>
        {contacts.map(({ id, name, number }) => {
            return <ContactItem key={id}>{name}: <span>{number}</span>
                <ButtonList type='button' onClick={() => onDeleteContact(id)}>Delete</ButtonList>
            </ContactItem>
        })
        }
        </List>
        
        )
        
export default ContactList;

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired
        })
    ).isRequired,
    onDeleteContact: PropTypes.func.isRequired
}