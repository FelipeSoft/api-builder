import MainLayout from "@/components/layouts/main-layout";
import { renderTab, renderTitle } from "@/components/tabs";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { TabsInterval } from "@/types/TabsInterval";
import { CircleX, Database, EarthLock, Ellipsis, FileClock, FileText, Grid2x2Check, Joystick, KeyRound, Layers, PanelsTopLeft, PersonStanding, Route, Save, ShieldX, SlidersHorizontal, TicketCheck, Workflow } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


const ApiModule = () => {
    const router = useRouter();
    const { api } = router.query;
    const [tab, setTab] = useState<TabsInterval>(0);

    return (
        <MainLayout>
            <section className="w-full flex gap-8">
                <aside className="w-[200px] relative">
                    <nav className="sticky top-[88px] pb-10 flex flex-col w-full gap-2 pr-4">
                        <h2 className="text-xs text-neutral-500 ml-2.5">Core</h2>
                        <button onClick={() => setTab(0)} className="flex items-center gap-2 w-full dark:hover:bg-neutral-800 hover:bg-neutral-100 h-full py-1.5 px-2 rounded-md">
                            <PanelsTopLeft />
                            Overview
                        </button>
                        <button onClick={() => setTab(1)} className="flex items-center gap-2 w-full dark:hover:bg-neutral-800 hover:bg-neutral-100 h-full py-1.5 px-2 rounded-md">
                            <Workflow />
                            Entities
                        </button>
                        <button onClick={() => setTab(2)} className="flex items-center gap-2 w-full dark:hover:bg-neutral-800 hover:bg-neutral-100 h-full py-1.5 px-2 rounded-md">
                            <SlidersHorizontal />
                            Environment
                        </button>
                        <hr className="dark:border-neutral-800 border-neutral-300" />
                        <h2 className="text-xs text-neutral-500 ml-2.5 mt-2">Application</h2>
                        <button onClick={() => setTab(3)} className="flex items-center gap-2 w-full dark:hover:bg-neutral-800 hover:bg-neutral-100 h-full py-1.5 px-2 rounded-md">
                            <Route />
                            Routes
                        </button>
                        <button onClick={() => setTab(4)} className="flex items-center gap-2 w-full dark:hover:bg-neutral-800 hover:bg-neutral-100 h-full py-1.5 px-2 rounded-md">
                            <Joystick />
                            Controllers
                        </button>
                        <button onClick={() => setTab(5)} className="flex items-center gap-2 w-full dark:hover:bg-neutral-800 hover:bg-neutral-100 h-full py-1.5 px-2 rounded-md">
                            <Layers />
                            Middlewares
                        </button>
                        <button onClick={() => setTab(6)} className="flex items-center gap-2 w-full dark:hover:bg-neutral-800 hover:bg-neutral-100 h-full py-1.5 px-2 rounded-md">
                            <TicketCheck />
                            Validators
                        </button>
                        <hr className="dark:border-neutral-800 border-neutral-300" />
                        <h2 className="text-xs text-neutral-500 ml-2.5 mt-2">Access & Data</h2>
                        <button onClick={() => setTab(7)} className="flex items-center gap-2 w-full dark:hover:bg-neutral-800 hover:bg-neutral-100 h-full py-1.5 px-2 rounded-md">
                            <Database />
                            Database
                        </button>
                        <button onClick={() => setTab(8)} className="flex items-center gap-2 w-full dark:hover:bg-neutral-800 hover:bg-neutral-100 h-full py-1.5 px-2 rounded-md">
                            <KeyRound />
                            Authentication
                        </button>
                        <button onClick={() => setTab(9)} className="flex items-center gap-2 w-full dark:hover:bg-neutral-800 hover:bg-neutral-100 h-full py-1.5 px-2 rounded-md">
                            <EarthLock />
                            Security
                        </button>
                        <hr className="dark:border-neutral-800 border-neutral-300" />
                        <h2 className="text-xs text-neutral-500 ml-2.5 mt-2">Assistants</h2>
                        <button onClick={() => setTab(10)} className="flex items-center gap-2 w-full dark:hover:bg-neutral-800 hover:bg-neutral-100 h-full py-1.5 px-2 rounded-md">
                            <FileClock />
                            Logs
                        </button>
                        <button onClick={() => setTab(11)} className="flex items-center gap-2 w-full dark:hover:bg-neutral-800 hover:bg-neutral-100 h-full py-1.5 px-2 rounded-md">
                            <FileText />
                            Documentation
                        </button>
                        <button onClick={() => setTab(12)} className="flex items-center gap-2 w-full dark:hover:bg-neutral-800 hover:bg-neutral-100 h-full py-1.5 px-2 rounded-md">
                            <ShieldX />
                            Error Handling
                        </button>
                    </nav>
                </aside>
                <div className="flex flex-col w-full">
                    <article className="w-full">
                        <div className="border-b dark:border-b-neutral-800 border-b-neutral-300 pb-2 flex items-center justify-between">
                            <h1 className="font-semibold text-lg">{renderTitle(tab)}</h1>
                            <div className="flex items-center gap-4">
                                <Button className="flex gap-2" disabled variant={"ghost"} ><Save />Save</Button>
                                <Button className="flex gap-2" disabled variant={"destructive"} >
                                    <div className="flex items-center gap-1">
                                        <CircleX />Errors
                                    </div>
                                    <div>|</div>
                                    <span>0</span>
                                </Button>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button className="flex gap-2" variant={"ghost"} size={"icon"} ><Ellipsis /></Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>More Options</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                        </div>
                    </article>
                    <article className="w-full flex flex-col">
                        {renderTab(tab)}
                    </article>
                </div>
            </section>
        </MainLayout>
    )
}

export default ApiModule;