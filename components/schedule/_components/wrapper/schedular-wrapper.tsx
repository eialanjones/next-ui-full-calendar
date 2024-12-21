import React from "react";
import SchedulerView from "../view/schedular-view";

export default function SchedulerWrapper() {
  return (
    <div className="w-full">
      <h1 className="tracking-tighter font-semibold text-8xl mb-10">Agenda de Eventos</h1>
      <SchedulerView />
    </div>
  );
}
