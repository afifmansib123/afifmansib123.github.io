var customers = []

$(document).ready(function () {
    console.log("ready!");
    // load data
    $.ajax({
        url: "data.json"
    }).done(function (data) {
        //$(this).addClass("done");
        console.log("DONE",data)
        for(let d in data){
            // save the data record into our local variable
            customers.push(data[d])
            let dataStr = `<tr>
                <td>${data[d].name}</td>
                <td>${data[d].email}</td>
                <td>${data[d].phone}</td>
                <td>
                <button class="btn btn-danger btn-delete">Delete</button>
                </td>
            </tr>`
            $("#data-table tr:last").after(dataStr)
        }

        console.log(customers)
    });
});
$(document).on('click', '.btn-delete', function() {
    // get the parent row of the button that was clicked
    let row = $(this).closest('tr');
    // get the index of the row in the customers array
    let index = row.index() - 1; // -1 to account for the table header row
    // remove the customer from the array
    customers.splice(index, 1);
    // remove the row from the table
    row.remove();
  });
