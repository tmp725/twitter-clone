import { ReactNode } from "react";
import "./SidebarData.css";

type Props = {
  text: string;
  icon: ReactNode;
  active?: boolean;
};

export const SidebarData = ({ text, icon, active }: Props): JSX.Element => {
  return (
    <div className="mb-5">
      <div className={`sidebarData ${active && "twitter-color"}`}>
        <span className="mr-5">{icon}</span>
        <span className="font-black">{text}</span>
      </div>
    </div>
  );
};
