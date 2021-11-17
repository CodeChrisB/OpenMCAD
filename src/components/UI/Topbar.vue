<template lang="pug">
v-card
  v-toolbar(color='cyan' dark='' flat='')
    v-tabs(v-model='tab' align-with-title='')
      v-tabs-slider(color='yellow')
      v-tab(v-for='item in menuName' :key='item')
        | {{ $t(item) }}
  v-tabs-items(v-model='tab')
    v-tab-item(v-for='item in menuContent' :key='item')
      v-card(flat='')
        v-card-text(v-text='menuContent[tab]')
</template>

<script>
export default {
data:() => {
    return{
        tab:0,
        menuName:[
            'topbar.menu.math',
            'topbar.menu.io',
            'topbar.menu.function',
            'topbar.menu.matricesTables',
            'topbar.menu.plots',
            'topbar.menu.mformatting',
            'topbar.menu.tformatting',
            'topbar.menu.calculation',
            'topbar.menu.document',
            'topbar.menu.resources'
        ],
        menuContent:[
            'topbar.menu.math',
            'topbar.menu.io',
            'topbar.menu.function',
            'topbar.menu.matricesTables',
            'topbar.menu.plots',
            'topbar.menu.mformatting',
            'topbar.menu.tformatting',
            'topbar.menu.calculation',
            'topbar.menu.document',
            'topbar.menu.resources'
        ]
    }   
}
}
</script>

<style>

</style>