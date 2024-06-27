import { FileCog, FlaskConical, ListTree } from "lucide-react"
import { useState } from "react"
import { BasicSettings } from "./basic-settings";
import { ProcedureTree } from "./procedure-tree";
import MainLayout from "@/components/layouts/main-layout";
import ModuleLayout from "@/components/layouts/module-layout";

const Controllers = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <MainLayout>
            <ModuleLayout currentTab={4} titleTab="Controllers">
                <section className="w-full">
                    <nav className="flex items-center gap-8">
                        <div>
                            <button onClick={() => setSelectedTab(0)} className={`${selectedTab === 0 ? "text-blue-600" : "transition-all hover:text-neutral-800 dark:hover:text-neutral-200 text-neutral-500"} mx-4 mt-8 mb-4 font-semibold flex items-center gap-2`}>
                                <FileCog />Basic Settings
                            </button>
                            <div className={`${selectedTab === 0 ? "opacity-1" : "opacity-0"} transition-all w-full h-1 bg-blue-700`}></div>
                        </div>
                        <div>
                            <button onClick={() => setSelectedTab(1)} className={`${selectedTab === 1 ? "text-blue-600" : "transition-all hover:text-neutral-800 dark:hover:text-neutral-200 text-neutral-500"} mx-4 mt-8 mb-4 font-semibold flex items-center gap-2`}>
                                <ListTree />Procedure Tree
                            </button>
                            <div className={`${selectedTab === 1 ? "opacity-1" : "opacity-0"} transition-all w-full h-1 bg-blue-700`}></div>
                        </div>
                        <div>
                            <button onClick={() => setSelectedTab(2)} className={`${selectedTab === 2 ? "text-blue-600" : "transition-all hover:text-neutral-800 dark:hover:text-neutral-200 text-neutral-500"} mx-4 mt-8 mb-4 font-semibold flex items-center gap-2`}>
                                <FlaskConical />Unit Test
                            </button>
                            <div className={`${selectedTab === 2 ? "opacity-1" : "opacity-0"} transition-all w-full h-1 bg-blue-700`}></div>
                        </div>
                    </nav>
                    <div>
                        {selectedTab === 0 && <BasicSettings />}
                        {selectedTab === 1 && <ProcedureTree />}
                    </div>
                </section>
            </ModuleLayout>
        </MainLayout>
    )
}

export default Controllers;