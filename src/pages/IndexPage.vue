<template>
  <q-page class="page1">
    <div class="flex_glav">
        <div class="flex_child3">
          <q-btn outline style="color: goldenrod; width: 190px;" label="Создать заметку" @click="prompt = true"/>
          <q-btn outline style="color: green; width: 190px; margin-top: 15px;" label="Создать диаграмму" @click="promptDiag = true"/>
        </div>
        <q-dialog v-model="promptDiag" persistent>
          <q-card class="bg-blue-grey-10 text-white">
            <q-card-section>
              <div class="text-h6">Создание заметки</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <q-btn @click="addDiagram" flat label="Cоздать короткую" v-close-popup />
              <q-btn @click="addDiagramBig" flat label="Cоздать длинную" v-close-popup />
            </q-card-section>
            <q-card-actions align="right">
              <q-btn flat label="Отмена" v-close-popup />
            </q-card-actions>
          </q-card>
       </q-dialog>
        <q-dialog v-model="prompt" persistent>
          <q-card style="min-width: 350px" class="bg-blue-grey-10 text-white">
            <q-card-section>
              <div class="text-h6">Создание заметки</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <q-input filled v-model="nameNote" label="Название" input-class="text-white" />
                <q-input
                  label="Описание"
                  v-model="descNote"
                  filled
                  type="textarea"
                  input-class="text-white"
                  style="margin-top: 10px;"
                />
            </q-card-section>

            <q-card-actions align="right">
              <q-btn flat label="Отмена" v-close-popup />
              <q-btn @click="addNote" flat label="Создать" v-close-popup />
            </q-card-actions>
          </q-card>
       </q-dialog>
    </div>
    <div class="felx-child2">
      <cardNote :notes="notes" @remove="removeNote"/>
      <myDiagram :diagram="diagram" :diagramBig="diagramBig" @removeDi="removeDiag" @removeDiBig="removeDiagBig"/>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { hooksNote } from '../hooks/hookNote'
import cardNote from '../components/cardNote.vue'
import myDiagram from '../components/myDiagram.vue'
import { hookDiagram } from 'src/hooks/hookDiagram'

export default defineComponent({
  name: 'IndexPage',
  components: {
    cardNote , myDiagram
  },

  setup (props) {
    const {notes , nameNote , descNote , addNote , prompt , img1} = hooksNote()
    const { diagram , addDiagram , promptDiag , diagramBig , addDiagramBig } = hookDiagram()
    return {
      notes , nameNote , descNote , addNote , prompt , img1 , diagram , addDiagram , promptDiag , diagramBig , addDiagramBig
    }
  },

  methods: {
    removeNote(note) {
      this.notes = this.notes.filter(n => n.value.id != note.value.id)
    },
    removeDiag(diag) {
      this.diagram = this.diagram.filter(d => d.value.id != diag.value.id)
    },
    removeDiagBig(diagBig) {
      this.diagramBig = this.diagramBig.filter(d => d.value.id != diagBig.value.id)
    }
  }
  
})
</script>

<style>
  .page1 {
   display: flex;
   padding: 25px;
   justify-content: space-around;
   flex-wrap: wrap;
  }

  .div3 {
    width: 300px;
    margin-left: 20px;
  }

  .div1 {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  .label1 {
    background-color: white;
  }

  .felx-child2 {
    width: 75%;
    display: flex;
    flex-direction: column;
  }

  .flex_child1 {
    width: 100%;
  }

  .flex_child3 {
    display: flex;
    flex-direction: column;
  }

  @media screen and (width < 850px) {
    .felx-child2{
      width: 100%;
    }

    .div3{
      margin-left: 10px;
    }

    .div1 {
      display: flex;
      justify-content: center;
    }

  }

</style>
