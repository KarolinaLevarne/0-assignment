

<template>
  <div>
    <table>
  <tr>
    <th>ID</th>
    <th>Assignee</th>
    <th>Due Date Time</th>
    <th>Description</th>
  </tr>
  <tr v-for="tableRow in $store.state.tableRows" :key="tableRow.id">
      <td>{{tableRow.id}}</td>
      <td>{{tableRow.assignee}}</td>
      <td>{{getHumanDate(tableRow.dueDateTime)}}</td>
      <td>{{tableRow.description}}</td>
</tr>
</table>
<button @click='addTableRow()' >Add New Row</button>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  methods:{
    addTableRow: function () { 
      this.counter++;
      this.$store.dispatch('loadData');
      
   },
   getHumanDate : function (date) {
                return moment(date).format('dddd, MMMM Do YYYY, h:mm:ss a');
            }
	}
      }

</script>

<style scoped>
table, th, td {
  border: 1px solid;
}

table {
  width: 100%;
}
</style>
