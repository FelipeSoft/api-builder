import MainLayout from "@/components/layouts/main-layout";
import ModuleLayout from "@/components/layouts/module-layout";
import { TabsInterval } from "@/types/TabsInterval";
import { useRouter } from "next/router";
import { useState } from "react";

const Overview = () => {
    return (
        <MainLayout>
            <ModuleLayout currentTab={0} titleTab="Overview">
                ...
            </ModuleLayout>
        </MainLayout>
    )
}

export default Overview;