import React from "react";
import "./Sidebar.scss";
import SidebarOption from "../SidebarOption/SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicOutlined from "@material-ui/icons/LibraryMusicOutlined";
import { useDataLayerValue } from "../../DataLayer";

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className="sidebar">
      <img
        className="__logo"
        src={
          "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
        }
      />
      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Liabrary" Icon={LibraryMusicOutlined} />
      <strong className="sidebar__title">Playlist</strong>
      <hr />

      {playlists?.items?.map((playlist) => (
        <SidebarOption key={playlist} title={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;
