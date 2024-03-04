"use client";
import { useState } from "react";

type stateType = {
  show: boolean;
  text: string;
};

const Notification = ({ show, text }: stateType) => {
  const [state, setState] = useState<boolean>(false);
  if (state || show) {
    return (
      <div className="fixed bottom-0 right-0 py-10 px-6">
        <div className="px-12 py-4 border rounded text-center shadow-lg">
          <p>{text}</p>
        </div>
      </div>
    );
  }
  return;
};

export default Notification;
