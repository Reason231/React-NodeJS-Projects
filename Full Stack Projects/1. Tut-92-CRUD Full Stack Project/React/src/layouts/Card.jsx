import { deleteApi } from "../services/api";

export const Card = ({
  dataList,
  setIsAdd,
  updatedTitle,
  updatedPost,
  setEditedId,
  fetchData
}) => {
  async function handleDelete(dataId) {
    try {
      if (window.confirm("Confirm Delete?")) {
        await deleteApi(dataId);
        await fetchData();
      }
    } catch (e) {
      console.log(`Error while deleting: ${e}`);
    }
  }

  function handleEdit(editedData) {
    setIsAdd(false);
    updatedTitle.current.value = editedData.title;
    updatedPost.current.value = editedData.body;
    setEditedId(editedData.id);
  }

  return (
    <main className="grid grid-cols-3 gap-6">
      {dataList.map((currData, index) => {
        const { title, body } = currData;

        return (
          <div
            key={currData.id}
            className="bg-cyan-800 w-[400px] min-h-[250px] border-l-4 border-l-white text-white flex flex-col gap-4 p-4"
          >
            <p>ID: {currData.id}</p>
            <p>Title: {title}</p>
            <p>News: {body}</p>

            <div className="flex gap-3">
              <button
                className="bg-green-500 text-black w-[70px]"
                onClick={() => handleEdit(currData)}
              >
                EDIT
              </button>
              <button
                className="bg-red-500 text-black w-[70px]"
                onClick={() => handleDelete(currData.id)}
              >
                DELETE
              </button>
            </div>
          </div>
        );
      })}
    </main>
  );
};
