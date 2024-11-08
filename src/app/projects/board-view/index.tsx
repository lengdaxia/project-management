import { useGetTasksQuery, useUpdateTaskStatusMutation } from "@/state/api";
import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

type BoardProps = {
  id: string;
  setIsNewTaskOpen: (isOpen: boolean) => void;
};
const taskStatus = ["To Do", "Work In Progress", "Under Review", "Completed"];

const BoardView = ({ id, setIsNewTaskOpen }: BoardProps) => {
  const {
    data: tasks,
    isLoading,
    error,
  } = useGetTasksQuery({ projectId: Number(id) });
  console.log("BoardView: ", id, " numberId:", Number(id));

  const [updateTaskStatus] = useUpdateTaskStatusMutation();

  const moveTask = (taskId: number, toStatus: string) => {
    updateTaskStatus({
      taskId,
      status: toStatus,
    });
  };

  if (isLoading) {
    return <div className="">Loading...</div>;
  }

  if (error) {
    return <div className="">Failed to fetch tasks</div>;
  }

  return <DndProvider backend={HTML5Backend}></DndProvider>;
};

export default BoardView;
