export default function HomeReact(props) {
  return (
    <table class="table">
      <thead>
        <tr>
          <th>User Id</th>
          <th>Title</th>
          <th>isCompleted</th>
        </tr>
      </thead>
      <tbody>
        {props.todos.map(todo => {
          return (
            <tr>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.completed.toString()}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
