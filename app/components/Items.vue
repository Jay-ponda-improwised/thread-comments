<script setup>
import newComment from '../commentClass.js'

const props = defineProps(['currentObj'])
const emits = defineEmits(['addNewComment'])
const newCommentRef = ref(null)
const isOpen = ref(false)

function addComment() {
  if (newCommentRef.value.value != '') {
    emits(
      'addNewComment',
      [props.currentObj.id],
      newComment(newCommentRef.value.value)
    )
  }
  ToggleInputBox()
}

function passComment(parentArr, content) {
  parentArr.unshift(props.currentObj.id)
  console.log(props.currentObj.id, parentArr, content)
  emits('addNewComment', parentArr, content)
}

function ToggleInputBox() {
  isOpen.value = !isOpen.value
}
</script>
<template>
  <section>
    <div style="display: flex">
      <div>{{ props.currentObj.comment }}</div>
      <hr />
      <button
        type="button"
        style="border-radius: 5px; margin: 5px"
        @click="ToggleInputBox()"
      >
        reply
      </button>
    </div>
    <div class="m-1 ms-5">
      <div
        v-if="isOpen"
        class="d-flex border p-1 rounded"
        style="width: fit-content"
      >
        <input ref="newCommentRef" type="text" style="width: 500px" />
        <button type="button" class="ms-1" @click="addComment()">send</button>
      </div>
      <Items
        v-for="item in props.currentObj.Replies"
        :key="item.id"
        :current-obj="item"
        @add-new-comment="
          (parentArr, content) => passComment(parentArr, content)
        "
      />
    </div>
  </section>
</template>
<style scoped>
.homepage {
  margin-top: 400px;
  font-size: 30px;
}
</style>
