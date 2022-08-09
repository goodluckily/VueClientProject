<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <parent></parent>
  </div>
</template>

<script>
import parent from "./parent";
export default {
  name: 'HelloWorld',
  components: { parent },
  props: {
    msg: String
  }
}
</script>

