const notesList = document.getElementById('notes-list');
const noteInput = document.getElementById('note-input');

function displayNotes() {
    notesList.innerHTML = '';
    const notes = getNotesFromLocalStorage();

    notes.forEach((note, index) => {
        const li = document.createElement('li');
        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => deleteNote(index));

        li.innerText = note;
        li.appendChild(deleteBtn);
        notesList.appendChild(li);
    });
}

function getNotesFromLocalStorage() {
    return JSON.parse(localStorage.getItem('notes')) || [];
}

function saveNotesToLocalStorage(notes) {
    localStorage.setItem('notes', JSON.stringify(notes));
}

function addNote() {
    const noteText = noteInput.value.trim();

    if (noteText === '') {
        alert('Please enter a valid note.');
        return;
    }

    const notes = getNotesFromLocalStorage();
    notes.push(noteText);
    saveNotesToLocalStorage(notes);

    noteInput.value = '';
    displayNotes();
}

function deleteNote(index) {
    const notes = getNotesFromLocalStorage();
    notes.splice(index, 1);
    saveNotesToLocalStorage(notes);
    displayNotes();
}

document.getElementById('add-note-btn').addEventListener('click', addNote);
displayNotes();