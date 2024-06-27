import Link from "next/link";
import { CircleX, Database, EarthLock, Ellipsis, FileClock, FileText, Joystick, KeyRound, Layers, PanelsTopLeft, Route, Save, ShieldX, SlidersHorizontal, TicketCheck, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useRouter } from "next/router";
import { useState } from "react";
import { TabsInterval } from "@/types/TabsInterval";

type Props = {
    currentTab: TabsInterval;
    titleTab: string;
    children: React.ReactNode;
}

const ModuleLayout = ({ currentTab, titleTab, children }: Props) => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <section className="w-full flex gap-8">
            <aside className="w-[200px] relative">
                <nav className="sticky top-[88px] pb-10 flex flex-col w-full gap-2 pr-4">
                    <h2 className="text-xs text-neutral-500 ml-2.5">Core</h2>
                    <Link href={`/modules/overview?id=${id}`} className={`${currentTab === 0 && "dark:bg-neutral-800 bg-neutral-100"} flex items-center gap-2 w-full dark:hover:bg-neutral-800 hover:bg-neutral-100 h-full py-1.5 px-2 rounded-md`}>
                        <PanelsTopLeft />
                        Overview
                    </Link>
                    <Link href={`/modules/entities?id=${id}`} className={`${currentTab === 1 && "dark:bg-neutral-800 bg-neutral-100"} flex items-center gap-2 w-full dark:hover:bg-neutral-800 hover:bg-neutral-100 h-full py-1.5 px-2 rounded-md`}>
                        <Workflow />
                        Entities
                    </Link>
                    <Link href={`/modules/environment?id=${id}`} className={`${currentTab === 2 && "dark:bg-neutral-800 bg-neutral-100"} flex items-center gap-2 w-full dark:hover:bg-neutral-800 hover:bg-neutral-100 h-full py-1.5 px-2 rounded-md`}>
                        <SlidersHorizontal />
                        Environment
                    </Link>
                    <hr className="dark:border-neutral-700 border-neutral-300" />
                    <h2 className="text-xs text-neutral-500 ml-2.5 mt-2">Application</h2>
                    <Link href={`/modules/routes?id=${id}`} className={`${currentTab === 3 && "dark:bg-neutral-800 bg-neutral-100"} flex items-center gap-2 w-full dark:hover:bg-neutral-800 hover:bg-neutral-100 h-full py-1.5 px-2 rounded-md`}>
                        <Route />
                        Routes
                    </Link>
                    <Link href={`/modules/controllers?id=${id}`} className={`${currentTab === 4 && "dark:bg-neutral-800 bg-neutral-100"} flex items-center gap-2 w-full dark:hover:bg-neutral-800 hover:bg-neutral-100 h-full py-1.5 px-2 rounded-md`}>
                        <Joystick />
                        Controllers
                    </Link>
                    <Link href={`/modules/middlewares?id=${id}`} className={`${currentTab === 5 && "dark:bg-neutral-800 bg-neutral-100"} flex items-center gap-2 w-full dark:hover:bg-neutral-800 hover:bg-neutral-100 h-full py-1.5 px-2 rounded-md`}>
                        <Layers />
                        Middlewares
                    </Link>
                    <Link href={`/modules/validators?id=${id}`} className={`${currentTab === 6 && "dark:bg-neutral-800 bg-neutral-100"} flex items-center gap-2 w-full dark:hover:bg-neutral-800 hover:bg-neutral-100 h-full py-1.5 px-2 rounded-md`}>
                        <TicketCheck />
                        Validators
                    </Link>
                    <hr className="dark:border-neutral-700 border-neutral-300" />
                    <h2 className="text-xs text-neutral-500 ml-2.5 mt-2">Access & Data</h2>
                    <Link href={`/modules/database?id=${id}`} className={`${currentTab === 7 && "dark:bg-neutral-800 bg-neutral-100"} flex items-center gap-2 w-full dark:hover:bg-neutral-800 hover:bg-neutral-100 h-full py-1.5 px-2 rounded-md`}>
                        <Database />
                        Database
                    </Link>
                    <Link href={`/modules/authentication?id=${id}`} className={`${currentTab === 8 && "dark:bg-neutral-800 bg-neutral-100"} flex items-center gap-2 w-full dark:hover:bg-neutral-800 hover:bg-neutral-100 h-full py-1.5 px-2 rounded-md`}>
                        <KeyRound />
                        Authentication
                    </Link>
                    <Link href={`/modules/security?id=${id}`} className={`${currentTab === 9 && "dark:bg-neutral-800 bg-neutral-100"} flex items-center gap-2 w-full dark:hover:bg-neutral-800 hover:bg-neutral-100 h-full py-1.5 px-2 rounded-md`}>
                        <EarthLock />
                        Security
                    </Link>
                    <hr className="dark:border-neutral-700 border-neutral-300" />
                    <h2 className="text-xs text-neutral-500 ml-2.5 mt-2">Assistants</h2>
                    <Link href={`/modules/logs?id=${id}`} className={`${currentTab === 10 && "dark:bg-neutral-800 bg-neutral-100"} flex items-center gap-2 w-full dark:hover:bg-neutral-800 hover:bg-neutral-100 h-full py-1.5 px-2 rounded-md`}>
                        <FileClock />
                        Logs
                    </Link>
                    <Link href={`/modules/documentation?id=${id}`} className={`${currentTab === 11 && "dark:bg-neutral-800 bg-neutral-100"} flex items-center gap-2 w-full dark:hover:bg-neutral-800 hover:bg-neutral-100 h-full py-1.5 px-2 rounded-md`}>
                        <FileText />
                        Documentation
                    </Link>
                    <Link href={`/modules/error-handling?id=${id}`} className={`${currentTab === 12 && "dark:bg-neutral-800 bg-neutral-100"} flex items-center gap-2 w-full dark:hover:bg-neutral-800 hover:bg-neutral-100 h-full py-1.5 px-2 rounded-md`}>
                        <ShieldX />
                        Error Handling
                    </Link>
                </nav>
            </aside>
            <div className="flex flex-col w-full">
                <article className="w-full">
                    <div className="border-b dark:border-b-neutral-800 border-b-neutral-300 pb-2 flex items-center justify-between">
                        <h1 className="font-semibold text-lg">
                            {titleTab}
                        </h1>
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
                    {children}
                </article>
            </div>
        </section>
    )
}

export default ModuleLayout;