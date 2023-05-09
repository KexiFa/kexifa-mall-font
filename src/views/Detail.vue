<template>
    <div>
      <div>
        <img :src="photo.imgUrl" alt="" />
      </div>
      <p>
        {{ photo.name }}
      </p>
      <button @click="back">back</button>
    </div>
  </template>
  
  <script>
  export default {
    props: ["id", "photo"],
    methods: {
      back() {
        this.$router.back();
      },
    },
  };
  </script>
  
  <style></style>