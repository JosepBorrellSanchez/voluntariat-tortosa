<template>
    <div class="message">
        <h1>{{ msg }}</h1>
        <button @click="change()">Change</button>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Login'
    }
  },
  methods: {
    change () {
      this.msg = 'Changed'
    }
  }
}
</script>
