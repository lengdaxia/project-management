"use client";

import React, { useState } from "react";
import ProjectHeader from "../project-header";
import BoardView from "../board-view";
import ListView from "../list-view";
import TimelineView from "../timeline-view";
import TableView from "../table-view";
import ModalNewTask from "@/components/ModalNewTask";

type Props = {
  params: { id: string };
};

const Project = ({ params }: Props) => {
  const { id } = params;
  console.log("ProjectId: ", id);

  const [activeTab, setActiveTab] = useState("Board");
  const [isNewTaskOpen, setIsNewTaskOpen] = useState(false);

  return (
    <div>
      <ModalNewTask
        isOpen={isNewTaskOpen}
        onClose={() => setIsNewTaskOpen(false)}
        id={id}
      />

      {/* Header */}
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Board */}
      {activeTab === "Board" && (
        <BoardView id={id} setIsNewTaskOpen={setIsNewTaskOpen} />
      )}

      {/* List */}
      {activeTab === "List" && (
        <ListView id={id} setIsModalNewTaskOpen={setIsNewTaskOpen} />
      )}

      {/* Timeline */}
      {activeTab === "Timeline" && (
        <TimelineView id={id} setIsModalNewTaskOpen={setIsNewTaskOpen} />
      )}

      {/* Table */}
      {activeTab === "Table" && (
        <TableView id={id} setIsModalNewTaskOpen={setIsNewTaskOpen} />
      )}
    </div>
  );
};

export default Project;
