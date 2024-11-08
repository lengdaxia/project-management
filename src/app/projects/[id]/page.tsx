"use client";

import React, { useState } from "react";
import ProjectHeader from "../project-header";
import BoardView from "../board-view";

type Props = {
  params: { id: string };
};

const Project = ({ params }: Props) => {
  const { id } = params;
  console.log("ProjectId: ", id);

  const [activeTab, setActiveTab] = useState("Board");
  const [isNewTaskOpen, setIsNewTaskOpen] = useState(false);

  return (
    <div className="">
      {/* Header */}
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Board */}
      {activeTab === "Board" && (
        <BoardView id={id} setIsNewTaskOpen={setIsNewTaskOpen} />
      )}
    </div>
  );
};

export default Project;
