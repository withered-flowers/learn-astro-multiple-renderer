<template>
  <table class="table">
    <thead>
      <tr>
        <th>User Id</th>
        <th>Title</th>
        <th>isCompleted</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="todo in todos" :key="todo.id">
        <td>{{ todo.id }}</td>
        <td>{{ todo.title }}</td>
        <td>{{ todo.completed }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ["todos"],
};
</script>

<style></style>
