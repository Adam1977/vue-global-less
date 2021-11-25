<template>
  <div class="hello">
    <span class="title c-red">1231231</span>
    <span class="msg">{{ msg }}</span>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
}
</script>

<style lang="less">
.hello {
  .mg-t(20px);
  .title {
    .mg-r(20px);
  }
  .msg {
    .c-red;
  }
}
</style>
