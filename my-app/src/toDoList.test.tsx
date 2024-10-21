import { render, screen, fireEvent } from "@testing-library/react";
import { ToDoList } from "./toDoList";
import { dummyGroceryList } from "./constants";

/*Required tests:
Read: Are all the items in the list displayed on the screen
Is the number of items checked the same as shown in the title?
If your code does not handle a case/ handles the case unexpectedly, update your code.
Write test cases for as many cases as you can cover and then document all the cases you have tested. It is recommended that you cover edge cases like: Is the text entered in the form and the notes always the same? Can there be 0 sticky notes? Make sure all the cases pass with `npm test`.
*/ 

test("items in list on screen", () =>{
    render(<ToDoList />);

    dummyGroceryList.forEach(item => {
        const listItem = screen.getByText(item.name);
        expect(listItem).toBeInTheDocument(); 
      });

});

