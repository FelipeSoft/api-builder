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
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

const FormSchema = z.object({
    key: z.string().min(1, {
        message: "Please provide a name for key."
    }),
    value: z.string().min(1, {
        message: "Please provide a value for the key."
    })
})

export const EnvironmentTab = () => {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            key: "",
            value: "",
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
            <div className="mt-8 mb-4">
                <h2 className="text-neutral-500 font-semibold flex items-center gap-2">Variables</h2>
                <p className="text-sm text-neutral-500">You can create your personals environment variables, with a key and a value.</p>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col gap-4">
                    <fieldset className="flex items-center gap-4">
                        <FormField
                            control={form.control}
                            name="key"
                            render={({ field }) => (
                                <FormItem className="w-1/2">
                                    <FormLabel>
                                        Key
                                    </FormLabel>
                                    <FormControl>
                                        <Input className="w-full" placeholder="PORT" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="value"
                            render={({ field }) => (
                                <FormItem className="w-1/2">
                                    <FormLabel>
                                        Value
                                    </FormLabel>
                                    <FormControl>
                                        <Input className="w-full" placeholder="3000" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </fieldset>
                    <div className="flex justify-end">
                        <Button className="w-max flex items-center gap-2" type="submit" variant={"emerald"}><Plus />Add Variable</Button>
                    </div>
                </form>
            </Form>
        </section>
    )
}