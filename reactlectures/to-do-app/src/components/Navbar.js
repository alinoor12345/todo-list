import React from 'react'

function Navbar() {
  return (
    <section class="todo--navbar">
    <nav
      class="flex justify--between items-center container mx-auto p-medium"
    >
      <div>
        <h2>To<span>Do List</span></h2>
      </div>

      <div class="flex gap-medium items-center">
        <div>Completed</div>
        <div>Sign Up</div>
        <div>Sign In</div>
      </div>
    </nav>
  </section>
  )
}

export default Navbar