import { Moon, Settings, Sun } from "lucide-react";
import Link from "next/link";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "../ui/button";
import { useTheme } from "next-themes";

type Props = {
    children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
    const { setTheme } = useTheme();

    return (
        <main className="min-h-screen bg-white dark:bg-neutral-900">
            <header className="z-20 fixed top-0 w-full bg-white dark:bg-neutral-900 dark:border-neutral-700 border-b border-b-neutral-300 h-12 px-4">
                <nav className="max-w-7xl mx-auto h-full flex items-center justify-between">
                    <ul className="flex items-center gap-4">
                        <li><Link href="/" className="dark:hover:bg-neutral-800 hover:bg-neutral-100 h-full py-1 px-2 rounded-md">Home</Link></li>
                        <li><Link href="/workspaces" className="dark:hover:bg-neutral-800 hover:bg-neutral-100 h-full py-1 px-2 rounded-md">Workspaces</Link></li>
                    </ul>
                    <ul className="flex items-center gap-4">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                    <span className="sr-only">Toggle theme</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => setTheme("light")}>
                                    Light
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme("dark")}>
                                    Dark
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme("system")}>
                                    System
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link href="/settings" className="flex items-center justify-center dark:hover:bg-neutral-800 hover:bg-neutral-100 p-1 rounded-md">
                                        <Settings className="h-6 w-6" />
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Go to Settings</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link href="/profile" className="">
                                        <Avatar className="h-8 w-8">
                                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Go to Profile</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </ul>
                </nav>
            </header>
            <div className="max-w-7xl mx-auto h-full mt-10 px-4 pt-12">
                {children}
            </div>
        </main>
    )
}

export default MainLayout;