import { RadioItem } from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import { useEffect } from "react";

type Props = {
    title: string;
    description?: string;
    imagePath?: string;
    checked: boolean;
}

export const BlockOption = ({ title, description, imagePath, checked }: Props) => {
    useEffect(() => {
        if (description && imagePath) {
            throw new Error("It is not possible to use the BlockOption component with both description and imagePath properties.")
        }
    }, []);

    return (
        <button className={`${checked ? "border-blue-500 dark:bg-blue-900/20" : "dark:border-neutral-700 dark:hover:border-neutral-500 hover:border-neutral-400 border-neutral-300"} dark:bg-neutral-800 bg-neutral-100 w-full p-4 rounded-md border transition-all`}>
            <div className={`
            ${imagePath && "flex flex-col gap-4 h-full"}
            ${description && "flex items-start gap-4 h-full"}
            `}>
                <div className="flex gap-2 items-center">
                    <div className={`${checked ? "dark:border-blue-500 border-blue-500 bg-blue-500" : "dark:border-neutral-700 border-neutral-300"} flex items-center justify-center rounded-full h-5 w-5 border`}>
                        {checked && <div className="dark:bg-white bg-white h-2 w-2 rounded-full"></div>}
                    </div>
                    {imagePath && (<h3 className="w-max">{title}</h3>)}
                </div>
                {imagePath && (
                    <div className="flex flex-col items-start -mt-0.5 w-full">
                        <div className="flex items-center justify-center w-full pb-4">
                            <Image
                                src={imagePath}
                                alt={title + " image"}
                                width={70}
                                height={70}
                            >
                            </Image>
                        </div>
                    </div>
                )}
                {description && (
                    <div className="flex flex-col -mt-1">
                        <h3 className="w-max">{title}</h3>
                        <p className="dark:text-gray-400 text-gray-500">{description}</p>
                    </div>
                )}
            </div>
        </button>
    )
}