

function Todoitem () {
    return (
        <section>
        <ul class="todo--items mx-auto flex flex-col gap-small" id="todoItems">
        <li class="todo--item p-medium flex justify--between items-center">
          <span>working</span>
          <button class="delete--button p-small">X</button>
        </li>
        <li class="todo--item p-medium flex justify--between items-center">
          <span>cooking</span>
          <button class="delete--button p-small">X</button>
        </li>
        <li class="todo--item p-medium flex justify--between items-center">
          <span>shopping</span>
          <button class="delete--button p-small">X</button>
        </li>
      </ul>
      </section>
    )
}
 
export default Todoitem
    

