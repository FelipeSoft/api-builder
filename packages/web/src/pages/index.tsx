import MainLayout from "@/components/layouts/main-layout";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import Link from "next/link";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from "@/components/ui/use-toast";

const FormSchema = z.object({
    title: z.string().min(2, {
        message: "Title must be at least 2 characters.",
    }),
    description: z.string().min(2, {
        message: "Description must be at least 2 characters.",
    })
})

const Index = () => {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            title: "",
            description: ""
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
        <MainLayout>
            <div className="flex items-center justify-between">
                <div className="flex flex-col">
                    <h1 className="text-xl mb-1 font-semibold">Your modules</h1>
                    <p className="text-sm text-neutral-500">Build REST APIs efficiently with RapidREST.</p>
                </div>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="default" className="flex items-center gap-2"><Plus /> New Module</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>New Module</DialogTitle>
                            <DialogDescription>
                                Create a new REST API with endpoints, database connection, authentication and more.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="w-full">
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
                                    <FormField
                                        control={form.control}
                                        name="title"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Title</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="My REST API" {...field} />
                                                </FormControl>
                                                <FormDescription>
                                                    This is the public display name for your module.
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="description"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Description</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Designed for discerning users" {...field} />
                                                </FormControl>
                                                <FormDescription>
                                                    A simple description explaining what your REST API does.
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <DialogFooter className="w-full">
                                        <Button type="submit">Create New Module</Button>
                                    </DialogFooter>
                                </form>
                            </Form>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
            <nav className="flex flex-col gap-4 mt-10">
                <Link href="/modules/overview?id=1" className="dark:hover:bg-neutral-800 hover:bg-neutral-100 transition-all py-4 dark:hover:px-4 hover:px-4 border-b dark:border-neutral-700 border-neutral-300">
                    <h2>REST API Example</h2>
                    <p className="text-sm text-neutral-500">This is an example module of a REST API built with RapidREST.</p>
                </Link>
            </nav>
        </MainLayout>
    )
}

export default Index;