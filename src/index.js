// Вам необхідно написати додаток Todo list, використовуючи синтаксис класів.
//     У списку нотаток повинні бути методи для додавання нової нотатки, видалення, редагування та отримання
// повної інформації про нотатку, а так само отримання списку всіх нотаток. Крім цього,
//     у користувача має бути можливість позначити замітку, як виконану, і отримання інформації про те,
//     скільки всього нотаток у списку і скільки залишилося невиконань. Нотатки не повинні бути порожніми.

class TodoList {
    constructor() {
        this.notes = [];
    }

    addNote(noteText) {
        if (noteText.trim() !== '') {
            const note = {
                text: noteText,
                completed: false
            };
            this.notes.push(note);
            console.log(`Нотатка "${noteText}" була додана.`);
        } else {
            console.log('Нотатка не може бути порожньою.');
        }
    }

    editNote(index, newText) {
        if (index >= 0 && index < this.notes.length) {
            if (newText.trim() !== '') {
                this.notes[index].text = newText;
                console.log(`Нотатка була відредагована.`);
            } else {
                console.log('Нотатка не може бути порожньою.');
            }
        } else {
            console.log('Нотатка з вказаним індексом не існує.');
        }
    }

    removeNote(index) {
        if (index >= 0 && index < this.notes.length) {
            const removedNote = this.notes.splice(index, 1);
            console.log(`Нотатка "${removedNote[0].text}" була видалена.`);
        } else {
            console.log('Нотатка з вказаним індексом не існує.');
        }
    }

    markAsCompleted(index) {
        if (index >= 0 && index < this.notes.length) {
            this.notes[index].completed = true;
            console.log(`Нотатка була позначена як виконана.`);
        } else {
            console.log('Нотатка з вказаним індексом не існує.');
        }
    }

    getNoteInfo(index) {
        if (index >= 0 && index < this.notes.length) {
            const note = this.notes[index];
            console.log(`Інформація про нотатку:
      Текст: ${note.text}
      Статус: ${note.completed ? 'Виконано' : 'Не виконано'}`);
        } else {
            console.log('Нотатка з вказаним індексом не існує.');
        }
    }

    getNoteList() {
        console.log('Список нотаток:');
        this.notes.forEach((note, index) => {
            console.log(`${index + 1}. ${note.text} - ${note.completed ? 'Виконано' : 'Не виконано'}`);
        });
    }

    getTotalNotes() {
        console.log(`Всього нотаток: ${this.notes.length}`);
    }

    getRemainingNotes() {
        const remaining = this.notes.filter(note => !note.completed).length;
        console.log(`Залишилося невиконаних нотаток: ${remaining}`);
    }
}

const todoList = new TodoList();

todoList.addNote('Приклад нотатки 1');
todoList.addNote('Приклад нотатки 2');
todoList.addNote(''); // Спроба додати порожню нотатку
todoList.getNoteList();

todoList.editNote(0, 'Новий текст нотатки 1');
todoList.editNote(3, 'Спроба редагування нотатки з неіснуючим індексом');

todoList.markAsCompleted(1);
todoList.markAsCompleted(4); // Спроба позначити неіснуючу нотатку

todoList.getNoteInfo(1);
todoList.getNoteInfo(2); // Спроба отримати інформацію про неіснуючу нотатку

todoList.removeNote(2); // Спроба видалити неіснуючу нотатку
todoList.removeNote(0);

todoList.getRemainingNotes();
todoList.getTotalNotes();
