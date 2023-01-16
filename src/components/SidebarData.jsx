import { QueryStats, Dashboard, Home, Mail, LocationOn, People } from '@mui/icons-material';

//* Title, icon, link where the icon brings to
export const SidebarData = [
    {
        title: "Home",
        icon: <Home/>,
        link: "/home",
    },
    {
        title: "Mailbox",
        icon: <Mail />,
        link: "/mailbox",
    },
    {
        title: "Dashboard",
        icon: <Dashboard />,
        link: "/dashboard",
    },
    {
        title: "Analytics",
        icon: <QueryStats />,
        link: "/analytics",
    },
    {
        title: "Location",
        icon: <LocationOn />,
        link: "/location",
    },
    {
        title: "Friends",
        icon: <People/>,
        link: "/valoration",
    },
];
