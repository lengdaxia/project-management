"use client";

import React, { useState } from "react";
import ProjectHeader from "../project-header";

type Props = {
  params: { id: string };
};

const Project = ({ params }: Props) => {
  const { id } = params;
  const [activeTab, setActiveTab] = useState("Board");
  const [isNewTaskOpen, setIsNewTaskOpen] = useState(false);

  return (
    <div className="">
      {/* Header */}
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* filter & search input $ etc.. */}

      {/* Board */}
    </div>
  );
};

export default Project;
