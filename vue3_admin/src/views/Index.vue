<template>
  <div>
    <el-button type="primary">主要按钮</el-button>
    <el-button :plain="true" @click="open4">error</el-button>
  </div>

  <el-icon>
    <Aim />
  </el-icon>
</template>

<script setup>
const open4 = () => {
  ElMessage.error("Oops, this is a error message.");
};
</script>
<style>
</style>