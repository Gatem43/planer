import { ref } from 'vue'

export function hooksNote() {
    const notes = ref([]);
    const nameNote = ref('');
    const descNote = ref('');
    const prompt = ref(false);
    const img1 = ref('')


    const addNote = () => {
        if (nameNote.value != '') {
            const newNote = ref({
                id: Date.now(),
                title: nameNote.value,
                body: descNote.value,
                afterBody: descNote.value,
                img: '',
                dialog: false
            })
            notes.value.push(newNote)
            prompt.value = false
            nameNote.value = ''
            descNote.value = ''
        } else if (nameNote.value == '') {
            alert('Заполните поле ввода')
        }
    };


    return {
        notes , nameNote , descNote , addNote , prompt ,img1
    }
}