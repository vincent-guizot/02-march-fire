/** TODO LIST
 * 
 * SUMMARY
 * Buat lah aplikasi mengenai Todo List, dimana user dapat membuat Todo list tentang apa yang akan dikerjakan. Fitur dari aplikasi harus memiliki sistem CRUD -> Create Read Update Delete.
 * 
 * Berikut adalah contoh nya :
 * let todos = [
 *      {
 *          id : 1,
 *          task : "Malam minggu an",
 *          status : "done"
 *      },
 *      {
 *          id : 2,
 *          task : "Nugas dulu",
 *          status : "in progress"
 *      }
 * 
 * ]
 * 
 * TASKS
 * Buatlah 5 function :
 * 1. showTodos(todos)
 * Function akan menerima sebuah parameter berupa array of objects berisi todos. Tampilkan todo sesuai berikut :
 * Todo List
 * 1. [X] Malam minggu an
 * 2. [ ] Nugas dulu
 * 
 * =========================================
 * 2. createTodo(task)
 * Function akan menerima sebuah parameter string berupa task dari user. Ketika di input akan masuk ke dalam variable todos. Status automatically "in progress", id ter generate sendiri.
 * 
 * ========================================
 * 3. updateTodo(id,task)
 * Function akan menerima 2 parameter, berupa id dari task dan task yang akan di ganti dengan tipe data string.
 * 
 * 
 * =======================================
 * 4. deleteTodo(id)
 * Function akan menerima sebuah parameter berupa number dari id yang akan dihapus.
 * 
 * =======================================
 * 5. changeStatus(id)
 * Function akan menerima sebuah parameter berupa number dari id yang akan di ganti status. Jika status "done" maka akan di ganti menjadi "in progress", dan sebaliknya.
 * 
 */

let todos = [
    {
        id: 1,
        task: "Malam minggu an",
        status: "done"
    },
    {
        id: 2,
        task: "Nugas dulu",
        status: "in progress"
    }
]

const showTodos = todos => {
    todos.forEach(todo => {
        const { id, task, status } = todo;
        switch (status) {
            case 'done':
                console.log(`${id}. [x] ${task}`)
                break;
            case 'in progress':
                console.log(`${id}. [ ] ${task}`)
                break;
        }
    })
}
const createTodo = task => {
    let id = todos[todos.length - 1].id + 1;
    let status = 'in progress';

    let tempObj = {
        id,
        task,
        status
    }
    todos.push(tempObj)
    console.log(`"${task}" has been added, thanks!`)
}
const deleteTodo = id => {
    let temp = todos.filter(todo => todo.id !== id);
    console.log(`Id ${id} has been deleted!`)
    todos = [...temp]
}
const updateTodo = (id, task) => {
    let temp = todos.map(todo => {
        if (todo.id === id) {
            todo.task = task
        }
        return todo
    })
    todos = [...temp]
    console.log(`Id ${id} has been updated!`)
}
const changeStatus = id => {
    let temp = todos.map(todo => {
        if (todo.id === id) {
            if (todo.status === 'done') {
                todo.status = 'in progress'
            } else {
                todo.status = 'done'

            }
        }
        return todo
    })
    todos = [...temp]
    console.log(`Id ${id} status has been changed!`)
}

createTodo("Belajar buat latte")
createTodo("Belanja buah")
createTodo("Mampir ke rumah teman hehe")
deleteTodo(3)
deleteTodo(4)
updateTodo(5, "Jemput teman")
changeStatus(2)
changeStatus(5)
showTodos(todos)