<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-grey-9 text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title align="center">
          <q-avatar>
            <img src="https://w7.pngwing.com/pngs/854/367/png-transparent-notebook-daily-diary-notes-remarks-comments-book-to-write-schedule-pen-thumbnail.png">
          </q-avatar>
          Планировщик
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="center">
        <q-route-tab to="/" label="Планировщик" />
        <q-route-tab to="/myDescription" label="Описание" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>
<script>
import { defineComponent} from 'vue';

export default defineComponent({
  name: 'MainLayout',

})
</script>
