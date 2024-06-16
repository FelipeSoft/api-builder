import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/components/ui/use-toast";
import { z } from "zod";
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormMessage,
    Form,
    FormLabel
} from "@/components/ui/form"
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Controller } from "@/types/Controller";
import { Edit, Trash } from "lucide-react";

const FormSchema = z.object({
    entity: z.string().min(1, {
        message: "Please select a entity to controller."
    }),
    router: z.string().min(1, {
        message: "Please select a router to controller"
    }),
});

export const BasicSettings = () => {
    const [controllers, setControllers] = useState<Controller[]>([]);

    useEffect(() => {
        setControllers([
            { name: "UserController", entity: "User", procedure: "", router: "UserRouter" }
        ])
    }, []);

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            entity: "",
            router: ""
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
        <div className="flex flex-col w-full gap-8">
            <div className="w-full flex gap-8">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-1/2 flex flex-col gap-4 mt-4">
                        <FormField
                            control={form.control}
                            name="entity"
                            render={({ field }) => (
                                <FormItem className="w-full">
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
                        <FormField
                            control={form.control}
                            name="router"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>
                                        Router
                                    </FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a router" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="UserRouter">UserRouter</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormDescription>
                                        Choose an router from routes.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button size="lg" variant="emerald" type="submit">Create Controller</Button>
                    </form>
                </Form>
                <div className="w-1/2">Another content here.</div>
            </div>
            <Table>
                <Table>
                    <TableCaption className="text-center">This list will be added to a router.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[50px]">Name</TableHead>
                            <TableHead>Belongs to Entity</TableHead>
                            <TableHead>Router</TableHead>
                            <TableHead className="text-right"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {controllers.map((controller: Controller) => {
                            return (
                                <TableRow>
                                    <TableCell className="font-medium">{controller.name}</TableCell>
                                    <TableCell>{controller.entity}</TableCell>
                                    <TableCell>{controller.router}</TableCell>
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
            </Table>
        </div>
    )
}