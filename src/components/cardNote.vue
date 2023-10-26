<template>
    <div class="div1">
        <div v-for="note in notes" :key="note.id" class="div3 text-white" style="margin-top: 15px;">
           <q-card dark bordered class="bg-grey-9 my-card">
                <q-card-section>
                    <div class="text-h6">{{ note.value.title }}</div>
                    <q-btn color="black" text-color="goldenrod" glossy unelevated icon="camera_enhance" @click="note.value.dialog = true"/>
                    <q-btn color="red" text-color="white" glossy unelevated icon="delete" @click="$emit('remove',note)" style="margin-left: 10px;"/>
                    <q-dialog v-model="note.value.dialog" persistent>
                        <q-card style="min-width: 350px" class="bg-blue-grey-10 text-white">
                        <q-card-section>
                            <q-input filled v-model="img1" label="Ссылка" input-class="text-white"/>
                            <q-btn @click="note.value.img = img1 , img1 = ''" flat label="Добавить" v-close-popup />
                        </q-card-section>
                        </q-card>
                    </q-dialog>
                </q-card-section>

                <q-separator dark inset />

                <q-card-section>
                    <img :src="note.value.img" style="max-width: 265px;">
                    <q-input
                        v-model="note.value.afterBody"
                        filled
                        type="textarea"
                        input-class="text-white"
                        />
                </q-card-section>
           </q-card>
        </div> 
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'IndexPage',

  props: {
    notes: {
        type: Array,
    }
  },


})
</script>