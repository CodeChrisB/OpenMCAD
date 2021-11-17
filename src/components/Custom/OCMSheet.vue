<script>
import { VCard } from 'vuetify/lib'
import "../../../node_modules/vuetify/src/components/VCard/VCard.sass"; // Extensions

import VSheet from '../../../node_modules/vuetify/lib/components/VSheet'; // Mixins
import Loadable from '../../../node_modules/vuetify/lib/mixins/loadable/index.js';
import Routable from '../../../node_modules/vuetify/lib/mixins/routable/index.js'; // Helpers
import mixins from '../../../node_modules//vuetify/lib/util/mixins.js';
export default mixins(Loadable, Routable, VSheet).extend({
  name: 'OCMSheet',
  extends: VCard,
    data: ()=>{
      return{
        /*Contains information of all element on the docuemnt*/
        /*Sorted by the y position and then x position by ascending order*/
        pageData:[]
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
        ...VSheet.options.computed.classes.call(this)
      };
    },

    styles() {
      const style = { ...VSheet.options.computed.styles.call(this)
      };

      if (this.img) {
        style.background = `url("${this.img}") center center / cover no-repeat`;
      }

      return style;
    }

  },
  methods: {
    clickEvent(e){
      console.log(e)
      console.log(this)
      this.genInputField(e.clientX-this.$el.offsetLeft,e.clientY-this.$el.offsetTop)
    },
    genInputField(x,y){
      console.log(x,y)
      var input = this.$createElement('input',{},)
      this.$children.push(input)
    },
    genProgress() {
      const render = Loadable.options.methods.genProgress.call(this);
      if (!render) return null;
      return this.$createElement('div', {
        staticClass: 'v-card__progress',
        key: 'progress'
      }, [render]);
    },
    

  },

  render(h) {
    const {
      tag,
      data
    } = this.generateRouteLink();
    data.style = this.styles;

    if (this.isClickable) {
      data.attrs = data.attrs || {};
      data.attrs.tabindex = 0;
    }

    var renderObj = h(tag, this.setBackgroundColor(this.color, data), [this.genProgress(), this.$slots.default]);
    renderObj.data.style["min-height"]=this.height+"px"
    renderObj.data.style["min-width"]=this.width+"px"
    renderObj.data.on["click"]=this.clickEvent
    return renderObj
  }
})

</script>

<style lang="scss" scoped>
//width should be a multiple of 16+1



</style>