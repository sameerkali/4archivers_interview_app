import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon
} from "@heroicons/react/24/solid";
// import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <Card className="h-[100vh] w-full max-w-[6rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          <img src="/recycle.png" />
        </Typography>
      </div>
      <List>
        {/* <Link to="/chart"> */}
        <ListItem className="w-10">
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>
        </ListItem>
        {/* </Link> */}
        <ListItem className="w-10">
          <ListItemPrefix>
            <ShoppingBagIcon className="h-5 w-5" />
          </ListItemPrefix>
        </ListItem>
        <ListItem className="w-10">
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
        </ListItem>
        <ListItem className="w-10">
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
        </ListItem>
        <ListItem className="w-10">
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
        </ListItem>
        <ListItem className="w-10">
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
        </ListItem>
        <ListItem className="w-10 mt-[18rem]">
          <ListItemPrefix className="">
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
        </ListItem>
      </List>
    </Card>
  );
}
