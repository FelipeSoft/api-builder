import { TabsInterval } from "@/types/TabsInterval";
import RoutesTab from "./RoutesTab";
import ControllersTab from "./ControllersTab";
import { EnvironmentTab } from "./EnvironmentTab";

const tabs = [
    {
        title: "Overview",
        element: <></>
    },
    {
        title: "Entities",
        element: <></>
    },
    {
        title: "Environment",
        element: <EnvironmentTab/>
    },
    {
        title: "Routes",
        element: <RoutesTab />
    },
    {
        title: "Controllers",
        element: <ControllersTab />
    },
    {
        title: "Middlewares",
        element: <></>
    },
    {
        title: "Validators",
        element: <></>
    },
    {
        title: "Database",
        element: <></>
    },
    {
        title: "Authentication",
        element: <></>
    },
    {
        title: "Security",
        element: <></>
    },
    {
        title: "Logs",
        element: <></>
    },
    {
        title: "Documentation",
        element: <></>
    },
    {
        title: "Error Handling",
        element: <></>
    }
]

export const renderTab = (currentTab: TabsInterval) => {
    return (
        <>{tabs[currentTab].element}</>
    )
}

export const renderTitle = (currentTab: TabsInterval) => {
    return (
        <>{tabs[currentTab].title}</>
    )
}