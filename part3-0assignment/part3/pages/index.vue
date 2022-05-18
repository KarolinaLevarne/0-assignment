<template>
  <div>
    <table>
  <tr>
    <th>id</th>
    <th>assignee</th>
    <th>dueDateTime</th>
    <th>description</th>
  </tr>
  <tr v-for="tableRow in $store.state.tableRows" :key="tableRow.id">
      <td>{{tableRow.id}}</td>
      <td>{{tableRow.assignee}}</td>
      <td>{{tableRow.dueDateTime}}</td>
      <td>{{tableRow.description}}</td>
</tr>
</table>
<button @click='addTableRow()' >Add New Row</button>
  </div>
</template>

<script>
export default {
  methods:{
    addTableRow: function () { 
      this.counter++;
      this.$store.dispatch('loadData');
      
   }
	}
      }

</script>
