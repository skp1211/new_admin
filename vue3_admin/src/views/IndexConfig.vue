<!--IndexConfig.vue-->
<template>
    <el-card class="index-container">
        <div class="header">
            <el-button type="primary" size="small" icon="el-icon-plus" @click="handleAdd">增加</el-button>
            <el-popconfirm title="确定删除吗？" confirmButtonText='确定' cancelButtonText='取消' @confirm="handleDelete">
                <template #reference>
                    <el-button type="danger" size="small" icon="el-icon-delete">批量删除</el-button>
                </template>
            </el-popconfirm>
        </div>
        <el-table :data="state.tableData" tooltip-effect="dark" style="width: 100%">
            <el-table-column prop="configName" label="商品名称">
            </el-table-column>
            <el-table-column label="跳转链接">
                <template #default="scope">
                    <a target="_blank" :href="scope.row.redirectUrl">{{ scope.row.redirectUrl }}</a>
                </template>
            </el-table-column>
            <el-table-column prop="configRank" label="排序值" width="120">
            </el-table-column>
            <el-table-column prop="goodsId" label="商品编号" width="200">
            </el-table-column>
            <el-table-column prop="createTime" label="添加时间" width="200">
            </el-table-column>
            <el-table-column label="操作" width="100">
                <template #default="scope">
                    <a style="cursor: pointer; margin-right: 10px" @click="handleEdit(scope.row.configId)">修改</a>
                    <el-popconfirm title="确定删除吗？" confirmButtonText='确定' cancelButtonText='取消'
                        @confirm="handleDeleteOne(scope.row.configId)">
                        <template #reference>
                            <a style="cursor: pointer">删除</a>
                        </template>
                    </el-popconfirm>
                </template>
            </el-table-column>
        </el-table>
        <!--总数超过一页，再展示分页器-->
        <el-pagination background layout="prev, pager, next" :total="state.total" :page-size="state.pageSize"
            :current-page="state.currentPage" @current-change="changePage" />
    </el-card>
    <DialogAddGood ref='addGood' :reload="getIndexConfig" :type="state.type" :configType="state.configType" />
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from '@/utils/axios'
import { ElMessage } from 'element-plus'
import DialogAddGood from '@/components/DialogAddGood.vue'

// 首页配置类型参数
const configTypeMap = {
    hot: 3,
    new: 4,
    recommend: 5
}
const route = useRoute()
const state = reactive({
    loading: false,
    tableData: [], // 数据列表
    multipleSelection: [], // 选中项
    total: 0, // 总条数
    currentPage: 1, // 当前页
    pageSize: 10, // 分页大小
    type: 'add', // 操作类型
    configType: 3 // 3-(首页)热销商品 4-(首页)新品上线 5-(首页)为你推荐
})

const router = useRouter()
const addGood = ref(null)
// 监听路由变化
router.beforeEach((to) => {
    if (['hot', 'new', 'recommend'].includes(to.name)) {
        // 通过 to.name 去匹配不同路径下，configType 参数也随之变化。
        state.configType = configTypeMap[to.name]
        state.currentPage = 1
        getIndexConfig()
    }
})
// 初始化
onMounted(() => {
    state.configType = configTypeMap[route.name]
    getIndexConfig()
})
// 首页热销商品列表
const getIndexConfig = () => {
    state.loading = true
    axios.get('/indexConfigs', {
        params: {
            pageNumber: state.currentPage,
            pageSize: state.pageSize,
            configType: state.configType
        }
    }).then(res => {
        state.tableData = res.list
        state.total = res.totalCount
        state.currentPage = res.currPage
        state.loading = false
    })
}
const changePage = (val) => {
    state.currentPage = val
    getIndexConfig()
}
// 添加商品
const handleAdd = () => {
    state.type = 'add'
    addGood.value.open()
}
// 修改商品
const handleEdit = (id) => {
    state.type = 'edit'
    addGood.value.open(id)
}
// 选择项
const handleSelectionChange = (val) => {
    state.multipleSelection = val
}
// 删除
const handleDelete = () => {
    if (!state.multipleSelection.length) {
        ElMessage.error('请选择项')
        return
    }
    axios.post('/indexConfigs/delete', {
        ids: state.multipleSelection.map(i => i.configId)
    }).then(() => {
        ElMessage.success('删除成功')
        getIndexConfig()
    })
}
// 单个删除
const handleDeleteOne = (id) => {
    axios.post('/indexConfigs/delete', {
        ids: [id]
    }).then(() => {
        ElMessage.success('删除成功')
        getIndexConfig()
    })
}
</script>