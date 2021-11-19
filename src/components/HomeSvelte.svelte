<script>
  export let todos;
</script>

<table class="table">
  <thead>
    <tr>
      <th>User Id</th>
      <th>Title</th>
      <th>isCompleted</th>
    </tr>
  </thead>
  <tbody>
    {#each todos as todo}
      <tr>
        <td>{todo.id}</td>
        <td>{todo.title}</td>
        <td>{todo.completed}</td>
      </tr>
    {/each}
  </tbody>
</table>
