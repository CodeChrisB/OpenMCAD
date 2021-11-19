<script>
import { VCard } from 'vuetify/lib'
import "../../../node_modules/vuetify/src/components/VCard/VCard.sass"; // Extensions

import VSheet from '../../../node_modules/vuetify/lib/components/VSheet'; // Mixins
import Loadable from '../../../node_modules/vuetify/lib/mixins/loadable/index.js';
import Routable from '../../../node_modules/vuetify/lib/mixins/routable/index.js'; // Helpers
import mixins from '../../../node_modules//vuetify/lib/util/mixins.js';

import draggable from 'vuedraggable'

export default mixins(Loadable, Routable, VSheet).extend({
  name: 'OCMSheet',
  extends: VCard,
  components:{draggable},
    data: ()=>{
      return{
        /*Contains information of all element on the docuemnt*/
        /*Sorted by the y position and then x position by ascending order*/
        pageData:[],
        cursorPos:{
          x:null,
          y:null
        }
      }
    },
    props: {
    width:String,
    height:String,
    flat: Boolean,
    hover: Boolean,
    img: String,
    link: Boolean,
    loaderHeight: {
      type: [Number, String],
      default: 4
    },
    raised: Boolean
  },
  computed: {
    classes() {
      return {
        'v-card': true,
        ...Routable.options.computed.classes.call(this),
        'v-card--flat': this.flat,
        'v-card--hover': this.hover,
        'v-card--link': this.isClickable,
        'v-card--loading': this.loading,
        'v-card--disabled': this.disabled,
        'v-card--raised': this.raised,
        'paper':true,
        'draggable':true,
        ...VSheet.options.computed.classes.call(this)
      };
    },
  },
  methods: {
    clickEvent(e){
      console.log(e)
      alert('Cursor Pos :\nx:'+(e.clientX-this.$el.offsetLeft)+"\ny:"+(e.clientY-this.$el.offsetTop))
      //e.clientX-this.$el.offsetLeft
      //e.clientY-this.$el.offsetTop
    },
    //somehow render this input field inside the ocm-sheet
    genProgress() {
      const render = Loadable.options.methods.genProgress.call(this);
      if (!render) return null;
      return this.$createElement('draggable', {
        staticClass: 'v-card__progress',
        key: 'progress'
      }, [render]);
    },
    reload(){
      this.$forceUpdate()
    },
    renderContent(h){
      console.log(h)
    }
  },

  render(h) {
    tag='draggable'
    var {
      tag,
      data
    } = this.generateRouteLink();
    data.style = this.styles;

    if (this.isClickable) {
      data.attrs = data.attrs || {};
      data.attrs.tabindex = 0;
    }
    console.log(tag)
    var renderObj = h(tag, this.setBackgroundColor(this.color, data), [this.genProgress(), this.$slots.default]);
    renderObj.data.style["min-height"]=this.height+"px"
    renderObj.data.style["min-width"]=this.width+"px"
    renderObj.data.on["click"]=this.clickEvent

    renderObj.children = this.renderContent(h)
    return renderObj
  }
})




</script>

<style lang="scss" scoped>
//width should be a multiple of 16+1



</style>