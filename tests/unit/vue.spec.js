import Vue from "vue";
import VueHotkey from 'v-hotkey'
import VueLocalStorage from "vue-localstorage";
import VueRouter from "vue-router";
import axios from "axios";
Vue.use(VueHotkey)

Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.use(VueLocalStorage);
Vue.prototype.localStorage = VueLocalStorage;
Vue.use(VueRouter);
Vue.use(VueLocalStorage, {
  name: "ls",
  bind: true,
});



describe('Prototype Functions', () => {
    it('Axios is active',()=>{expect(axios).not.toBeNull()})
    it('Vue is active',()=>{expect(Vue).not.toBeNull()})
    it('VueHotkey is active',()=>{expect(VueRouter).not.toBeNull()})
    it('VueLocalStorage is active',()=>{expect(VueLocalStorage).not.toBeNull()})
    it('VueRouter is active',()=>{expect(VueRouter).not.toBeNull()})
    it('Localstorage Set', () => {
        Vue.localStorage.set('unit:test','test')
        expect(true).toBeTruthy()
    })
    it('Localstorage Get', () => {
        let data = Vue.localStorage.get('unit:test')
        expect(data==='test').toBeTruthy()
    })
    it('Localstorage Remove', () => {
        Vue.localStorage.remove('unit:test')
        let data = Vue.localStorage.get('unit:test')
        expect(data===null).toBeTruthy()
    })    
})
