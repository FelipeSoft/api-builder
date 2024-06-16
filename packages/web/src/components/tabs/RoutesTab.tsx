import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../ui/button"
import { Edit, ListPlus, Router, Trash } from "lucide-react"
import { useEffect, useState } from "react"
import { Endpoint } from "@/types/endpoints/Enpoint"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "../ui/use-toast"
import { FormControl, FormDescription, FormField, FormItem, FormMessage, Form, FormLabel } from "../ui/form"
import { Input } from "../ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const FormSchema = z.object({
    method: z.string().min(1, {
        message: "Please select an method to request."
    }),
    uri: z.string().refine((value) => value.includes('/') && value.charAt(0) === "/", { message: "Illegal argument. Please, provide a valid URI /looks/like/this" }),
    action: z.string().min(4, {
        message: "This should contain at least 4 characters."
    }),
})

const RoutesTab = () => {
    const [endpoints, setEndpoints] = useState<Endpoint[]>([]);

    useEffect(() => {
        setEndpoints([
            { method: "GET", uri: "/user/all", action: "getAllUsers" },
            { method: "POST", uri: "/user/create", action: "createUser" },
            { method: "PATCH", uri: "/user/update/:id", action: "updateUser" }
        ])
    }, [])

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            method: "",
            action: "",
            uri: ""
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        })
    }

    return (
        <section className="w-full">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col gap-4 mt-4">
                    <FormField
                        control={form.control}
                        name="method"
                        render={({ field }) => (
                            <FormItem className="w-2/5">
                                <FormLabel>
                                    Entity
                                </FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select an entity" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="User">User</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormDescription>
                                    Choose an entity to apply your business rules.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </form>
            </Form>
            <div className="flex items-center justify-between">
                <h2 className="text-neutral-500 mt-8 mb-4 font-semibold flex items-center gap-2"><ListPlus />Endpoints</h2>
                <h2 className="text-neutral-500 mt-8 mb-4">Count: {endpoints.length}</h2>
            </div>
            <Table>
                <TableCaption className="text-center">This list will be added to a router.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[50px]">Method</TableHead>
                        <TableHead>URI</TableHead>
                        <TableHead>Action</TableHead>
                        <TableHead className="text-right"></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {endpoints.map((endpoint: Endpoint) => {
                        return (
                            <TableRow>
                                <TableCell className="font-medium">{endpoint.method}</TableCell>
                                <TableCell>{endpoint.uri}</TableCell>
                                <TableCell>{endpoint.action}</TableCell>
                                <TableCell className="text-right flex items-center justify-end gap-4">
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Button variant={"ghost"} size={"icon"}><Edit /></Button>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Edit Endpoint</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Button variant={"destructive"} size={"icon"}><Trash /></Button>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Delete Endpoint</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
            <nav className="flex items-center justify-center gap-4 mt-4">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant={"emerald"} className="flex items-center gap-2"><ListPlus /> New Endpoint</Button>
                    </DialogTrigger>
                    <DialogContent className="overflow-y-auto max-h-screen">
                        <DialogClose />
                        <DialogHeader>
                            <DialogTitle>Create New Endpoint</DialogTitle>
                            <DialogDescription>An <span className="text-blue-500">Endpoint</span> is the part of the RESTful API that will be responsible for mapping the possible resources that the client can access on the server.</DialogDescription>
                        </DialogHeader>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col gap-4">
                                <fieldset className="flex gap-4">
                                    <FormField
                                        control={form.control}
                                        name="method"
                                        render={({ field }) => (
                                            <FormItem className="w-2/5">
                                                <FormLabel>
                                                    Method
                                                </FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select a method" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="GET">GET</SelectItem>
                                                        <SelectItem value="POST">POST</SelectItem>
                                                        <SelectItem value="PUT">PUT</SelectItem>
                                                        <SelectItem value="PATCH">PATCH</SelectItem>
                                                        <SelectItem value="DELETE">DELETE</SelectItem>
                                                        <SelectItem value="OPTIONS">OPTIONS</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormDescription>
                                                    The purpose of the request to the RESTful API server.                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="uri"
                                        render={({ field }) => (
                                            <FormItem className="w-3/5">
                                                <FormLabel>
                                                    URI
                                                </FormLabel>
                                                <FormControl>
                                                    <Input className="w-full" placeholder="/test/hello" {...field} />
                                                </FormControl>
                                                <FormDescription>
                                                    This is where the client will access the endpoint resource.
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </fieldset>
                                <FormField
                                    control={form.control}
                                    name="action"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                Action
                                            </FormLabel>
                                            <FormControl>
                                                <Input placeholder="useCamelCaseFormat" {...field} />
                                            </FormControl>
                                            <FormDescription>
                                                This will be the name of a Controller method.
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <div className="flex items-center gap-4">
                                    <DialogClose asChild>
                                        <Button className="w-full" type="reset" variant={"outline"}>Cancel</Button>
                                    </DialogClose>
                                    <Button className="w-full" type="submit" variant={"emerald"}>Confirm</Button>
                                </div>
                            </form>
                        </Form>
                    </DialogContent>
                </Dialog>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="flex items-center gap-3" variant={"blue"}><Router />Add To Router</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Are you absolutely sure?</DialogTitle>
                            <DialogDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </nav>
            <div className="flex items-center justify-between">
                <h2 className="text-neutral-500 mt-8 mb-4 font-semibold flex items-center gap-2"><Router />Routers</h2>
                <h2 className="text-neutral-500 mt-8 mb-4">Count: 1</h2>
            </div>
            <Table>
                <TableCaption className="text-center">These are your routers, they are important for an ordered communication between client and server.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Endpoints Count</TableHead>
                        <TableHead>Belongs to Entity</TableHead>
                        <TableHead className="text-right"></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">UserRouter</TableCell>
                        <TableCell>3</TableCell>
                        <TableCell>User</TableCell>
                        <TableCell className="text-right flex items-center justify-end gap-4">
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant={"ghost"} size={"icon"}><Edit /></Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Edit Endpoints of Router</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant={"destructive"} size={"icon"}><Trash /></Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Delete Router</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </section>
    )
}

export default RoutesTab;