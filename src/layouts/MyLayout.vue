<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>
          VQCRM
        </q-toolbar-title>

        <div>
          <q-btn
            round
            dense
            flat
            color="text-grey-7"
            icon="apps"
            to="/"
          >
            <q-tooltip>Сводка</q-tooltip>
          </q-btn>
          <q-btn
            round
            dense
            flat
            icon="notifications"
          >
            <q-badge
              color="red"
              text-color="white"
              floating
            >
              2
            </q-badge>
            <q-tooltip>Уведомления</q-tooltip>
          </q-btn>
          Админ Админыч
          <q-btn
            round
            dense
            flat
            color="text-grey-7"
            icon="exit_to_app"
            @click="logout"
          >
            <q-tooltip>Выйти</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      content-class="bg-grey-9"
    >
      <q-list dark>
        <q-item to="/" exact>
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Сводка</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          class="GNL__drawer-item"
          v-for="link in links"
          :key="link.to"
          :to="link.to"
        >
          <q-item-section avatar>
            <q-icon :name="link.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ link.text }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false,
      links: [
        { to: '/1', text: 'Discord Chat Channel', icon: 'chat' },
        { to: '/2', text: 'Forum', icon: 'record_voice_over' }
      ]
    }
  }
}
</script>
