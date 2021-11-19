<template>
  <div v-draggable="draggableValue">
    <div :ref="handleId">More text</div>
    drag and drop using handler
  </div>
</template>

<script>
import { Draggable } from "draggable-vue-directive";
export default {
  name: "DraggableDiv",
  directives: {
    Draggable,
  },
  data() {
    return {
      handleId: "handle-id",
      draggableValue: {
        onPositionChange: this.onPosChanged,
        onDragEnd:this.onDragEnd
      },
    };
  },
  mounted() {
    this.draggableValue.handle = this.$refs[this.handleId];
    console.log(this.draggableValue)
  },
  methods: {
    onPosChanged: function (positionDiff, absolutePosition, event) {
      console.log(event)
      console.log("left corner", absolutePosition.left);
      console.log("top corner", absolutePosition.top);
    },
    onDragEnd(positionDiff, absolutePosition, event){
        console.log(absolutePosition)
        console.log(event)


    },
  },
};
</script>

<style>
#draggable-container {
  position: absolute;
  z-index: 9;
}
#draggable-header {
  z-index: 10;
}
</style>

