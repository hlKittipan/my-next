import HomeIcon from "@components/Layout/Admin/Navbar/sidenavigation/icons/home";
import StatusIcon from "@components/Layout/Admin/Navbar/sidenavigation/icons/status";
import CreditsIcon from "@components/Layout/Admin/Navbar/sidenavigation/icons/credits";
import ArchivesIcon from "@components/Layout/Admin/Navbar/sidenavigation/icons/archives";
import SettingsIcon from "@components/Layout/Admin/Navbar/sidenavigation/icons/settings";
import DocumentationIcon from "@components/Layout/Admin/Navbar/sidenavigation/icons/documentation";
import BookIcon from "@components/Layout/Admin/Navbar/sidenavigation/icons/books";

const data = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/admin",
  },
  {
    title: "Status",
    icon: <StatusIcon />,
    link: "/admin/status",
  },
  {
    title: "Blog",
    icon: <BookIcon />,
    link: "/admin/blog",
  },
  {
    title: "Archives",
    icon: <ArchivesIcon />,
    link: "/admin/archives",
  },
  {
    title: "Credits",
    icon: <CreditsIcon />,
    link: "/admin/credits",
  },
  {
    title: "Settings",
    icon: <SettingsIcon />,
    link: "/admin/settings",
  },
  {
    title: "Documentation",
    icon: <DocumentationIcon />,
    link: "/admin/documentation",
  },
];

export default data;
