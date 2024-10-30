import { useEffect, useState } from "react";
import "./App.css";
import SearchBox from "./components/SearchBox";
import NoteList from "./components/NoteList";
import Modal from "./components/Modal";
import axios from "axios";
import DeleteModal from "./components/DeleteModal";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [id, setId] = useState("");
  const [formType, setFormType] = useState("Create");
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  let [isOpen, setIsOpen] = useState(false);
  let [isOpen2, setIsOpen2] = useState(false);
  const [form, setForm] = useState({
    title: "",
    content: "",
  });

  const fetchNotes = async () => {
    const response = await axios.get("http://localhost:3000/api/notes");
    setNotes(response.data);
  };

  const addNote = async () => {
    if (!form.title && !form.content) {
      alert("Please fill in the form");
      return;
    }
    try {
      setLoading(true);
      await axios.post("http://localhost:3000/api/notes", form);
      setForm({
        title: "",
        content: "",
      });
      setIsOpen(false);
      fetchNotes();
    } catch (error) {
      console.error(error);
      alert(error);
    } finally {
      setLoading(false);
      setForm({
        title: "",
        content: "",
      });
    }
  };

  const handleEditInitial = (data) => {
    setId(data._id);
    setForm({ ...form, title: data.title, content: data.content });
    setFormType("Edit");
    setIsOpen(true);
  };

  const handleDeleteInitial = (data) => {
    setId(data._id);
    setIsOpen2(true);
  };

  const editNote = async () => {
    try {
      setLoading(true);
      await axios.put(`http://localhost:3000/api/notes/${id}`, form);
      setForm({
        title: "",
        content: "",
      });
      setFormType("Create");
      setIsOpen(false);
      fetchNotes();
    } catch (error) {
      console.error(error);
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteNote = async () => {
    try {
      setLoading(true);
      await axios.delete(`http://localhost:3000/api/notes/${id}`);
      setIsOpen2(false);
      fetchNotes();
    } catch (error) {
      console.error(error);
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <main className="py-20">
      <SearchBox
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <NoteList
        notes={notes}
        editNote={handleEditInitial}
        deleteNote={handleDeleteInitial}
      />
      <Modal
        form={form}
        setForm={setForm}
        addNote={addNote}
        editNote={editNote}
        loading={loading}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        formType={formType}
        setFormType={setFormType}
      />
      <DeleteModal
        isOpen={isOpen2}
        setIsOpen={setIsOpen2}
        deleteNote={deleteNote}
        loading={loading}
      />
    </main>
  );
}

export default App;
