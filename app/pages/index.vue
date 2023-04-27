<script setup>
import newComment from '../commentClass.js'

// ref
const groundInput = ref('')
const currentObjOfArr = ref([])

// add new comment
function iterateAndAdd(parentArr, content) {
  let arr = currentObjOfArr.value
  // reach to node where needs to push
  for (let parentIndex = 0; parentIndex < parentArr.length; parentIndex++) {
    // serching for node
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id == parentArr[parentIndex]) {
        arr = arr[i].Replies
      }
    }
  }

  // push object
  console.log(arr, Array.isArray(arr), arr, parentArr)
  arr.push(content)
}
</script>
<template>
  <section class="container-fluid p-3">
    <div class="d-flex">
      <input v-model="groundInput" type="text" style="flex-grow: 1" />
      <button
        type="button"
        class="ms-1"
        @click="iterateAndAdd([], newComment(groundInput))"
      >
        send
      </button>
    </div>
    <div class="m-1 ms-5">
      <Items
        v-for="item in currentObjOfArr"
        :key="item.id"
        :current-obj="item"
        @add-new-comment="
          (parentArr, content) => iterateAndAdd(parentArr, content)
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
