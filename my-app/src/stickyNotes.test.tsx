import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { StickyNotes } from "./stickyNotes";

describe("Create StickyNote", () => {
  test("renders create note form", () => {
    render(<StickyNotes />);
    const createNoteButton = screen.getByText("Create Note");
    expect(createNoteButton).toBeInTheDocument();
  });

  test("creates a new note", () => {
    render(<StickyNotes />);
    // Please make sure your sticky note has a title and content input field with the following placeholders.
    const createNoteTitleInput = screen.getByPlaceholderText("Note Title");
    const createNoteContentTextarea = screen.getByPlaceholderText("Note Content");
    const createNoteButton = screen.getByText("Create Note");

    fireEvent.change(createNoteTitleInput, { target: { value: "New Note" } });
    fireEvent.change(createNoteContentTextarea, { target: { value: "Note content" } });
    fireEvent.click(createNoteButton);

    const newNoteTitle = screen.getByText("New Note");
    const newNoteContent = screen.getByText("Note content");

    expect(newNoteTitle).toBeInTheDocument();
    expect(newNoteContent).toBeInTheDocument();
  });

  test("reads notes", () => {
    render(<StickyNotes />);
    const createNoteTitleInput = screen.getByPlaceholderText("Note Title");
    const createNoteContentTextarea = screen.getByPlaceholderText("Note Content");
    const createNoteButton = screen.getByText("Create Note");

    fireEvent.change(createNoteTitleInput, { target: { value: "First Note" } });
    fireEvent.change(createNoteContentTextarea, { target: { value: "First note content" } });
    fireEvent.click(createNoteButton);

    fireEvent.change(createNoteTitleInput, { target: { value: "Second Note" } });
    fireEvent.change(createNoteContentTextarea, { target: { value: "Second note content" } });
    fireEvent.click(createNoteButton);

    const notesGrid = screen.getByTestId("notes-grid");
    expect(notesGrid.children.length).toBe(2);
    expect(screen.getByText("First Note")).toBeInTheDocument();
    expect(screen.getByText("Second Note")).toBeInTheDocument();
  });

  test("updating note title", async () => {
    render(<StickyNotes />);
    const createNoteTitleInput = screen.getByPlaceholderText("Note Title");
    const createNoteContentTextarea = screen.getByPlaceholderText("Note Content");
    const createNoteButton = screen.getByText("Create Note");

    fireEvent.change(createNoteTitleInput, { target: { value: "Old Title" } });
    fireEvent.change(createNoteContentTextarea, { target: { value: "Content" } });
    fireEvent.click(createNoteButton);

    const noteTitleElement = screen.getByText("Old Title");
    fireEvent.blur(noteTitleElement, { target: { innerText: "Updated Title" } });

    await waitFor(() => {
      expect(screen.getByText("Updated Title")).toBeInTheDocument();
      expect(screen.queryByText("Old Title")).not.toBeInTheDocument();
    });
  });

  test("updating note content", async () => {
    render(<StickyNotes />);
    const createNoteTitleInput = screen.getByPlaceholderText("Note Title");
    const createNoteContentTextarea = screen.getByPlaceholderText("Note Content");
    const createNoteButton = screen.getByText("Create Note");

    fireEvent.change(createNoteTitleInput, { target: { value: "Title with Content" } });
    fireEvent.change(createNoteContentTextarea, { target: { value: "Old Content" } });
    fireEvent.click(createNoteButton);

    const noteContentElement = screen.getByText("Old Content");
    fireEvent.blur(noteContentElement, { target: { innerText: "Updated Content" } });

    await waitFor(() => {
      expect(screen.getByText("Updated Content")).toBeInTheDocument();
      expect(screen.queryByText("Old Content")).not.toBeInTheDocument();
    });
  });

  test("deleting note", async () => {
    render(<StickyNotes />);
    const createNoteTitleInput = screen.getByPlaceholderText("Note Title");
    const createNoteContentTextarea = screen.getByPlaceholderText("Note Content");
    const createNoteButton = screen.getByText("Create Note");

    fireEvent.change(createNoteTitleInput, { target: { value: "Delete" } });
    fireEvent.change(createNoteContentTextarea, { target: { value: "Note deleted" } });
    fireEvent.click(createNoteButton);

    const noteToDelete = screen.getByText("Delete");
    expect(noteToDelete).toBeInTheDocument();

    const deleteButton = screen.getByTestId("delete-note-1");
    fireEvent.click(deleteButton);

    await waitFor(() => {
      expect(noteToDelete).not.toBeInTheDocument();
    });
  });
});