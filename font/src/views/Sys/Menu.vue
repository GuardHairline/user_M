<template>
  <div class="page-container">
    <!--工具栏-->
    <div class="toolbar" style="float:left;padding-top:10px;padding-left:15px;">
      <el-form :inline="true" :model="filters" :size="size">
        <el-form-item>
          <el-input v-model="filters.name" placeholder="名称"></el-input>
        </el-form-item>
        <el-form-item>
          <kt-button icon="fa fa-search" :label="$t('action.search')" perms="sys:menu:view" type="primary"
            @click="findTreeData(null)" />
        </el-form-item>
        <el-form-item>
          <kt-button icon="fa fa-plus" :label="$t('action.add')" perms="sys:menu:add" type="primary"
            @click="handleAdd" />
        </el-form-item>
      </el-form>
    </div>
    <!--表格树内容栏-->
    <el-table :data="tableTreeDdata" stripe size="mini" style="width: 100%;" rowKey="id" v-loading="loading"
      element-loading-text="$t('action.loading')">
      <!-- <el-table-column
        prop="id" header-align="center" align="center" width="100" label="ID">
      </el-table-column> -->
      <table-tree-column prop="name" header-align="center" treeKey="id" width="180" label="名称">
      </table-tree-column>
      <el-table-column header-align="center" align="center" label="图标">
        <template slot-scope="scope">
          <i :class="scope.row.icon || ''"></i>
        </template>
      </el-table-column>
      <el-table-column prop="type" header-align="center" align="center" label="类型">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.type === 0" size="small">目录</el-tag>
          <el-tag v-else-if="scope.row.type === 1" size="small" type="success">菜单</el-tag>
          <el-tag v-else-if="scope.row.type === 2" size="small" type="info">按钮</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="parentName" header-align="center" align="center" width="120" label="上级菜单">
      </el-table-column>
      <el-table-column prop="url" header-align="center" align="center" width="150" :show-overflow-tooltip="true"
        label="菜单URL">
      </el-table-column>
      <el-table-column prop="perms" header-align="center" align="center" width="150" :show-overflow-tooltip="true"
        label="授权标识">
      </el-table-column>
      <el-table-column prop="orderNum" header-align="center" align="center" label="排序">
      </el-table-column>
      <el-table-column fixed="right" header-align="center" align="center" width="185" :label="$t('action.operation')">
        <template slot-scope="scope">
          <kt-button icon="fa fa-edit" :label="$t('action.edit')" perms="sys:menu:edit"
            @click="handleEdit(scope.row)" />
          <kt-button icon="fa fa-trash" :label="$t('action.delete')" perms="sys:menu:delete" type="danger"
            @click="handleDelete(scope.row)" />
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import KtButton from "@/views/Core/KtButton";
import TableTreeColumn from "@/views/Core/TableTreeColumn";
import PopupTreeInput from "@/components/PopupTreeInput";
export default {
  components: {
    PopupTreeInput,
    KtButton,
    TableTreeColumn
  },
  data() {
    return {
      size: "small",
      loading: false,
      filters: {
        name: ""
      },
      tableTreeDdata: [],
      dialogVisible: false,
      menuTypeList: ["目录", "菜单", "按钮"],
      dataForm: {
        id: 0,
        type: 1,
        name: "",
        parentId: 0,
        parentName: "",
        url: "",
        perms: "",
        orderNum: 0,
        icon: "",
        iconList: []
      },
      dataRule: {
        name: [{ required: true, message: "菜单名称不能为空", trigger: "blur" }]
      },
      popupTreeData: [],
      popupTreeProps: {
        label: "name",
        children: "children"
      }
    };
  },
  methods: {
    // 获取数据
    findTreeData: function () {
      this.loading = true;
      this.$api.menu.findMenuTree({ 'name': this.filters.name }).then(res => {
        this.tableTreeDdata = res.data;
        this.popupTreeData = this.getParentMenuTree(res.data);
        this.loading = false;
      });
    },
    // 获取上级菜单树
    getParentMenuTree: function (tableTreeDdata) {
      let parent = {
        parentId: 0,
        name: "顶级菜单",
        children: tableTreeDdata
      };
      return [parent];
    },
    // 菜单树选中
    handleTreeSelectChange(data, node) {
      this.dataForm.parentId = data.id;
      this.dataForm.parentName = data.name;
    },
    // 图标选中
    iconActiveHandle(iconName) {
      this.dataForm.icon = iconName;
    },
    // 表单提交
    submitForm() {
      this.$refs["dataForm"].validate(valid => {
        if (valid) {
          this.$confirm("确认提交吗？", "提示", {}).then(() => {
            this.editLoading = true;
            let params = Object.assign({}, this.dataForm);
            this.$api.menu.save(params).then(res => {
              this.editLoading = false;
              if (res.code == 200) {
                this.$message({ message: "操作成功", type: "success" });
                this.$refs["dataForm"].resetFields();
                this.dialogVisible = false;
              } else {
                this.$message({
                  message: "操作失败, " + res.msg,
                  type: "error"
                });
              }
              this.findTreeData();
            });
          });
        }
      });
    }
  },
  mounted() {
    this.findTreeData();
  }
};
</script>

<style scoped></style>