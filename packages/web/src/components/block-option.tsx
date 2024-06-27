import { useEffect } from "react";

type Props = {
    title: string;
    description?: string;
    image?: React.ReactNode;
    checked: boolean;
    onClick: () => void;
}

export const BlockOption = ({ title, description, image, checked, onClick }: Props) => {
    useEffect(() => {
        if (description && image) {
            throw new Error("It is not possible to use the BlockOption component with both description and image properties.")
        }
    }, []);

    return (
        <button onClick={onClick} className={`${checked ? "border-blue-500 dark:bg-blue-900/20" : "dark:border-neutral-700 dark:hover:border-neutral-500 hover:border-neutral-400 border-neutral-300"} dark:bg-neutral-800 bg-neutral-100 w-full h-full p-4 rounded-md border transition-all`}>
            <div className={`
            ${image && "flex flex-col gap-4 h-full"}
            ${description && "flex items-start gap-4 h-full"}
            `}>
                <div className="flex gap-2 items-center">
                    <div className={`${checked ? "dark:border-blue-500 border-blue-500 bg-blue-500" : "dark:border-neutral-700 border-neutral-300"} flex items-center justify-center rounded-full h-5 w-5 border`}>
                        {checked && <div className="dark:bg-white bg-white h-2 w-2 rounded-full"></div>}
                    </div>
                    {image && (<h3 className="w-max">{title}</h3>)}
                </div>
                {image && (
                    <div className="flex flex-col items-start -mt-0.5 w-full">
                        <div className="flex justify-center w-full pb-4">
                            {image}
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