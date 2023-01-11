import Todoitem from "./Todoitem" 

function Todolist () {
    return(
        <>
        <section class="container mx-auto">
      <form class="todo--input mx-auto flex" id="addTodo">
        <input class="todo--input--two" id="todo" type="text" placeholder="Add Todo" />
        <input class="todo--button p-medium" type="submit" value="Submit" />
      </form>
      <Todoitem/>
      </section>
           </>

    );   
    }
export default Todolist;