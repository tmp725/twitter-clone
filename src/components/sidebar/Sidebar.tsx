import { Button } from "@mantine/core";
import { SidebarData } from "./SidebarData";
import {
  AiFillHome,
  AiOutlineBell,
  AiOutlineMail,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsBookmark, BsTwitter } from "react-icons/bs";
import { RiFileList2Line } from "react-icons/ri";
import { CgMoreO, CgProfile } from "react-icons/cg";
import "./Sidebar.css";

export const Sidebar = (): JSX.Element => {
  return (
    <div className="sidebar px-5 border-right">
      <BsTwitter size={25} className="twitter-color mt-5 mb-5 ml-5" />
      <SidebarData text="ホーム" icon={<AiFillHome />} active />
      <SidebarData text="話題を検索" icon={<AiOutlineSearch />} />
      <SidebarData text="通知" icon={<AiOutlineBell />} />
      <SidebarData text="メッセージ" icon={<AiOutlineMail />} />
      <SidebarData text="ブックマーク" icon={<BsBookmark />} />
      <SidebarData text="リスト" icon={<RiFileList2Line />} />
      <SidebarData text="プロフィール" icon={<CgProfile />} />
      <SidebarData text="もっとみる" icon={<CgMoreO />} />
      <Button
        className="mt-5 w-full"
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        styles={(theme) => ({
          root: {
            backgroundColor: "#00acee",
            border: 0,
            borderRadius: 30,
            height: 40,
            paddingLeft: 20,
            paddingRight: 20,
            "&:hover": {
              backgroundColor: theme.fn.darken("#00acee", 0.05),
            },
          },

          leftIcon: {
            marginRight: 15,
          },
        })}
      >
        ツイートする
      </Button>
    </div>
  );
};
