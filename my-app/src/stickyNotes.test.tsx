
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { StickyNotes } from "./stickyNotes";
import { dummyNotesList } from "./constants"; 

describe("Create StickyNote", () => {
  test("renders create note form", () => {
    render(<StickyNotes />);

    const createNoteButton = screen.getByText("Create Note");
    expect(createNoteButton).toBeInTheDocument();
  });

  test("creates a new note", () => {
    render(<StickyNotes />);

    // Please make sure your sticky note has a title and content input field with the following placeholders.
    const initialNoteCount = dummyNotesList.length;

    const createNoteTitleInput = screen.getByPlaceholderText("Note Title");
    const createNoteContentTextarea = screen.getByPlaceholderText("Note Content");
    const createNoteButton = screen.getByText("Create Note");

    fireEvent.change(createNoteTitleInput, { target: { value: "New Note" } });
    fireEvent.change(createNoteContentTextarea, { target: { value: "Note content" } });
    fireEvent.click(createNoteButton);

    const notesGrid = screen.getByTestId("notes-grid");
    expect(notesGrid.children.length).toBe(initialNoteCount + 1);

    const newNoteTitle = screen.getByText("New Note");
    const newNoteContent = screen.getByText("Note content");

    expect(newNoteTitle).toBeInTheDocument();
    expect(newNoteContent).toBeInTheDocument();
  });

  test("updates a note title", async () => {
    render(<StickyNotes />);
    const createNoteTitleInput = screen.getByPlaceholderText("Note Title");
    const createNoteContentTextarea = screen.getByPlaceholderText("Note Content");
    const createNoteButton = screen.getByText("Create Note");

    fireEvent.change(createNoteTitleInput, { target: { value: "Old Title" } });
    fireEvent.change(createNoteContentTextarea, { target: { value: "Old Content" } });
    fireEvent.click(createNoteButton);

    const noteTitleElement = screen.getByText("Old Title");
    fireEvent.blur(noteTitleElement, { target: { innerText: "Updated Title" } });

    await waitFor(() => {
      expect(screen.getByText("Updated Title")).toBeInTheDocument();
      expect(screen.queryByText("Old Title")).not.toBeInTheDocument();
    });
  });

  test("updates a note content", async () => {
    render(<StickyNotes />);
    const createNoteTitleInput = screen.getByPlaceholderText("Note Title");
    const createNoteContentTextarea = screen.getByPlaceholderText("Note Content");
    const createNoteButton = screen.getByText("Create Note");

    fireEvent.change(createNoteTitleInput, { target: { value: "Title and content" } });
    fireEvent.change(createNoteContentTextarea, { target: { value: "Old content" } });
    fireEvent.click(createNoteButton);

    const noteContentElement = screen.getByText("Old content");
    fireEvent.blur(noteContentElement, { target: { innerText: "Updated Content" } });

    await waitFor(() => {
      expect(screen.getByText("Updated Content")).toBeInTheDocument();
      expect(screen.queryByText("Old content")).not.toBeInTheDocument();
    });
  });

  test("deletes a note", async () => {
    render(<StickyNotes />);
    const initialNoteCount = dummyNotesList.length;

    const createNoteTitleInput = screen.getByPlaceholderText("Note Title");
    const createNoteContentTextarea = screen.getByPlaceholderText("Note Content");
    const createNoteButton = screen.getByText("Create Note");

    fireEvent.change(createNoteTitleInput, { target: { value: "Want to delete" } });
    fireEvent.change(createNoteContentTextarea, { target: { value: "Note is deleted" } });
    fireEvent.click(createNoteButton);

    const noteToDelete = screen.getByText("Want to delete");
    expect(noteToDelete).toBeInTheDocument();

    const deleteButton = screen.getByTestId("delete-note-7");
    fireEvent.click(deleteButton);

    await waitFor(() => {
      expect(screen.queryByText("Want to delete")).not.toBeInTheDocument();
    });

    const notesGrid = screen.getByTestId("notes-grid");
    expect(notesGrid.children.length).toBe(initialNoteCount);
  });
});