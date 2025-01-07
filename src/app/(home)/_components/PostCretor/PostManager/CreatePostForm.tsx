import { Hammer } from "lucide-react";
import React from "react";

interface CreatePostFormProps {
  request: string;
  setRequest: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: () => void;
}

const CreatePostForm: React.FC<CreatePostFormProps> = ({
  request,
  setRequest,
  handleAdd,
}) => (
  <div className="mb-6">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
      <input
        type="text"
        value={request}
        onChange={(e) => setRequest(e.target.value)}
        placeholder="Trigger keyword"
        className="p-2 border border-gray-300 rounded-lg md:col-span-2"
      />
      <button
        onClick={() => {
          handleAdd();
          setRequest("");
        }}
        className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
      >
        <Hammer className="w-5 h-5 mr-2" />
        Create
      </button>
    </div>
  </div>
);
export default CreatePostForm;
