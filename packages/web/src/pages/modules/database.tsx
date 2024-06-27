import { BlockOption } from "@/components/block-option";
import MainLayout from "@/components/layouts/main-layout"
import ModuleLayout from "@/components/layouts/module-layout"

const Database = () => {
    return (
        <MainLayout>
            <ModuleLayout currentTab={7} titleTab="Database">
                <div className="mt-8 mb-4">
                    <h2 className="text-neutral-500 font-semibold flex items-center gap-2">Dialect Type</h2>
                    <p className="text-sm text-neutral-500">Choose from the different database dialects available, whether relational or non-relational.</p>
                </div>
                <nav className="grid grid-cols-3 gap-4">
                    <BlockOption
                        checked={true}
                        title="MySQL"
                        description="Relational Database"
                    ></BlockOption>
                    <BlockOption
                        checked={false}
                        title="MySQL"
                        imagePath=""
                    ></BlockOption>
                    <BlockOption
                        checked={false}
                        title="MySQL"
                        imagePath=""
                    ></BlockOption>
                </nav>
            </ModuleLayout>
        </MainLayout>
    )
}

export default Database;