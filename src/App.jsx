import { useState, useRef } from "react"

function App() {
    let [todos, setTodos] = useState([])
    let inputRef = useRef()


    // for push data into empty arr!
    function addTodo(event) {
        event.preventDefault()
        if (inputRef.current.value === '') {
            alert('please enter todo')
        } else {
            todos.push(inputRef.current.value)
            setTodos([...todos])
            console.log(todos);
            inputRef.current.value = ''
        }
    }

    // delete button
    function deleteBtn(index) {
        todos.splice(index, 1)
        setTodos([...todos])
    }

    // edit button
    function editBtn(index) {
        let newVal = prompt('enter new todo')
        if (newVal && newVal.trim() !== '') {
            todos.splice(index, 1, newVal)
            setTodos([...todos])
        }
    }

    // reset button
    function resetBtn(){
        setTodos([])
    }

    // this is funtion return for html root id!
    return (
        <>
            <div className="container">
                <h1 className="text-center mt-5 text-light">TODO APP</h1>
                <form onSubmit={addTodo} className="container d-flex flex-column">
                    <input id="input" type="text" placeholder="Enter Your Todo..." ref={inputRef} />
                    <button className="btn btn-info mt-3 text-white fs-5 ">Add Todo</button>
                </form>
                <div className="container d-flex flex-column ">
                    <button onClick={resetBtn} className="btn btn-danger mt-3 text-white fs-5">delete all</button>
                </div>
                <div className="mt-3 container">
                    {todos.map((item, index) => (
                        <ul key={index} className="d-flex justify-content-between list align-items-center">
                            <li>{`${item.toUpperCase()}`}</li>
                            <div className="d-flex gap-2">
                                <button className="btn btn-danger" onClick={() => deleteBtn(index)}>delete</button>
                                <button className="btn btn-primary" onClick={() => editBtn(index)}>edit</button>
                            </div>
                        </ul>
                    ))}
                </div>
            </div>
        </>
    )
}

export default App



// import { useState, useRef } from "react"

// function App() {
//   let [todos, SetTodos] = useState([]);
//   const inputRef = useRef()

//   function addTodo(event){
//     event.preventDefault()
//     let newTodo = inputRef.current.value
//     SetTodos([...todos, newTodo])
//     inputRef.current.value = ''
//   }

//   function deleteBtn(index){
//     todos.splice(index,1)
//     SetTodos([...todos])
//   }

//   function editBtn(index){
//     let ubdateVal = prompt('enter new val')
//     todos.splice(index, 1 , ubdateVal)
//     SetTodos([...todos])
//     // inputRef.current.value = ''
//   }

//   return (
//     <>
//       <div>
//         <form>
//           <input type="text" placeholder="Enter Todo" ref={inputRef}/>
//           <button onClick={addTodo}>Add Todo</button>
//         </form>
//         <div>
//           <ul>{todos.map((item, index) => (
//             <div key={index}>
//               <li>{item}</li>
//               <button onClick={() => deleteBtn(index)}>Delete</button>
//               <button onClick={() => editBtn(index)}>Edit</button>
//             </div>
//           ))}</ul>
//         </div>
//       </div>
//     </>
//   )
// }

// export default App





// // javascript destucurting practice

// // let users = {
// //   usernmae: 'haseeb ur rehman js',
// //   email : 'haseeb@gamil.com',
// //   phoneNumber : +923167979839,
// //   isLoggedIn : true
// // }

// // let [email, usernmae, phoneNumber,isLoggedIn] = users

// // console.log(users);


