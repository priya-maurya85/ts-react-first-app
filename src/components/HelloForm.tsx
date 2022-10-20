import React from 'react'

const HelloForm = () => {
  return (
   <>
   <h1>This is getByRole testing</h1>
   <h2>testing name attributes</h2>
   <form>
    <label htmlFor='name'>First name</label>
   <input placeholder="fullname" type="text" id="name" value="Priya" onChange={()=> {}}/>
   <label htmlFor='textarea'>TextArea</label>
   <textarea id="text" name="textarea"></textarea>
   <select>
    <option value="typescript">TYpecript</option>
    <option value="hooks">Hooks</option>
    <option value="redux">Redux</option>
    <option value="javascript">Javascript</option>
   </select>
   <button type="button">Submit</button>
   <main aria-hidden="true">
    <button>Open dialog</button>
  </main>
  <span title="close">Close Modal</span>
  <img alt="Incredibles 2 Poster" src="/incredibles-2.png" />
  <div data-testid="customElement">
    </div>
   {/* <button type="button" aria-hidden="true">Reset</button> */}
   </form>
   </>
  )
}

export default HelloForm