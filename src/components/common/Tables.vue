
<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column type="selection" width="55"> </el-table-column>
    <el-table-column :label="item.title" width="180" v-for="(item,index) in columns" v-bind:key="index">
      <template #default="scope">
        <i class="el-icon-time" v-if="item.icon"></i>
        <span style="margin-left: 10px" >{{ scope.row[item.field] }}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template #default="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button
        >
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
setup() {
  const columns=[{
    title:"日期",
    field:"date",
    icon:'el-icon-time'
  },
  {
    title:"姓名",
    field:"name",
  }
  ,
  {
    title:"地址",
    field:"address",
  }
  
  ]
  const tableData= [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ]
      function handleEdit(index, row) {
        console.log(index, row);
         }
      function handleDelete(index, row) {
        console.log(index, row);
         }
  return {
      columns,
      tableData,
      handleEdit,
      handleDelete


  }
}

 
 
};
</script>

<style>
</style>
