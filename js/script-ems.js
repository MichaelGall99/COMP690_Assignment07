// CREATE AN ARRAY OF EMPLOYEES
let storage
let employee
let employees = []
let count = 0

// GET DOM ELEMENTS
let empCount      = document.querySelector('#empCount');
let tbodyElements = document.getElementsByTagName('tbody')

// GET EMPLOYEES FROM STORAGE OR EMPTY STRING IF STORAGE IS EMPTY
storage = JSON.parse(localStorage.getItem('employees')) || ''
//console.log(`localStorage (employees) at startup: ${storage}`)

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
if (storage.length === 0) {
    // PREPOPULATE EMPLOYEES ARRAY WITH 5 SAMPLE EMPLOYEES
    employees = [
        [10000014, 'Bill Melater', 7500, 'bill.melater@sumco.com', 'Sales'],
        [10000002, 'Ima Biggin', 7704, 'ima.biggin@sumco.com', 'Administrative'],
        [10000123, 'Phil Meup', 7792, 'phil.meup@sumco.com', 'Engineering'],
        [10000085, 'Sue Mee', 7643, 'sue.mee@sumco.com', 'Quality Assurance'],
        [10000007, 'Ben Dover', 7532, 'ben.dover@sumco.com', 'Marketing']
    ]

    // SORT EMPLOYEES ARRAY
    employees = employees.sort(function(a,b){ return a[1] > b[1] ? 1 : -1; });

    // ADD EMPLOYEES TO STORAGE
    localStorage.setItem('employees', JSON.stringify(employees))
    //console.log(`localStorage (employees) after 5 default employees added: ${JSON.parse(localStorage.getItem('employees'))}`)
}

// IF STORAGE IS NOT EMPTY, CONVERT TO ARRAY AND STORE IN EMPLOYEES VARIABLE
if (storage.length > 0) {
    employees = JSON.parse(localStorage.getItem('employees'))
}

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
// Display employee (either from localStorage or using the 5 sample employees) upon startup
buildGrid()


// ADD EMPLOYEE
addForm.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    let empID       = document.querySelector('#id').value;
    let empName     = document.querySelector('#name').value;
    let empExt      = document.querySelector('#extension').value;
    let empEmail    = document.querySelector('#email').value;
    let empDept     = document.querySelector('#department').value;

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    employee = [ Number(empID), empName, Number(empExt), empEmail, empDept ]

    let html = 
        `
        <tr>
        <td>${empID}</td>
        <td>${empName}</td>
        <td>${empExt}</td>
        <td>${empEmail}</td>
        <td>${empDept}</td>
        <td><button class="btn btn-sm btn-danger delete">X</button>
        </tr>
        `

    tbodyElements[0].innerHTML = html
    

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    if (empID !== '' &&
        empName !== '' &&
        empExt !== '' &&
        empEmail !== '' &&
        empDept !== '') {

        // ADD EMPLOYEE TO ARRAY
        employees.push(employee)

        // SORT EMPLOYEES ARRAY
        employees = employees.sort(function(a,b){ return a[1] > b[1] ? 1 : -1; });

        // ADD EMPLOYEE TO STORAGE
        localStorage.setItem('employees', JSON.stringify(employees))
        //console.log(`localStorage(employees) after new employee added: ${JSON.parse(localStorage.getItem('employees'))}`)
    }

    // BUILD THE GRID
    buildGrid()

    // RESET THE FORM
    document.querySelector('#addForm').reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.querySelector('#id').focus();

    // DISPLAY THE CURRENT COUNTER
    empCount.value = `(${count})`;
});


// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM DELETE
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this employee?')) {
            
            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            let rowIdx = e.target.parentElement.parentElement.rowIndex
            //console.log(`rowIdx = ${rowIdx}`)

            // REMOVE EMPLOYEE FROM ARRAY
            let deleteId = Number(tbodyElements.item(0).rows[rowIdx-1].cells[0].innerHTML)
            //console.log(`Deleted Row's empID value: ${deleteId}`)

            // DELETE TABLE ROW MOVED HERE
            empTable.deleteRow(rowIdx);

            // DELETE FIRST OCCURANCE OF empID TO DELETE FROM THE ARRAY
            let idx = employees.findIndex((value, index, array) => {
                return value[0] === deleteId
            })

            //console.log(`idx of ARRAY delete record = ${idx}`)
            employees.splice(idx, 1)
            //console.log(`employees array after empID ${deleteId} record deleted from array: ${employees}`)

            // SAVE UPDATED EMPLOYEES ARRAY TO LOCALSTORAGE
            localStorage.setItem('employees', JSON.stringify(employees))

            // BUILD THE GRID
            buildGrid()

            // DISPLAY THE CURRENT COUNTER
            empCount.value = `(${count})`;
        }
    }
});


// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    tbodyElements[0].innerHTML = ''

    // REBUILD THE TBODY FROM SCRATCH
    let html = ''

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    count = employees.length
    if (employees.length > 0) {
        // SORT THE MULITIDIMENSIONAL ARRAY EMPLOYEES ON THE NAME COLUMN
        employees = employees.sort(function(a,b){ return a[1] > b[1] ? 1 : -1; });
        //console.log(`sorted employees = ${employees}`)

        employees.forEach((emp) => {
            html += 
            `
                <tr>
                <td>${emp[0]}</td>
                <td>${emp[1]}</td>
                <td>${emp[2]}</td>
                <td>${emp[3]}</td>
                <td>${emp[4]}</td>
                <td><button class="btn btn-sm btn-danger delete">X</button>
                </tr>
            `
        })
    
        // BIND THE TBODY TO THE EMPLOYEE TABLE
        tbodyElements[0].innerHTML = html
    }

    // DISPLAY THE CURRENT COUNTER
    empCount.value = `(${count})`;
}