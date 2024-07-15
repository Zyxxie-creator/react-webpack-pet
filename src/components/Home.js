import React, { useState } from 'react';
import { Container, Button, Input, List, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Layout from './Layout';

const Home = () => {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState('');

    const handleAddNote = () => {
        if (newNote.trim() !== '') {
            setNotes([...notes, newNote.trim()]);
            setNewNote('');
        }
    };

    const handleDeleteNote = (index) => {
        const updatedNotes = [...notes];
        updatedNotes.splice(index, 1);
        setNotes(updatedNotes);
    };
    return (
        <Container>
            <Layout>
                <br></br>
                <p>
                    <Link to="/dynamic">Navigate to Dynamic Page</Link>
                </p>
            </Layout>

            <Input
                placeholder="Add a new note"
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                action={
                    <Button primary onClick={handleAddNote}>
                        Add
                        <Icon name="angle down" /> 
                    </Button>
                }
            />
            <List divided relaxed>
                {notes.map((note, index) => (
                    <List.Item key={index}>
                        <List.Content>
                            <List.Header>{note}</List.Header>
                            <Button negative onClick={() => handleDeleteNote(index)}>
                                Delete
                            </Button>
                        </List.Content>
                    </List.Item>
                ))}
            </List>
        </Container>
    );
};

export default Home;