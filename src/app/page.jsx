'use client'
import React, { useState } from "react";
import Image from "next/image";


export default function Home() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const Add = () => {
    if (text.trim() !== "") {
      setTasks([...tasks, text]);
      setText("");
      console.log("Task",text)
    }
  };

  const Edit = (index, newText) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = newText;
    setTasks(updatedTasks);
  };

  const Delete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const ClearAll = () => {
    setTasks([]);
  };

  return (
    <main className="flex min-h-screen items-center p-24 bg-gray-200">
      <div className="container mx-auto my-10">
        <div className="md:w-1/2 mx-auto">
          <div className="bg-white rounded-lg p-6">
            <h1 className="text-center text-4xl font-bold leading-10 mb-4 text-red-500">
              Todos
            </h1>
            <div className="flex items-center border-b-2 border-green-200 mb-4">
              <input
                type="text"
                className="w-full px-4 py-2 mr-2 border-gray-300"
                placeholder="New Todo"
                value={text}
                onChange={handleInputChange}
              />
              <button
                className="bg-blue-600 hover:bg-blue-800 text-sm text-white rounded py-2 px-4"
                onClick={Add}>
                Add
              </button>
            </div>
            <ul>
              {tasks.map((task, index) => (
                <li key={index} className="flex items-center">
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-gray-400 p-8 m-3 rounded"
                    value={task}
                    onChange={(e) => Edit(index, e.target.value)}
                  />
                 <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => Delete(index)}>
                    X
                  </button>
                </li>
              ))}
            </ul>
            <button
              className="w-full bg-red-600 hover:bg-red-800 text-white font-thin py-2 px-8 mt-4 rounded"
              onClick={ClearAll}>
              Clear All
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
