import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/components/ui/use-toast";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { CirclePlay, CircleStop, EyeOff, Info, Terminal } from "lucide-react";
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormMessage,
    Form,
    FormLabel
} from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const FormSchema = z.object({
    controller: z.string().min(1, {
        message: "Please select a controller."
    }),
});

export const ProcedureTree = () => {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            controller: "",
        },
    })
    if ("" === "") {

    }

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
            <div className="px-4">
                <h2 className={`text-neutral-500 mt-4 mb-4 font-semibold flex items-center gap-2`}>
                    Editor
                </h2>
                <div className="pb-4">
                    <div className="flex gap-4">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="w-1/2 flex flex-col gap-4 mt-4">
                                <FormField
                                    control={form.control}
                                    name="controller"
                                    render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormLabel>
                                                Controller
                                            </FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select a controller" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="UserController">UserController</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormDescription>
                                                Choose a controller to list all actions and procedures.
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </form>
                        </Form>
                        <Alert>
                            <Info className="h-4 w-4" />
                            <AlertTitle>Info</AlertTitle>
                            <AlertDescription>
                                In our controllers we use the Active Record design pattern, which in Software Architecture is the action of integrating business rules together with data persistence in a single object.                            </AlertDescription>
                        </Alert>
                    </div>
                    <div className="rounded-md border dark:border-neutral-700 p-4 mt-8">
                        <div className="flex justify-between w-full">
                            <div className="flex items-center gap-2">
                                <h3>
                                    getAllUsers
                                </h3>
                                <span className="bg-blue-500 py-1 px-2 rounded-md font-semibold text-xs">GET</span>
                            </div>
                            <Button variant={"ghost"} className="flex items-center gap-2"><EyeOff />Hide</Button>
                        </div>
                        <div className="">
                            <h4 className="text-neutral-500 text-sm mt-4 font-semibold flex items-center gap-2">
                                <CirclePlay />
                                Start
                            </h4>
                            <pre className="flex flex-col gap-2 my-4">
                                <code className="font-semibold rounded-md dark:bg-neutral-700 bg-neutral-100 shadow-sm px-4 py-2">
                                    <span className="text-pink-700 font-semibold">declare</span>
                                    <span className="text-blue-400 font-semibold"> existsUsersInDatabase </span>
                                </code>
                                <code className="font-semibold rounded-md dark:bg-neutral-700 bg-neutral-100 shadow-sm px-4 py-2">
                                    <span className="text-blue-400 font-semibold">existsUsersInDatabase</span>
                                    <span className="text-pink-700 font-semibold"> receive</span>
                                    <span className="text-green-400 font-semibold"> Database</span>
                                    .<span className="text-yellow-400 font-semibold">nonEmpty()</span>
                                </code>
                                <code className="font-semibold rounded-md dark:bg-neutral-700 bg-neutral-100 shadow-sm px-4 py-2">
                                    <span className="text-pink-700 font-semibold">if</span>
                                    <span className="text-blue-400 font-semibold"> existsUsersInDatabase </span>
                                    <span className="text-pink-700 font-semibold">then</span>
                                </code>
                                <code className="text-black dark:text-white font-semibold rounded-md dark:bg-neutral-700 bg-neutral-100 shadow-sm px-4 py-2 ml-10">
                                    <span className="text-pink-700 font-semibold">return</span>
                                    <span className="text-green-400 font-semibold"> Database</span>
                                    .<span className="text-yellow-400 font-semibold">all()</span>
                                </code>
                                <code className="font-semibold rounded-md dark:bg-neutral-700 bg-neutral-100 shadow-sm px-4 py-2">
                                    <span className="text-pink-700 font-semibold">else</span>
                                </code>
                                <code className="text-black dark:text-white font-semibold rounded-md dark:bg-neutral-700 bg-neutral-100 shadow-sm px-4 py-2 ml-10">
                                    <span className="text-pink-700 font-semibold">return</span>
                                    <span className="text-green-400 font-semibold"> Assert</span>
                                    .<span className="text-blue-400 font-semibold">EMPTY</span>
                                </code>
                                <button className="text-black dark:text-white font-semibold rounded-md border border-dashed shadow-sm px-4 py-2">
                                    + Add Procedure
                                </button>
                            </pre>
                            <h4 className="text-neutral-500 text-sm font-semibold flex items-center gap-2">
                                <CircleStop />
                                End
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}