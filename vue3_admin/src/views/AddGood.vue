<template>
    <div class="add">
        <el-card class="add-container">
            <el-form :model="state.goodForm" :rules="state.rules" ref="goodRef" label-width="100px" class="goodForm">


            </el-form>
        </el-card>
    </div>
</template>
<script setup>
import { reactive } from 'vue';
const state = reactive({
    goodForm: {

    },
    rules: {

    },
})
</script>
<style scoped>
.add {
    display: flex;
}

.add-container {
    flex: 1;
    height: 100%;
}

.avatar-uploader {
    width: 100px;
    height: 100px;
    color: #ddd;
    font-size: 30px;
}

.avatar-uploader-icon {
    display: block;
    width: 100%;
    height: 100%;
    border: 1px solid #e9e9e9;
    padding: 32px 17px;
}
</style>