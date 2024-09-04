import { addPost, deletePost } from '@/actions/postActions';

const NewPost = () => {
  return (
    <div>
      <form action={addPost}>
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="description" placeholder="Description" />
        <input type="text" name="userId" placeholder="User id" />
        <button type="submit">Create</button>
      </form>

      <form action={deletePost}>
        <input type="text" name="id" placeholder="Id" />
        <button type="submit">Delete</button>
      </form>
    </div>
  );
};

export default NewPost;
