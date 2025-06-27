import { useEffect, useState, useRef } from "react";
import { getApi, postApi, putApi, deleteApi } from "./services/api";
import { Card } from "./layouts/Card";

const App = () => {
  const [dataList, setDataList] = useState([]);
  const [isAdd, setIsAdd] = useState(true);
  const [editedId, setEditedId] = useState(null);

  const updatedTitle = useRef("");
  const updatedPost = useRef("");

  // Fetch data from API
  const fetchData = async () => {
    const data = await getApi();
    setDataList(data);
  };

  // Load data on mount
  useEffect(() => {
    fetchData();
  }, []);

  // Add new task
  async function handleAdd() {
    try {
      const newItem = {
        title: updatedTitle.current.value,
        body: updatedPost.current.value,
      };

      await postApi(newItem);
      await fetchData();  // This ensures your React state is always in sync with what’s actually stored in MongoDB.

      updatedTitle.current.value = "";
      updatedPost.current.value = "";
    } catch (e) {
      console.log(e);
    }
  }

  // Edit existing task
  async function handleEditedbtn() {
    try {
      const updatedItem = {
        title: updatedTitle.current.value,
        body: updatedPost.current.value,
      };

      await putApi(editedId, updatedItem);
      await fetchData(); //This ensures your React state is always in sync with what’s actually stored in MongoDB.

      updatedTitle.current.value = "";
      updatedPost.current.value = "";
      setIsAdd(true);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <div className="bg-cyan-900 min-h-screen flex flex-col items-center gap-10">
        <nav className="flex gap-2 mt-10">
          <input
            placeholder="Add Title..."
            type="text"
            ref={updatedTitle}
          />
          <input
            type="text"
            placeholder="Add Post"
            ref={updatedPost}
          />
          <button
            className="bg-green-500"
            onClick={isAdd ? handleAdd : handleEditedbtn}
          >
            {isAdd ? "Add" : "Edit"}
          </button>
        </nav>

        <Card
          dataList={dataList}
          setDataList={setDataList}
          setIsAdd={setIsAdd}
          updatedPost={updatedPost}
          updatedTitle={updatedTitle}
          setEditedId={setEditedId}
          fetchData={fetchData}
        />
      </div>
    </>
  );
};

export default App;
